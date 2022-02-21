import { ExecutionContext, Injectable } from "@nestjs/common";
import { I18nResolver } from "nestjs-i18n";
import { TestService } from "./test.service";


@Injectable()
export class TestResolver implements I18nResolver {

    constructor(protected testService: TestService) {}

    resolve(context: ExecutionContext): string | string[] | Promise<string | string[]> {
        return "en";
    }

}