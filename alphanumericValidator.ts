function alphanumericValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value as string;
      // Define your alphanumeric validation criteria here.
      const alphanumericPattern = /^[a-zA-Z0-9]+$/;
  
      if (alphanumericPattern.test(value)) {
        return null; // Validation passed; the input contains only alphanumeric characters.
      } else {
        return { 'alphanumeric': true }; // Validation failed; the input contains non-alphanumeric characters.
      }
    };
  }