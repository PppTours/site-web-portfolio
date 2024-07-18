import { Injectable } from '@nestjs/common';
import { ExecutionEnvironment } from '../enums/execution-environment.enum';
import { EnvironmentVariableService } from './environment-variable.service';
import { EnvVariable } from '../enums/env-variable.enum';

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
