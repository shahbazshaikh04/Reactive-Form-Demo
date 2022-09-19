import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator, validateOldPassword } from '../validations';

@Component({
  selector: 'app-custom-validation-example',
  templateUrl: './custom-validation-example.component.html',
  styleUrls: ['./custom-validation-example.component.scss']
})
export class CustomValidationExampleComponent implements OnInit {

  public formGroup: FormGroup;
  public isSubmitted: boolean;

  constructor(
    private fb: FormBuilder
  ) {
    this.isSubmitted = false;
    this.formGroup = this.fb.group({
      oldPassword: ['', [validateOldPassword]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: ConfirmPasswordValidator('newPassword', 'confirmPassword')
    }
    );
  }

  ngOnInit(): void {
  }

  public saveForm(): void {
    this.isSubmitted = true;
  }
}
