import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSourceOptions, DataSource } from 'typeorm';

export type DatabaseConfigOptions = Omit<
  DataSourceOptions,
  'synchronize' | 'entities' | 'migrations'
>;

export abstract class DatabaseConfig {
  private options: DataSourceOptions;

  public constructor(options: DatabaseConfigOptions) {
    this.options = {
      ...options,
      synchronize: false,
    } as DataSourceOptions;
  }

  public getTypeOrmModuleOptions(): TypeOrmModuleOptions {
    return {
      ...this.options,
      autoLoadEntities: true,
      migrations: [`${__dirname}/database/migrations/*{.ts,.js}`],
    };
  }

  public getSource(): DataSource {
    const options = {
      ...this.options,
      entities: [`${__dirname}/../../**/*.entity{.ts,.js}`],
      migrations: [`${__dirname}/../migrations/*{.ts,.js}`],
    };
    return new DataSource(options);
  }
}
