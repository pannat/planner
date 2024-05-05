import { LoginDto } from './login-dto';

export interface SignUpDto extends LoginDto {
  email: string;
}
