import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RankService } from "./rank.service";
import { RankControllerBase } from "./base/rank.controller.base";

@swagger.ApiTags("ranks")
@common.Controller("ranks")
export class RankController extends RankControllerBase {
  constructor(
    protected readonly service: RankService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
