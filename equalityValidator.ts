function equalityValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const otherControl = control.parent?.get(controlName);
  
      if (otherControl && value !== otherControl.value) {
        return { 'equality': true }; // Validation failed; the two fields are not equal.
      } else {
        return null; // Validation passed; the two fields are equal.
      }
    };
  }