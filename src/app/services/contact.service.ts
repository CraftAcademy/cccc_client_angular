import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Datastore } from './datastore.service';
import { Contact } from '../models/contact';

@Injectable()
export class ContactService {

  constructor(private datastore: Datastore) { }

  getAll(): Observable<Contact[]> {
    return this.datastore.findAll(Contact, {})
             .map(res => res.getModels());
  }

  show(id): Observable<Contact> {
    return this.datastore.findRecord(Contact, id);
  }
}
