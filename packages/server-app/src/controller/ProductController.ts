import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Product } from "../models/Product"

export class ProductController {

    private productRepository = AppDataSource.getRepository(Product)

    async all(request: Request, response: Response, next: NextFunction) {
        let query = this.productRepository.createQueryBuilder('product');
        query = query.select('product.*, GROUP_CONCAT(d.name) as DevelopersString ');
        query = query.innerJoin('product_developer', 'pd', 'pd.product_id=productId')
        query = query.innerJoin('developer', 'd', 'd.id=pd.developer_id')
        query = query.where("1")
        query = query.groupBy("product.productId")
        const result = await query.getRawMany();
        return result.map((d) => ({...d, Developers:d.DevelopersString.split(',') }));
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id

        let query = this.productRepository.createQueryBuilder('product');
        query = query.select('product.*, GROUP_CONCAT(d.name) as DevelopersString ');
        query = query.innerJoin('product_developer', 'pd', 'pd.product_id=productId')
        query = query.innerJoin('developer', 'd', 'd.id=pd.developer_id')
        query = query.where("product.productId=:productId", {productId: id})
        query = query.groupBy("product.productId")
        const result = await query.getRawMany();
        result.map((d) => ({...d, Developers:d.DevelopersString.split(',') }));

        if (
            result.length === 0 ||
            result[0].productId !== id
        ) {
            return "product not found"
        }
        return result[0];
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { firstName, lastName, age } = request.body;

        const product = Object.assign(new Product(), {
            firstName,
            lastName,
            age
        })

        return this.productRepository.save(product)
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id


        let product = await this.productRepository.findOne({
            where: { productId: id }
        })

        if (!product) {
            return "product not found"
        }

        const { firstName, lastName, age } = request.body;

        product = Object.assign(new Product(), {
            firstName,
            lastName,
            age
        })

        return this.productRepository.save(product)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = request.params.id

        let productToRemove = await this.productRepository.findOneBy({ productId:id })

        if (!productToRemove) {
            return "product not found"
        }

        await this.productRepository.remove(productToRemove)

        return "product has been removed"
    }

}
