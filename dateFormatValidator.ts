function dateFormatValidator(format: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const date = control.value as string;
      // Define your date format validation criteria here.
      const datePattern = /^\d{4}-\d{2}-\d{2}$/; // Example: YYYY-MM-DD
  
      if (datePattern.test(date)) {
        return null; // Validation passed; date format is valid.
      } else {
        return { 'dateFormat': true }; // Validation failed; date format is invalid.
      }
    };
  }