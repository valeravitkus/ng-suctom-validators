function apiValidator(http: HttpClient, endpoint: string): ValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      const value = control.value as string;
  
      return http.get<boolean>(`${endpoint}/${value}`).pipe(map((response) => {
        if (response) {
          return null; // Validation passed; the value is valid according to the API.
        } else {
          return { 'apiValidation': true }; // Validation failed; the value is not valid according to the API.
        }
      });
    };
  }
  