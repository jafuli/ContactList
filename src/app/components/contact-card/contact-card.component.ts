import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;
  mouseIn: boolean = false;
  displayIcon: boolean = true;

  constructor() { }

  ngOnInit(): void {
    console.log(this.contact)
  }

  displayPhoneEmail() {
    this.mouseIn = !this.mouseIn;
  }

  displayLogo() {
    let iconUrl = this.contact.icon;
    if (this.contact.icon) {

    }
  }

}
