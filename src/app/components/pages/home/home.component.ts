import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  formConfig = {
    "fields": [
      { "type": "text", "name": "username", "label": "Username", "placeholder": "Enter your username", "required": true },
      { "type": "email", "name": "email", "label": "Email", "placeholder": "Enter your email", "required": true },
      { "type": "select", "name": "country", "label": "Country", "options": [{ "value": "us", "label": "United States" }, { "value": "ca", "label": "Canada" }], "required": true },
      { "type": "checkbox", "name": "terms", "label": "Accept Terms", "required": true },
      {
        "type": "radio",
        "name": "gender",
        "label": "Gender",
        "options": [
          { "value": "male", "label": "Male" },
          { "value": "female", "label": "Female" }
        ],
        "required": true
      }
    ]
  };
  ngOnInit(): void {
  }
}
