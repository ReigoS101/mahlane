import {HttpClient, json} from 'aurelia-fetch-client'

export class CreateEvent {

  eventData = {}

  constructor() {
    this.appName = "aureliaphotoflat"
  }

  createEvent(){
    let client = new HttpClient();

    client.fetch('http://localhost:9000', {
      'method': POST,
      'body': json(this.eventData)
    })
      .then(response => response.json())
  .then(data => {
    })
  }

  chooseEventPicture(eventPicName) {
    document.getElementById("eventpicture").setAttribute("src", eventPicName);
  }
}
