import { faker } from '@faker-js/faker';

export default {    
    firstName : faker.name.firstName(),
    lastName : faker.name.lastName(),
    email : faker.internet.email(),
    password : '12345',
    birthDay: '9',
    birthMonth: '12',
    birthYear: '1978',
    address : faker.address.streetAddress(),
    city : faker.address.city(),
    country : 'United States',
    addInformation : 'Ei fiz o cadastro',
    company : 'Enterprise',
    state : faker.address.state(),
    postCode : '99900',
    phone : faker.phone.phoneNumber('55 ## #########')
}