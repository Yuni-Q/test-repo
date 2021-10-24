import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MorganInterceptor, MorganModule } from 'nest-morgan';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvModule } from './common/env/env.module';
import { ViewsModule } from './views/views.module';

const imports = [ConfigModule.forRoot(), EnvModule, ViewsModule];
if (process.env.NODE_ENV !== 'test') {
  imports.push(MorganModule);
}

const providers =
  process.env.NODE_ENV === 'test'
    ? [AppService]
    : [
        AppService,
        {
          provide: APP_INTERCEPTOR,
          useClass: MorganInterceptor('combined'),
        },
      ];

@Module({
  imports,
  controllers: [AppController],
  providers,
})
export class AppModule {}
