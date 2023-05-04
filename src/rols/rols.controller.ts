import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  // UseFilters,
} from '@nestjs/common';
import { RolsService } from './rols.service';
import { FindRolDto } from './dto/findRol.dto';
import { cleanRolDto } from 'src/helpers/rolHelpers';
import { CreateRolDto } from './dto/createRol.dto';
// import { HttpExceptionFilter } from 'src/filters/http-exception.filters';

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
  async getRolById(@Param('id', ParseIntPipe) id: number) {
    const rol = await this.rolsService.getRolById(id);

    if (!rol) {
      throw new HttpException(`Rol not found, id: ${id}`, 404);
    }

    return rol;
  }

  @Post()
  // @UseFilters(new HttpExceptionFilter())
  createRol(@Body() rol: CreateRolDto) {
    return this.rolsService.createRol(rol);
  }

  @Put('/:id')
  // @UseFilters(new HttpExceptionFilter())
  async updateRol(@Param('id') id: number, @Body() rol: CreateRolDto) {
    const rolToUpdate = await this.rolsService.updateRol(id, rol);

    if (!rolToUpdate) {
      throw new HttpException(`Rol not found, id: ${id}`, 404);
    }

    return rolToUpdate;
  }

  @Delete('/:id')
  async deleteRol(@Param('id') id: number) {
    const rol = await this.rolsService.deleteRol(id);

    if (!rol) {
      throw new HttpException(`Rol not found, id: ${id}`, 404);
    }

    return rol;
  }

  @Put('/activate/:id')
  async activateRol(@Param('id') id: number) {
    const rol = await this.rolsService.activateRol(id);

    if (!rol) {
      throw new HttpException(`Rol not found, id: ${id}`, 404);
    }

    return rol;
  }
}
