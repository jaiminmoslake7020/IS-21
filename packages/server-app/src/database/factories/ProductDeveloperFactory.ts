import * as Faker from 'faker';
import {define} from 'typeorm-seeding';
import * as uuid from 'uuid';
import {ProductDeveloper} from '../../models/ProductDeveloper';

define(ProductDeveloper, (faker: typeof Faker, settings: { role: string }) => {
    const productDeveloper = new ProductDeveloper();
    productDeveloper.id = uuid.v1();
    return productDeveloper;
});
