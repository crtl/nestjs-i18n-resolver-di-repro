import {Global, Module} from "@nestjs/common";
import {TestService} from "./test.service";
import {AppService} from "./app.service";


@Global()
@Module({
    providers: [
        TestService,
        AppService,
    ],
    exports: [
        TestService,
        AppService,
    ]
})
export class CommonModule {}
