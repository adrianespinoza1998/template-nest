import { Test, TestingModule } from '@nestjs/testing';
import { RolsService } from './rols.service';
import { getModelToken } from '@nestjs/sequelize';
import { Rol } from './rol.entity';
import { FindRolDto } from './findRol.dto';

describe('RolsService', () => {
  let service: RolsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RolsService,
        {
          provide: getModelToken(Rol),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<RolsService>(RolsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of rols', () => {
    const expectedResults = {
      count: 1,
      rows: [
        {
          idRol: 1,
          descripcion: 'ADMIN',
          isActive: true,
        } as Rol,
      ],
    };

    jest.spyOn(service, 'getActiveRols').mockResolvedValue(expectedResults);

    const results = service.getActiveRols();

    expect(results).resolves.toEqual(expectedResults);
  });

  it('should return an array of rols filtered by description', async () => {
    const expectedResults = {
      count: 1,
      rows: [
        {
          idRol: 1,
          descripcion: 'ADMIN',
          isActive: true,
        } as Rol,
      ],
    };

    jest.spyOn(service, 'getActiveRols').mockResolvedValue(expectedResults);

    const results = await service.getRolsByFilter({
      descripcion: 'ADMIN',
    } as FindRolDto);

    expect(results).resolves.toEqual(expectedResults);
  });

  it('should return a rol by id', () => {
    const expectedResult = {
      idRol: 1,
      descripcion: 'ADMIN',
      isActive: true,
    } as Rol;

    jest.spyOn(service, 'getRolById').mockResolvedValue(expectedResult);

    const result = service.getRolById(1);

    expect(result).resolves.toEqual(expectedResult);
  });

  it('should create a rol', () => {
    const expectedResult = {
      idRol: 1,
      descripcion: 'ADMIN',
      isActive: true,
    } as Rol;

    jest.spyOn(service, 'createRol').mockResolvedValue(expectedResult);

    const result = service.createRol({
      descripcion: 'ADMIN',
    } as FindRolDto);

    expect(result).resolves.toEqual(expectedResult);
  });

  it('should update a rol', () => {
    const expectedResult = {
      idRol: 1,
      descripcion: 'ADMIN_2',
      isActive: true,
    } as Rol;

    jest.spyOn(service, 'updateRol').mockResolvedValue(expectedResult);

    const result = service.updateRol(1, {
      descripcion: 'admin_2',
    } as FindRolDto);

    expect(result).resolves.toEqual(expectedResult);
  });

  it('should delete a rol', () => {
    const expectedResult = {
      idRol: 1,
      descripcion: 'ADMIN',
      isActive: false,
    } as Rol;

    jest.spyOn(service, 'deleteRol').mockResolvedValue(expectedResult);

    const result = service.deleteRol(1);

    expect(result).resolves.toEqual(expectedResult);
  });

  it('should activate a rol', () => {
    const expectedResult = {
      idRol: 1,
      descripcion: 'ADMIN',
      isActive: true,
    } as Rol;

    jest.spyOn(service, 'activateRol').mockResolvedValue(expectedResult);

    const result = service.activateRol(1);

    expect(result).resolves.toEqual(expectedResult);
  });
});
