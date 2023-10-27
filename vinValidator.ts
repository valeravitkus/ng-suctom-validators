function vinValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const vin = control.value as string;
      // Define your VIN validation criteria here.
      const vinPattern = /^[A-HJ-NPR-Z0-9]{17}$/;
  
      if (vinPattern.test(vin)) {
        return null; // Validation passed; the VIN is valid.
      } else {
        return { 'vinValidation': true }; // Validation failed; the VIN is not valid.
      }
    };
  }