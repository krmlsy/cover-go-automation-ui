import { faker } from '@faker-js/faker';


class DataProvider{

    firstName(){
        return faker.person.firstName()
    }

    middleName(){
        return faker.person.middleName()
    }

    lastName(){
        return faker.person.lastName()
    }

    fullName(){
        return faker.person.fullName()
    }

    email(){
        return faker.internet.email()
    }

    address(){
        return faker.location.streetAddress()
    }

    city(){
        return faker.location.city()
    }

    state(){
        return faker.location.state()
    }

    mobileNumber(){
        return faker.phone.number()
    }

    birthdate(){
        let d = faker.date.birthdate().getDay();
        let m = faker.date.birthdate().getMonth() + 1; //Month from 0 to 11
        let y = faker.date.birthdate().getFullYear();
        d= d === 0 ? d+1 : d
        return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }

}

export default DataProvider