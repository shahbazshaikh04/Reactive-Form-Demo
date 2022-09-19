import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validateOldPassword(control: AbstractControl) {

  let existingPassword: string[] = ['Shahbaz@123', 'ng@123'];

  if(existingPassword.some( e => control.value === e)) {
    return { invalidUrl: true };
  }
  return null
}

export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    let control = formGroup.controls[controlName];
    let matchingControl = formGroup.controls[matchingControlName]
    if (
      matchingControl.errors &&
      !matchingControl.errors.confirmPasswordValidator
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPasswordValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}