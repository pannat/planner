import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';
import { AuthService } from '@features/auth';

@Component({
  selector: 'app-user-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    TuiButtonModule,
  ],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserNavComponent {
  authService = inject(AuthService);
}
