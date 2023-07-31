import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CityService } from './city/city.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CityService],
})
export class AppModule {}
