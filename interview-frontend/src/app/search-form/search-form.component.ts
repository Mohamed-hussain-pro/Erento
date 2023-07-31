import { Component } from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city.model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent {
  searchTerm!: string;
  searchResults!: City[];

  constructor(private cityService: CityService) {}

  search() {
    if (!this.searchTerm) return;

    this.cityService.getCityByName(this.searchTerm).subscribe(
      (data) => {
        this.searchResults = data ? [data] : [];
      },
      (error) => {
        console.error('Error fetching city:', error);
        this.searchResults = [];
      }
    );
  }

  showAllCities(){
    this.cityService.getCities().subscribe(
      (data) => {
        this.searchResults = data ? data : [];
      },
      (error) => {
        console.error('Error fetching cities:', error);
        this.searchResults = [];
      }
    );
  }
}
