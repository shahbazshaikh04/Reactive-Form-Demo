import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-example',
  templateUrl: './form-control-example.component.html',
  styleUrls: ['./form-control-example.component.scss']
})
export class FormControlExampleComponent implements OnInit {

  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {    
    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('')
    });

    // this.userForm = this.fb.group({
    //   firstName: ['', [Validators.required]],
    //   lastName: ['']
    // });
   }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log(this.userForm);
  }
}
