import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class LoginRequestDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
export class CreateUserRequestDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
export class ResponseDto {
  success: boolean;

  message: string;

  data: any;
}
