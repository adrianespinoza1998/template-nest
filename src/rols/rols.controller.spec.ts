import { Test, TestingModule } from '@nestjs/testing';
import { RolsController } from './rols.controller';
import { Rol } from './rol.entity';
import { RolsService } from './rols.service';

describe('RolsController', () => {
  let controller: RolsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RolsController],
      providers: [RolsService],
    }).compile();

    controller = module.get<RolsController>(RolsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of rols', () => {
    const expextedResults = {
      count: 1,
      rows: [
        {
          idRol: 1,
          descripcion: 'ADMIN',
          isActive: true,
        } as Rol,
      ],
    };

    jest.spyOn(controller, 'getRols').mockResolvedValue(expextedResults);

    const results = controller.getRols();

    expect(results).resolves.toEqual(expextedResults);
  });
});
