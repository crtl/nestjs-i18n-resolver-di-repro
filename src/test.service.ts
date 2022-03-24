import {Injectable, Scope} from "@nestjs/common";
import { AppService } from "./app.service";

@Injectable({
    scope: Scope.REQUEST,
})
export class TestService {

    constructor(private appService: AppService) {}

}
