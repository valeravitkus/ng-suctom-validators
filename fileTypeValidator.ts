function fileTypeValidator(allowedTypes: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value as File;
      if (file) {
        const fileType = file.type;
        if (allowedTypes.includes(fileType)) {
          return null; // Validation passed; the file type is allowed.
        }
      }
      return { 'fileTypeValidation': true }; // Validation failed; the file type is not allowed.
    };
  }