import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Form extends Document{

  @Prop()
  author: string

  @Prop()
  body: string

  @Prop()
  createdDate: string
}

export const formSchema = SchemaFactory.createForClass(Form)
