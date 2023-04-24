import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class FindRolDto {
  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}
