import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import {environment} from "../../../environments/environment";

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-transport',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit, AfterViewInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  map_start: mapboxgl.Map;
  map_start_geo: any;
  thirdFormGroup: FormGroup;
  seasons: string[] = ['Bike', 'e-Bike', 'Cargo Bike', '...'];
  favoriteSeason: string;

  constructor(private _formBuilder: FormBuilder, private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('user');
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required]

    });
    this.secondFormGroup = this._formBuilder.group({});
    this.thirdFormGroup = this._formBuilder.group({
      rentObject: ['', Validators.required],
    });
    mapboxgl.accessToken = environment.mapbox_token;
  }

  initialize_map() {
    console.log('map')
    this.map_start = new mapboxgl.Map({
      container: 'map-start',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: {lat: 45.0735, lng: 7.6757},
      zoom: 12
    });
    this.map_start_geo = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl

    });
    this.map_start.addControl(
      this.map_start_geo
    );
  }

  ngAfterViewInit(): void {
    this.initialize_map();

  }
}
