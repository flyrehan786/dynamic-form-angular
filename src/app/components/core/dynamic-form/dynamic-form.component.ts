import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formConfig: any; // Input property to receive form configuration
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    const group: any = {};

    this.formConfig.fields.forEach((field: any) => {
      const validators = [];
      if (field.required) {
        validators.push(Validators.required);
      }
      group[field.name] = [field.value || '', validators];
    });

    this.form = this.fb.group(group);
  }

  getFieldControl(field: any) {
    return this.form.get(field.name);
  }
  submit(f) {
    console.log(f);
  }
}
