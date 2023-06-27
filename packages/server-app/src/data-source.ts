import "reflect-metadata"
import { DataSource } from "typeorm"
import {Product} from './models/Product';
import {Developer} from './models/Developer';
import {ProductDeveloper} from './models/ProductDeveloper';



export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "/Users/Jaimin/Sites/bc-gov/Jaimin-Pandya-ecc-dssb-IS21-code-challenge-req101408/packages/server-app/server.sqlite",
    synchronize: true,
    logging: false,
    entities: [Product, Developer, ProductDeveloper],
    migrations: [],
    subscribers: [],
})
