import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Employee } from './employee';

export class EmployeeData implements InMemoryDbService{
    createDb() {
        console.log("createDb");
        let employees: Employee[] = [
                {
                'id':1001,
                'firstname':'mansi',
                'lastname':'patel',
                'email':'mansi@gmail.com',
                'address':'vadodara',
                'username':'mannu',
                'password':'password',
                'gender':'female',
                'qualification':'manager',
                'experience':'0-1',
                'langKnown':'C/C++'
                },
                {
                    'id':1002,
                'firstname':'nancy',
                'lastname':'patel',
                'email':'nancy@gmail.com',
                'address':'surat',
                'username':'pnancy',
                'password':'n123456',
                'gender':'female',
                'qualification':'Devlepor',
                'experience':'1-3',
                'langKnown':'C#'
                },
                {
                'id':1003,
                'firstname':'priya',
                'lastname':'patel',
                'email':'priya@gmail.com',
                'address':'rajkot',
                'username':'piyu',
                'password':'patel07',
                'gender':'female',
                'qualification':'web designer',
                'experience':'0-1',
                'langKnown':'C#'
                },
                {
                'id':1004,
                'firstname':'hitanshu',
                'lastname':'zavare',
                'email':'hitanshu@gmail.com',
                'address':'vadodara',
                'username':'sonu',
                'password':'hard12',
                'gender':'male',
                'qualification':'manager',
                'experience':'0-1',
                'langKnown':'PHP'
                }
            ];
        return { employees };
    }
}
