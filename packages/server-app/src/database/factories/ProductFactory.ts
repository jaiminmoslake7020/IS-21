import * as Faker from 'faker';
import {define} from 'typeorm-seeding';
import * as uuid from 'uuid';

import {MethodologyData, Product} from '../../models/Product';

export const getName = (faker: typeof Faker) => {
    const gender = faker.random.number(1);
    const firstName = faker.name.firstName(gender);
    const lastName = faker.name.lastName(gender);
    return firstName+" "+lastName;
}

define(Product, (faker: typeof Faker, settings: { role: string }) => {
    const productName = faker.commerce.productName();
    const companyName = faker.company.companyName();
    const product = new Product();
    product.productId = uuid.v1();
    product.productName = productName;
    product.startDate = faker.date.past();
    product.productOwnerName = companyName;
    product.scrumMasterName = getName(faker);
    product.methodology = MethodologyData[faker.random.number(1)];
    product.location = faker.address.city();

    // const developers = [] as string[];
    // const max = faker.random.number(4);
    // for(let i = 0; i<=max; i++) {
    //     developers.push(getName(faker));
    // }
    // product.Developers = JSON.stringify(developers);

    return product;
});
