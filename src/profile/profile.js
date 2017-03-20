import {HttpClient, json} from 'aurelia-fetch-client'

export class Profile {
	userList = []

	constructor() {
    }

    activate() {
        let client = new HttpClient();

        client.fetch('http://localhost:8080/users/1')
            .then(response => response.json())
            .then(users => this.userList = users);
    }
}