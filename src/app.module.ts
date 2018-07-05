import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

const db = {
  connectionString: 'mongodb://<username>:<password>@<url>:<port>/<database>',
};

@Module({
  imports: [MongooseModule.forRoot(db.connectionString), UserModule],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
