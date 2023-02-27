import { IsString, MinLength } from "class-validator"

export class CreateFormDto {

  @IsString()
  @MinLength(6)
  createdDate: string

  @IsString()
  @MinLength(5)
  author: string

  @IsString()
  body:string
  
}
