import { Component } from '@angular/core';
import { Datastore } from './services/datastore.service'
import { Contact } from './models/contact'

@Component({
  selector: 'app-root',
  providers: [Datastore],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: any = {};
  title = 'Contacts';
  constructor(private datastore: Datastore) {
    this.getContacts();
  }
  getContacts() {
    this.datastore.findAll(Contact, {
    }).subscribe(
      response => {
        //console.log(data.getModels());
        this.contacts = response.getModels();
      }
      );
  }

  toIterable(val) {
    return Array.from(val);
  }

  showContact(id) {
    this.datastore.findRecord(Contact, id)
      .subscribe(
        response => {
          console.log(response);
        }
      );
  }
}
