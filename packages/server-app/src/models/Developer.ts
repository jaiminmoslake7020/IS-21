import { IsNotEmpty } from 'class-validator';
import {Column, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {ProductDeveloper} from './ProductDeveloper';

@Entity()
export class Developer {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column()
    public name: string;

    @OneToMany(type => ProductDeveloper, productDeveloper => productDeveloper.developerItem)
    public Products: ProductDeveloper[];

    public toString(): string {
        return `${this.name}`;
    }

}
