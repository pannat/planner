import { inject, Injectable } from '@angular/core';
import { AuthRestService } from '../api/auth-rest.service';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject, finalize } from 'rxjs';
import { tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk';

@Injectable()
export class SignUpService {
  private isLoading = new BehaviorSubject(false);
  public isLoading$ = this.isLoading.asObservable();
  private fb = inject(FormBuilder).nonNullable;
  public form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  })
  private restService = inject(AuthRestService);

  signUp() {
    if (this.form.invalid) {
      tuiMarkControlAsTouchedAndValidate(this.form);
      return;
    }

    this.isLoading.next(true);
    this.restService.signUp(this.form.getRawValue()).pipe(finalize(() => this.isLoading.next(false))).subscribe();
  }
}
