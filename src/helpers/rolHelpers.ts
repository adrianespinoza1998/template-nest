import { FindRolDto } from 'src/rols/findRol.dto';

export const cleanRolDto = (rolDto: FindRolDto) => {
  const keys = Object.keys(rolDto);
  const keysAcepted = ['descripcion', 'isActive'];

  keys.forEach((key) => {
    if (!keysAcepted.includes(key)) {
      delete rolDto[key];
    }
  });

  return rolDto;
};
