import { IsNotEmpty } from 'class-validator';
import {Column, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {ProductDeveloper} from './ProductDeveloper';

export const MethodologyData = ['Agile','Waterfall'];

@Entity()
export class Product {

    @PrimaryColumn('uuid')
    public productId: string;

    @IsNotEmpty()
    @Column()
    public productName: string;

    @IsNotEmpty()
    @Column()
    public startDate: Date;

    @IsNotEmpty()
    @Column({
        default:"Agile",
    })
    methodology: string;

    @IsNotEmpty()
    @Column()
    public scrumMasterName: string;

    @OneToMany(type => ProductDeveloper, productDeveloper => productDeveloper.product)
    public Developers: ProductDeveloper[];

    @IsNotEmpty()
    @Column()
    public productOwnerName: string;

    public toString(): string {
        return `${this.productName}`;
    }

}