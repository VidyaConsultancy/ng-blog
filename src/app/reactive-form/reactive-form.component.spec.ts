import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormControlName } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ReactiveFormComponent } from './reactive-form.component';

describe('ReactiveFormComponent', () => {
  let component: ReactiveFormComponent;
  let fixture: ComponentFixture<ReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ ReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init form group', () => {
    expect(component.blogFormGroup).toBeTruthy();
    expect(component.blogFormGroup.invalid).toBeTrue();
    expect(component.blogFormGroup.valid).toBeFalse();
  });

  it('should render disabled submit button', () => {
    const debugElement = fixture.debugElement;
    const submitBtn = debugElement.query(By.css('.blogs-form button[type="submit"]'));
    const btns = debugElement.queryAll(
      By.css('button')
    );
    // console.log(btns[0]);
    console.log(debugElement.queryAll(By.directive(FormControlName)));
    expect(submitBtn).toBeDefined();
    expect(submitBtn.attributes['disabled']).toBeDefined();
  })

  it('should formGroup have fields in invalid state', () => {
    expect(component.blogFormGroup.get('blogTitle')?.invalid).toBeTrue();
    expect(component.blogFormGroup.get('blogDescription')?.invalid).toBeTrue();

    component.blogFormGroup
      .get('blogTitle')
      ?.setValue(
        'A very long title Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, illo totam! Eligendi quaerat blanditiis veniam quo, accusantium nisi expedita. Error iure ea accusamus, aut minima velit alias praesentium molestiae ad.'
      );
    component.blogFormGroup
      .get('blogDescription')
      ?.setValue(
        'Lorem ipsum dolor sit amet consectetur'
      );
    expect(
      component.blogFormGroup.get('blogTitle')?.errors?.maxlength
    ).toBeTruthy();
    expect(component.blogFormGroup.get('blogDescription')?.errors?.minlength).toBeTruthy();
  })

  it('should formGroup have fields in valid state', () => {
    component.blogFormGroup.get('blogTitle')?.setValue('A very long title');
    component.blogFormGroup
      .get('blogDescription')
      ?.setValue(
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, illo totam! Eligendi quaerat blanditiis veniam quo, accusantium nisi expedita. Error iure ea accusamus, aut minima velit alias praesentium molestiae ad.'
      );
    expect(component.blogFormGroup.get('blogTitle')?.valid).toBeTrue();
    expect(component.blogFormGroup.get('blogDescription')?.valid).toBeTrue();
    expect(component.blogFormGroup.valid).toBeTrue();
  })
});
