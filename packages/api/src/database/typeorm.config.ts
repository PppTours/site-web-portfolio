import { EnvVariable } from 'src/env/enums/env-variable.enum';
import { EnvironmentVariableService } from 'src/env/services/environment-variable.service';

import { DatabaseConfig } from './configs/database.config';
import { PostgresConfig } from './configs/postgres.config';

export const typeormConfig: DatabaseConfig = new PostgresConfig({
  host: EnvironmentVariableService.get(EnvVariable.DatabaseHost),
  port: EnvironmentVariableService.get<number>(EnvVariable.DatabasePort),
  username: EnvironmentVariableService.get(EnvVariable.DatabaseUsername),
  password: EnvironmentVariableService.get(EnvVariable.DatabasePassword),
  database: EnvironmentVariableService.get(EnvVariable.DatabaseName),
});

export default typeormConfig.getSource();
