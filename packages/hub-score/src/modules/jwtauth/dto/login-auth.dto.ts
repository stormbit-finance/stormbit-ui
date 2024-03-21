import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { IsEvmAddress } from "src/common/decorators/IsEvmAddress.decorator";
export class LoginAuthDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}