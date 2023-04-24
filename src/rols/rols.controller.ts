import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RolsService } from './rols.service';
import { FindRolDto } from './findRol.dto';
import { cleanRolDto } from 'src/helpers/rolHelpers';

@Controller('/api/v1/rols')
export class RolsController {
  constructor(private rolsService: RolsService) {}

  @Get()
  getRols() {
    return this.rolsService.getActiveRols();
  }

  @Get('/search')
  getRolsByFilter(@Query() queryParams: FindRolDto) {
    return this.rolsService.getRolsByFilter(cleanRolDto(queryParams));
  }

  @Get('/:id')
  async getRolById(@Param('id') id: number) {
    const rol = await this.rolsService.getRolById(id);

    if (!rol) {
      throw new HttpException(`Rol not found, id: ${id}`, 404);
    }

    return rol;
  }

  @Post()
  createRol(@Body() rol: FindRolDto) {
    return this.rolsService.createRol(rol);
  }

  @Put('/:id')
  async updateRol(@Param('id') id: number, @Body() rol: FindRolDto) {
    const rolToUpdate = await this.rolsService.updateRol(id, rol);

    if (!rolToUpdate) {
      throw new HttpException(`Rol not found, id: ${id}`, 404);
    }

    return rolToUpdate;
  }

  @Delete('/:id')
  deleteRol(@Param('id') id: number) {
    return this.rolsService.deleteRol(id);
  }
}
