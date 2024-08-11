import { Injectable } from '@nestjs/common';

import { EnvVariable } from '../enums/env-variable.enum';
import { ExecutionEnvironment } from '../enums/execution-environment.enum';
import { EnvironmentVariableService } from './environment-variable.service';

@Injectable()
export class ExecutionEnvironmentService {
  public constructor(
    private environmentVariableService: EnvironmentVariableService,
  ) {}

  public get(): ExecutionEnvironment {
    return this.environmentVariableService.get(EnvVariable.NodeEnv);
  }

  public is(environment: ExecutionEnvironment): boolean {
    return this.get() === environment;
  }
}
