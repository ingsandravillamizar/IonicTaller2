import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

 export function ValidatorEspaciosValidator(nameRe: RegExp): ValidatorFn {
   return (control: AbstractControl): ValidationErrors | null => {

     const forbidden = nameRe.test(control.value);
     return forbidden ? {ValidatorEspacios: {value: control.value}} : null;
   };
 }


