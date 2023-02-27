import { Module } from '@nestjs/common';
import { FormModule } from './form/form.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [FormModule,
    MongooseModule.forRoot('mongo "mongodb://mongo:ZFFiJv2xUf8AM7RN3Fu0@containers-us-west-135.railway.app:7376"')
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
