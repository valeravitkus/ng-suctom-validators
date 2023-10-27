function emailDomainValidator(domain: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email = control.value as string;
      if (email.endsWith(`@${domain}`)) {
        return null; // Validation passed; email has the expected domain.
      } else {
        return { 'emailDomain': true }; // Validation failed; email does not have the expected domain.
      }
    };
  }