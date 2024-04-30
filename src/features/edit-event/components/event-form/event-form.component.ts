import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TuiFieldErrorPipeModule, TuiInputModule, TuiTextareaModule } from '@taiga-ui/kit';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { AsyncPipe } from '@angular/common';
import { EventRestService } from '@entities/event';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    TuiInputModule,
    TuiTextareaModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiErrorModule,
    TuiFieldErrorPipeModule,
    AsyncPipe,
  ],
  templateUrl: './event-form.component.html',
  styleUrl: './event-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventFormComponent {
  formBuilder = inject(FormBuilder).nonNullable;
  form = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', [Validators.minLength(2), Validators.maxLength(1000)]]
  });

  constructor(private readonly restService: EventRestService) {}

  // TODO: move to feature model
  saveEvent() {
    this.restService.createEvent(this.form.getRawValue()).subscribe((res) => console.log(res));
  }
}
