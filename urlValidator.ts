function urlValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const url = control.value as string;
      // Define your URL validation criteria here.
      const urlPattern = /^((http|https|ftp):\/\/)?([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?$/;
  
      if (urlPattern.test(url)) {
        return null; // Validation passed; URL format is valid.
      } else {
        return { 'url': true }; // Validation failed; URL format is invalid.
      }
    };
  }