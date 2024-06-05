import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RankModuleBase } from "./base/rank.module.base";
import { RankService } from "./rank.service";
import { RankController } from "./rank.controller";
import { RankResolver } from "./rank.resolver";

@Module({
  imports: [RankModuleBase, forwardRef(() => AuthModule)],
  controllers: [RankController],
  providers: [RankService, RankResolver],
  exports: [RankService],
})
export class RankModule {}
