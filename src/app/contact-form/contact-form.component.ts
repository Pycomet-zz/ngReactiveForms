import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  projectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    orgName: new FormControl('', Validators.required),
    orgWebsite: new FormControl('', Validators.required),

    orgAddress: new FormGroup({
      street: new FormControl('', Validators.required),
      zip: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
    }),

    projectTitle: new FormControl(''),
    projectDesc: new FormControl(''),
    skillSet: new FormControl(''),
    tasks: new FormControl(''),
    benefits: new FormControl(''),
    projectServices: new FormControl(''),
  });

  updateForm() {
    alert(`Congrats ${this.projectForm.value['name']}! Form Submitted.`);
  }

  onZipChange() {
    let zipCode = this.projectForm.get('orgAddress.zip')?.value;
    this.projectForm.get('orgAddress.city')?.reset();

    const Memory = {
      Kennesaw: ['30144', '30152'],
      Marietta: [
        '30060',
        '30061',
        '30062',
        '30063',
        '30064',
        '30065',
        '30066',
        '30067',
        '30068',
        '30069',
      ],
      Woodstock: ['30188', '300189'],
    };

    for (const [key, values] of Object.entries(Memory)) {
      for (const code in values) {
        if (zipCode === values[code]) {
          this.projectForm.get('orgAddress.city')?.patchValue(`${key}`);
        } else {
          console.log('Not Found')
        }
      }
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
