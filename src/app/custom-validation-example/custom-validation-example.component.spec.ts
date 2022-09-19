import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomValidationExampleComponent } from './custom-validation-example.component';

describe('CustomValidationExampleComponent', () => {
  let component: CustomValidationExampleComponent;
  let fixture: ComponentFixture<CustomValidationExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomValidationExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
