function currencyValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const currency = control.value as string;
      // Define your currency validation criteria here.
      const currencyPattern = /^\d+(\.\d{1,2})?$/;
  
      if (currencyPattern.test(currency)) {
        return null; // Validation passed; the currency format is valid.
      } else {
        return { 'currencyValidation': true }; // Validation failed; the currency format is not valid.
      }
    };
  }