import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRolDto {
  @IsNotEmpty()
  @IsString()
  descripcion: string;
}
