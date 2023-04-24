import { DataTypes } from 'sequelize';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Rol extends Model<Rol> {
  @Column({
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  idRol: number;

  @Column({
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  })
  descripcion: string;

  @Column({
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive: boolean;
}
