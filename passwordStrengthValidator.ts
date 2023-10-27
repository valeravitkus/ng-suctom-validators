function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const password = control.value as string;
      // Define your password strength criteria here.
      const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      if (strongPasswordPattern.test(password)) {
        return null; // Validation passed; password meets the criteria.
      } else {
        return { 'passwordStrength': true }; // Validation failed; password is not strong enough.
      }
    };
  }