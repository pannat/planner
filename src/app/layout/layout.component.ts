import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, TuiButtonModule],
  templateUrl: 'layout.component.html',
  styleUrl: 'layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {}
