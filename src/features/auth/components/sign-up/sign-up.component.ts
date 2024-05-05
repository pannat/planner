import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiFieldErrorPipeModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { SignUpService } from '../../model/sign-up.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    TuiInputModule,
    TuiInputPasswordModule,
    TuiErrorModule,
    ReactiveFormsModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
    TuiButtonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: '../form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [SignUpService],
})
export class SignUpComponent {
  service = inject(SignUpService);
}
