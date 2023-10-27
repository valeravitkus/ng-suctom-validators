function geolocationValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      // Define your geolocation validation criteria here.
      const geolocationPattern = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;
  
      if (geolocationPattern.test(value)) {
        return null; // Validation passed; the geolocation coordinates are valid.
      } else {
        return { 'geolocationValidation': true }; // Validation failed; the coordinates are not valid.
      }
    };
  }