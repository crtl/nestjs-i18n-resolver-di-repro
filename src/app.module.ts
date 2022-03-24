import { Module } from '@nestjs/common';
import { I18nJsonParser, I18nModule } from 'nestjs-i18n';
import * as path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestResolver } from './test-resolver.service';
import { TestService } from './test.service';
import {CommonModule} from "./common.module";

@Module({
  imports: [
    CommonModule,
    I18nModule.forRoot({
      parser: I18nJsonParser,
      parserOptions: {
        path: path.join(__dirname, 'i18n'),
      },
      fallbackLanguage: "en",
      resolvers: [
        TestResolver
      ]
    }),

  ],
  controllers: [
    AppController
  ],
  providers: [],
})
export class AppModule {}
