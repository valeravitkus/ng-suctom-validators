function fileSizeValidator(maxSizeInBytes: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const file = control.value as File;
      if (file && file.size <= maxSizeInBytes) {
        return null; // Validation passed; file size is within the specified limit.
      } else {
        return { 'fileSizeValidation': true }; // Validation failed; file size exceeds the limit.
      }
    };
  }