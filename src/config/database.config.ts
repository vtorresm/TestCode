/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '',
  database: '',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Ruta para las entidades de la aplicación
  synchronize: true, // Esto crea las tablas automáticamente, úsalo con precaución en entornos de producción
};

export default config;
