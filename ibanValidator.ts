import IBAN from 'iban';

function ibanValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const iban = control.value as string;

    if (IBAN.isValid(iban)) {
      return null; // Validation passed; the IBAN is valid.
    } else {
      return { 'ibanValidation': true }; // Validation failed; the IBAN is not valid.
    }
  };
}