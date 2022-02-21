import { Injectable } from "@nestjs/common";
import { AppService } from "./app.service";

@Injectable()
export class TestService {

    constructor(private appService: AppService) {}

}