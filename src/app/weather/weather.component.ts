import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  latitude: number | undefined;
  longitude: number | undefined;
  weatherData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.latitude = 37.7749;
    this.longitude = -122.4194;
    this.getWeather();
  }

  getWeather() {
    if (this.latitude === undefined || this.longitude === undefined) {
      alert('Please enter valid latitude and longitude.');
      return;
    }

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`;
    this.http.get(url).subscribe(data => {
      this.weatherData = data;
    });
  }

  getLocation(place: string): { latitude: number, longitude: number } | undefined {
    const locations: { [key: string]: { latitude: number, longitude: number } } = {
      'Santiago de Chile': { latitude: -33.4489, longitude: -70.6693 },
      'Viña del Mar Chile': { latitude: -33.0153, longitude: -71.5500 },
      'New York': { latitude: 40.7128, longitude: -74.0060 },
      'Paris': { latitude: 48.8566, longitude: 2.3522 },
      'Zurich': { latitude: 47.3769, longitude: 8.5417 },
      'Berlin': { latitude: 52.5200, longitude: 13.4050 },
      'London': { latitude: 51.5074, longitude: -0.1278 },
      'Madrid': { latitude: 40.4168, longitude: -3.7038 }
    };
    return locations[place] || undefined;
  }
  getWeatherCondition(code: number): string {
    const weatherConditions: { [key: number]: string } = {
      0: 'Cloud development not observed or not observable ☀️',
      1: 'Clouds generally dissolving or becoming less developed 🌤️',
      2: 'State of sky on the whole unchanged ☀️',
      3: 'Clouds generally forming or developing 🌥️',
      4: 'Visibility reduced by smoke 🌫️',
      5: 'Haze 🌫️',
      6: 'Widespread dust in suspension in the air 🌫️',
      7: 'Dust or sand raised by wind 🌪️',
      8: 'Well developed dust whirl(s) or sand whirl(s) 🌪️',
      9: 'Duststorm or sandstorm within sight 🌪️',
      10: 'Mist 🌫️',
      11: 'Patches of shallow fog or ice fog 🌫️',
      12: 'More or less continuous shallow fog or ice fog 🌫️',
      13: 'Lightning visible, no thunder heard ⚡',
      14: 'Precipitation within sight, not reaching the ground 🌧️',
      15: 'Precipitation within sight, reaching the ground, distant 🌧️',
      16: 'Precipitation within sight, reaching the ground, near 🌧️',
      17: 'Thunderstorm, but no precipitation 🌩️',
      18: 'Squalls 🌪️',
      19: 'Funnel cloud(s) 🌪️',
      20: 'Drizzle or snow grains, not falling as showers 🌧️',
      21: 'Rain, not freezing 🌧️',
      22: 'Snow ❄️',
      23: 'Rain and snow or ice pellets 🌨️',
      24: 'Freezing drizzle or freezing rain 🌨️',
      25: 'Shower(s) of rain 🌦️',
      26: 'Shower(s) of snow, or of rain and snow 🌨️',
      27: 'Shower(s) of hail, or of rain and hail 🌨️',
      28: 'Fog or ice fog 🌫️',
      29: 'Thunderstorm (with or without precipitation) 🌩️',
      30: 'Slight or moderate duststorm or sandstorm, has decreased 🌪️',
      31: 'Slight or moderate duststorm or sandstorm, no change 🌪️',
      32: 'Slight or moderate duststorm or sandstorm, has begun or increased 🌪️',
      33: 'Severe duststorm or sandstorm, has decreased 🌪️',
      34: 'Severe duststorm or sandstorm, no change 🌪️',
      35: 'Severe duststorm or sandstorm, has begun or increased 🌪️',
      36: 'Slight or moderate blowing snow, generally low 🌨️',
      37: 'Heavy drifting snow 🌨️',
      38: 'Slight or moderate blowing snow, generally high 🌨️',
      39: 'Heavy drifting snow 🌨️',
      40: 'Fog or ice fog at a distance 🌫️',
      41: 'Fog or ice fog in patches 🌫️',
      42: 'Fog or ice fog, sky visible, has become thinner 🌫️',
      43: 'Fog or ice fog, sky invisible 🌫️',
      44: 'Fog or ice fog, sky visible, no change 🌫️',
      45: 'Fog or ice fog, sky invisible 🌫️',
      46: 'Fog or ice fog, sky visible, has become thicker 🌫️',
      47: 'Fog or ice fog, sky invisible 🌫️',
      48: 'Fog, depositing rime, sky visible 🌫️',
      49: 'Fog, depositing rime, sky invisible 🌫️',
      50: 'Drizzle, not freezing, intermittent, slight 🌧️',
      51: 'Drizzle, not freezing, continuous, slight 🌧️',
      52: 'Drizzle, not freezing, intermittent, moderate 🌧️',
      53: 'Drizzle, not freezing, continuous, moderate 🌧️',
      54: 'Drizzle, not freezing, intermittent, heavy 🌧️',
      55: 'Drizzle, not freezing, continuous, heavy 🌧️',
      56: 'Drizzle, freezing, slight 🌨️',
      57: 'Drizzle, freezing, moderate or heavy 🌨️',
      58: 'Drizzle and rain, slight 🌧️',
      59: 'Drizzle and rain, moderate or heavy 🌧️',
      60: 'Rain, not freezing, intermittent, slight 🌧️',
      61: 'Rain, not freezing, continuous, slight 🌧️',
      62: 'Rain, not freezing, intermittent, moderate 🌧️',
      63: 'Rain, not freezing, continuous, moderate 🌧️',
      64: 'Rain, not freezing, intermittent, heavy 🌧️',
      65: 'Rain, not freezing, continuous, heavy 🌧️',
      66: 'Rain, freezing, slight 🌨️',
      67: 'Rain, freezing, moderate or heavy 🌨️',
      68: 'Rain or drizzle and snow, slight 🌨️',
      69: 'Rain or drizzle and snow, moderate or heavy 🌨️',
      70: 'Intermittent fall of snowflakes, slight ❄️',
      71: 'Continuous fall of snowflakes, slight ❄️',
      72: 'Intermittent fall of snowflakes, moderate ❄️',
      73: 'Continuous fall of snowflakes, moderate ❄️',
      74: 'Intermittent fall of snowflakes, heavy ❄️',
      75: 'Continuous fall of snowflakes, heavy ❄️',
      76: 'Diamond dust (with or without fog) ❄️',
      77: 'Snow grains (with or without fog) ❄️',
      78: 'Isolated star-like snow crystals (with or without fog) ❄️',
      79: 'Ice pellets ❄️',
      80: 'Rain shower(s), slight 🌦️',
      81: 'Rain shower(s), moderate or heavy 🌦️',
      82: 'Rain shower(s), violent 🌦️',
      83: 'Shower(s) of rain and snow mixed, slight 🌦️',
      84: 'Shower(s) of rain and snow mixed, moderate or heavy 🌦️',
      85: 'Snow shower(s), slight 🌨️',
      86: 'Snow shower(s), moderate or heavy 🌨️',
      87: 'Shower(s) of snow pellets or small hail, slight 🌨️',
      88: 'Shower(s) of snow pellets or small hail, moderate or heavy 🌨️',
      89: 'Shower(s) of hail, slight 🌨️',
      90: 'Shower(s) of hail, moderate or heavy 🌨️',
      91: 'Slight rain, thunderstorm during preceding hour 🌩️',
      92: 'Moderate or heavy rain, thunderstorm during preceding hour 🌩️',
      93: 'Slight snow, or rain and snow mixed or hail 🌨️',
      94: 'Moderate or heavy snow, or rain and snow mixed or hail 🌨️',
      95: 'Thunderstorm, slight or moderate, without hail but with rain and/or snow 🌩️',
      96: 'Thunderstorm, slight or moderate, with hail 🌩️',
      97: 'Thunderstorm, heavy, without hail but with rain and/or snow 🌩️',
      98: 'Thunderstorm combined with duststorm or sandstorm 🌩️',
      99: 'Thunderstorm, heavy, with hail 🌩️'
    };
    return weatherConditions[code] || 'Unknown';
  }
}