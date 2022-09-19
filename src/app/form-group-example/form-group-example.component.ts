import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group-example',
  templateUrl: './form-group-example.component.html',
  styleUrls: ['./form-group-example.component.scss']
})
export class FormGroupExampleComponent implements OnInit {

  public profileForm: FormGroup;
  public isSubmitted: boolean;
  public profileData: any;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.profileData = {
      firstName: 'Shahbaz',
      lastName: 'Shaikh',
      age: 28,
      address: {
        city: 'Bilimora',
        state: 'Gujarat',
        zipCode: '396321'
      },
      terms: true
    }
    this.isSubmitted = false;
    this.profileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      lastName: ['', [Validators.required, Validators.maxLength(10)]],
      userName: ['', [Validators.required, Validators.pattern('^[a-z0-9]*$')]],
      phone: ['', [Validators.pattern('^[0-9]*$')]],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        state: [''],
        zipCode: ['']
      }),
      terms: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.profileForm.patchValue({
      firstName: 'test',
    });
  }

  public saveForm(): void {
    this.isSubmitted = true;
    console.log(this.profileForm);
    if(this.profileForm.valid) {
      alert(JSON.stringify(this.profileForm.value))
    }
  }

  public reset(): void {
    this.profileForm.reset();
  }
}
