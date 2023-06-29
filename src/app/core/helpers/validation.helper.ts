import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageLimitValidator(minAge: any): ValidatorFn {
  console.log(minAge);
  return (a: AbstractControl): { [key: string]: boolean } | null =>
    a.value &&
    new Date().getFullYear() - new Date(a.value).getFullYear() <= minAge
      ? { ageLimit: true }
      : null;
}
