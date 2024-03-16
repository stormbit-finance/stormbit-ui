import { PartialType } from "@nestjs/swagger";
import { IsEmail,IsNotEmpty,MaxLength, MinLength } from "class-validator";
import { LoginAuthDto } from "./login-auth.dto";


export class RegisteAuthDto extends PartialType(LoginAuthDto){
    @IsNotEmpty()
    name:string
}