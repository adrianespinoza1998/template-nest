import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, { message: 'The descripcion can have at least 3 characters' })
  descripcion: string;
}
