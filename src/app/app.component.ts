import { Component } from '@angular/core';

import { Contact } from './models/contact';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];
  title = 'Contacts';

  constructor(private contactService: ContactService) {
    this.getContacts();
  }

  getContacts(): void {
    this.contactService.getAll()
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }
  showContact(id): void {
    this.contactService.show(id).subscribe(contact => {
      // Redirect to a show route for contact, for now just console.log
      console.log(contact);
    });
  }
}
