import { MaxLength, IsString, IsEmail, Length } from 'class-validator';

export class UserCreateDTO {
  @MaxLength(55)
  @IsEmail()
  email: string;
  @Length(4, 20)
  @IsString()
  password: string;
}
