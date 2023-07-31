import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CityService {
  private cities = [];

  constructor() {
    this.loadCities();
  }

  private loadCities() {
    const filePath = path.resolve(__dirname, '../../data/cities.json');
    const data = fs.readFileSync(filePath, 'utf8');
    this.cities = JSON.parse(data);
  }

  getCities() {
    return this.cities;
  }

  getCityByName(name: string) {
    return this.cities.find((city) => city.cityName.toLowerCase() === name.toLowerCase());
  }
}
