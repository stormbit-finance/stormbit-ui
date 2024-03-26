import { PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsEvmAddress } from "../../../common/decorators/IsEvmAddress.decorator";
import { LoginAuthDto } from "./login-auth.dto";
export class RegisterAuthDto extends PartialType(LoginAuthDto) {
    @IsNotEmpty()
    @IsEvmAddress()
    username: string;
}