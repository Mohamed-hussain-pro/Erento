import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city/city.service';

@Controller('cities')
export class AppController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  getCities() {
    return this.cityService.getCities();
  }

  @Get(':name')
  getCityByName(@Param('name') name: string) {
    if(this.cityService.getCityByName(name)){
      return this.cityService.getCityByName(name);
    }else{
      return null;
    }
  }
}
