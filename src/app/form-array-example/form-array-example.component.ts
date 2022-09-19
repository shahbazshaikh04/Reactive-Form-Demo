import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.scss']
})
export class FormArrayExampleComponent implements OnInit {

  orderForm: FormGroup;
  items: FormArray;

  constructor(
    private formBuilder: FormBuilder
    ) {
    this.orderForm = new FormGroup({
      items: new FormArray([])
    });
  }

  ngOnInit() {
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

}
