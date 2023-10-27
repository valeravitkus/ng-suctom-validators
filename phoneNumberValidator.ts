function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const phoneNumber = control.value as string;
      // Define your phone number validation criteria here.
      const phonePattern = /^[0-9]{10}$/;
  
      if (phonePattern.test(phoneNumber)) {
        return null; // Validation passed; phone number format is valid.
      } else {
        return { 'phoneNumber': true }; // Validation failed; phone number format is invalid.
      }
    };
  }