import {HttpClient, json} from 'aurelia-fetch-client'

export class Settings {

    userInfo = {"id": "1", "username": "testUser1"}
    userList = []

	constructor() {
    }

    activate() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/users/1')
            .then(response => response.json())
            .then(users => this.userList = users);
    }

    sendUserSetInfo() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/users/updateInfo', {
            'method': "POST",
            'body': json(this.userInfo)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Server saatis " + data.profession);
        });

        console.log("Method executed!")
    }
}