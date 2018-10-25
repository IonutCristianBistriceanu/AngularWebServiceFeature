import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ChangePasswordValidators } from './change-password.validators';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent {

  form;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', Validators.required, ChangePasswordValidators.shouldMatchDbPassword],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    }, {
        validator: ChangePasswordValidators.passwordsShouldMatch
      })
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get repeatPassword() {
    return this.form.get('repeatPassword');
  }
}
