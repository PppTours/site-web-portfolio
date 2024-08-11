import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

import { DatabaseConfig } from './database.config';

type PostgresConfigOptions = Required<
  Pick<
    MysqlConnectionOptions,
    'host' | 'port' | 'username' | 'password' | 'database'
  >
>;

export class PostgresConfig extends DatabaseConfig {
  constructor(options: PostgresConfigOptions) {
    super({
      type: 'postgres',
      ...options,
    });
  }
}
