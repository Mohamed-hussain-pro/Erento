import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CityService } from './city/city.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CityService],
})
export class AppModule {}
