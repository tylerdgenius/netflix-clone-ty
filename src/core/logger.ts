import { envs } from "./env";

export class Log {
  private static readonly appEnv = envs.APP_ENV;

  static info(...args: unknown[]) {
    if (this.isProd()) return;
    console.log(...args);
  }

  static error(...args: unknown[]) {
    if (this.isProd()) return;
    console.log(...args);
  }

  static warn(...args: unknown[]) {
    if (this.isProd()) return;
    console.log(...args);
  }

  private static isProd() {
    return this.appEnv === "production";
  }
}
