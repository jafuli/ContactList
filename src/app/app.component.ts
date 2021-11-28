import { ContactsService } from './services/contacts.service';
import { Contact } from './models/contact';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'OpsterContacts';

  private subjectInput = new Subject<any>();
  contacts: Contact[];
  displayedContacts: Contact[];
  isLoading: boolean = true;

  constructor(private contactService: ContactsService) {}

  ngOnInit(): void {
    // setTimeout(() => {
      this.contactService.getContacts().subscribe(
        contacts => {
          this.contacts = this.displayedContacts = contacts;
          this.isLoading = false;
        }
        );
      // }, 1000);

    this.subjectInput.pipe(
      debounceTime(500), distinctUntilChanged()
    ).subscribe(value => {
      this.filter(value);
    })
  }

  onSearch($event: any)  {
    const value = $event.target.value;
    this.subjectInput.next(value);
  }

  filter(value: string) {
    let tempArray = this.contacts.filter(contact => {
      return contact.filterByValue(value);
    });
    this.displayedContacts = tempArray;
  }

}
