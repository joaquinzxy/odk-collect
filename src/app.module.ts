import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FormModule,
    MongooseModule.forRoot('mongodb+srv://admin:odk-collect23@odk-collect.o31fwcx.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
