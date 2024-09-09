import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'einstein-db',
  password: 'einstein',
  database: 'einstein-db',
  entities: ['dist/src/**/entities/*.entity.js'],
  migrations: ['dist/src/migrations/*.ts'],
  synchronize: true,
  logging: true,
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
