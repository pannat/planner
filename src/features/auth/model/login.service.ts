import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, finalize } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthRestService } from '../api/auth-rest.service';
import { tuiMarkControlAsTouchedAndValidate } from '@taiga-ui/cdk';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoading = new BehaviorSubject(false);
  public isLoading$ = this.isLoading.asObservable();
  private fb = inject(FormBuilder).nonNullable;
  public form = this.fb.group({
    login: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
  })
  private restService = inject(AuthRestService);

  login() {
    if (this.form.invalid) {
      tuiMarkControlAsTouchedAndValidate(this.form);
      return;
    }

    this.isLoading.next(true);
    this.restService.login(this.form.getRawValue()).pipe(finalize(() => this.isLoading.next(false))).subscribe(() => this.isLoading.next(false));
  }
}
