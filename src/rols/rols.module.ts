import { Module } from '@nestjs/common';
import { RolsController } from './rols.controller';
import { RolsService } from './rols.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rol } from './rol.entity';

@Module({
  imports: [SequelizeModule.forFeature([Rol])],
  controllers: [RolsController],
  providers: [RolsService],
})
export class RolsModule {}
