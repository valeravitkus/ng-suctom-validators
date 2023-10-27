function passportNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const passportNumber = control.value as string;
      // Define your passport number validation criteria here.
      const passportPattern = /^[A-Z0-9<]{9}$/;
  
      if (passportPattern.test(passportNumber)) {
        return null; // Validation passed; the passport number is valid.
      } else {
        return { 'passportNumberValidation': true }; // Validation failed; the passport number is not valid.
      }
    };
  }