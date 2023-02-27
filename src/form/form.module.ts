import { Module } from '@nestjs/common';
import { FormService } from './form.service';
import { FormController } from './form.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { formSchema, Form } from './entities/form.entity';

@Module({
  controllers: [FormController],
  providers: [FormService],
  imports: [
    MongooseModule.forFeature([{
      name: Form.name,
      schema: formSchema
    }])
  ]
})
export class FormModule {}
