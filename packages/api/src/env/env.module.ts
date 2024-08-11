import { Module } from '@nestjs/common';

import { EnvironmentVariableService } from './services/environment-variable.service';
import { ExecutionEnvironmentService } from './services/execution-environment.service';

@Module({
  providers: [EnvironmentVariableService, ExecutionEnvironmentService],
  exports: [EnvironmentVariableService, ExecutionEnvironmentService],
})
export class EnvModule {}
