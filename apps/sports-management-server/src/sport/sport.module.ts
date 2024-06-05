import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SportModuleBase } from "./base/sport.module.base";
import { SportService } from "./sport.service";
import { SportController } from "./sport.controller";
import { SportResolver } from "./sport.resolver";

@Module({
  imports: [SportModuleBase, forwardRef(() => AuthModule)],
  controllers: [SportController],
  providers: [SportService, SportResolver],
  exports: [SportService],
})
export class SportModule {}
