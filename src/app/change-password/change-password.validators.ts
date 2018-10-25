import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ChangePasswordValidators {

    static shouldMatchDbPassword(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (control.value !== '1234')
                    resolve({ shouldMatchDbPassword: true });
                else resolve(null);
            });
        });
    }

    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newPassword');
        let repeatPassword = control.get('repeatPassword');

        if (newPassword.value !== repeatPassword.value)
            return { passwordsShouldMatch: true };

        return null;
    }
}