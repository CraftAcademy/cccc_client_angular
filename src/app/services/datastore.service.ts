import { Injectable } from '@angular/core';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { Http } from '@angular/http';
import { Contact } from '../models/contact';

const config: DatastoreConfig = {
  baseUrl: 'https://ca-address-book.herokuapp.com/api',
  //baseUrl: 'http://localhost:3000/api',
  models: {
    contacts: Contact
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }

}
