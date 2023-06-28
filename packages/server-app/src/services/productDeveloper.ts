import {AppDataSource} from '../data-source';
import {ProductDeveloper} from '../models/ProductDeveloper';

const getProductDeveloperRepo = () => {
    return AppDataSource.getRepository(ProductDeveloper)
}


export const getProductDevelopersByProductId = async (id: string):Promise<{developerIdList:string}|undefined> => {
    let query = getProductDeveloperRepo().createQueryBuilder('pd');
    query = query.select('GROUP_CONCAT(pd.developer_id) as developerIdList');
    query = query.where("pd.productId=:productId", {productId: id})
    query = query.groupBy("pd.productId")
    return await query.getRawOne();
}

export async function bulkInsertProductDeveloper(Developers, productId: string): Promise<void> {
    const newProductDevelopers = [] as ProductDeveloper[];
    Developers.map((s:string) => {
        const pdObj = Object.assign(new ProductDeveloper(), {
            productId,
            developerId: s
        });
        newProductDevelopers.push(pdObj);
    });

    const pdRepo = getProductDeveloperRepo();
    await pdRepo.createQueryBuilder().insert().values(newProductDevelopers).execute();
}

export async function bulkUpdateProductDeveloper(Developers, productId: string): Promise<void> {
    const developerExists = await getProductDevelopersByProductId(productId);
    const {
        developerIdList
    } = developerExists || {};
    const developerIdsArray = (developerIdList || '').split(',');

    const newProductDevelopers = [] as ProductDeveloper[];
    Developers.map((s:string) => {
        if (!developerIdsArray.includes(s)) {
            const pdObj = Object.assign(new ProductDeveloper(), {
                productId,
                developerId: s
            });
            newProductDevelopers.push(pdObj);
        }
    });

    const pdRepo = getProductDeveloperRepo();
    await pdRepo.createQueryBuilder().insert().values(newProductDevelopers).execute();
}
