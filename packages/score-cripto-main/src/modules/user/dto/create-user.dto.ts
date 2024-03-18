import { IsEmail, IsNotEmpty, IsString } from "class-validator";
export class createUserDto {
    @IsEmail()
    email: string;
    @IsNotEmpty()
    username: string;
    @IsString()
    password: string;
}