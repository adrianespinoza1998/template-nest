import { Injectable } from '@nestjs/common';
import { Rol } from './rol.entity';
import { InjectModel } from '@nestjs/sequelize';
import { FindRolDto } from './findRol.dto';

@Injectable()
export class RolsService {
  constructor(
    @InjectModel(Rol)
    private rolModel: typeof Rol,
  ) {}

  async getActiveRols() {
    return await this.rolModel.findAndCountAll({ where: { isActive: true } });
  }

  async getRolsByFilter(filter: FindRolDto) {
    return await this.rolModel.findAndCountAll({
      where: { ...filter },
    });
  }
  async getRolById(id: number) {
    return await this.rolModel.findOne({
      where: { idRol: id, isActive: true },
    });
  }

  async createRol(rol: FindRolDto) {
    return await this.rolModel.create({
      descripcion: rol.descripcion.toUpperCase(),
    });
  }

  updateRol(id: number, rol: Rol) {
    return {};
  }

  deleteRol(id: number) {
    return {};
  }

  activateRol(id: number) {
    return {};
  }
}
