import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'La descripción debe tener al menos 3 caracteres' })
  descripcion: string;
}
