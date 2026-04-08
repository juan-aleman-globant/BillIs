// import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  // @IsString()
  // @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  // @IsEmail({}, { message: 'El formato del email no es válido' })
  // @IsNotEmpty()
  email: string;

  // @IsString()
  // @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
