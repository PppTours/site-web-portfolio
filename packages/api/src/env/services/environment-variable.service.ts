import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { EnvVariable } from '../enums/env-variable.enum';
import * as dotenvFlow from 'dotenv-flow';

@Injectable()
export class EnvironmentVariableService {
  private static loaded = false;

  constructor() {
    EnvironmentVariableService.loadDotEnv();
  }

  public static get<T = string>(variable: EnvVariable): T {
    EnvironmentVariableService.loadDotEnv();
    return EnvironmentVariableService.getOrThrow<T>(variable);
  }

  public static getOrNull<T = string>(variable: EnvVariable): T | null {
    try {
      return EnvironmentVariableService.get<T>(variable);
    } catch (_) {
      return null;
    }
  }

  private static loadDotEnv() {
    if (!EnvironmentVariableService.loaded) {
      dotenvFlow.config({ default_node_env: 'development' });
      EnvironmentVariableService.loaded = true;
    }
  }

  private static getOrThrow<T = string>(variable: EnvVariable): T {
    const value = process.env[variable];

    if (!value) {
      throw new InternalServerErrorException(
        `Cannot get environment variable '${variable}'`,
      );
    }

    return value as T;
  }

  get<T = string>(variable: EnvVariable): T {
    return EnvironmentVariableService.get<T>(variable);
  }

  getOrNull<T = string>(variable: EnvVariable): T | null {
    return EnvironmentVariableService.getOrNull<T>(variable);
  }
}
