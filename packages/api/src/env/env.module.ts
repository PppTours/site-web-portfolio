import { Module } from '@nestjs/common';
import { ExecutionEnvironmentService } from './services/execution-environment.service';
import { EnvironmentVariableService } from './services/environment-variable.service';

@Module({
  providers: [EnvironmentVariableService, ExecutionEnvironmentService],
  exports: [EnvironmentVariableService, ExecutionEnvironmentService],
})
export class EnvModule {}
