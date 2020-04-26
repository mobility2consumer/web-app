import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import {environment} from "../../../environments/environment";

import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import {NavbarService} from "../../navbar/navbar.service";

@Component({
  selector: 'app-transport',
  templateUrl: './deliver-call.component.html',
  styleUrls: ['./deliver-call.component.scss']
})
export class DeliverCallComponent implements OnInit, AfterViewInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  map_start: mapboxgl.Map;
  map_dest: mapboxgl.Map;
  map_start_geo: any;
  map_dest_geo: any;
  detailsFormGroup: FormGroup;
  deliverFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.update('call');
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      people: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.detailsFormGroup = this._formBuilder.group({
      date: ['', Validators.required],
      clock: ['', Validators.required]
    });
    this.deliverFormGroup = this._formBuilder.group({
      number: ['', Validators.required],
      clock: ['', Validators.required]
    });
    mapboxgl.accessToken = environment.mapbox_token;
  }

  initialize_map() {
    console.log('map')
    this.map_start = new mapboxgl.Map({
      container: 'map-start',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: {lat: 44.699216, lng: 8.035332},
      zoom: 12
    });
    this.map_dest = new mapboxgl.Map({
      container: 'map-dest',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: {lat: 44.699216, lng: 8.035332},
      zoom: 12
    });
    this.map_start_geo = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl

    });
    this.map_dest_geo = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl

    });
    this.map_start.addControl(
      this.map_start_geo
    );
    this.map_start.get
    this.map_dest.addControl(
      this.map_dest_geo
    );
  }

  ngAfterViewInit(): void {
    this.initialize_map();

  }

  getArrayDim(number: string) {
    const x = + number;
    return Array(x).fill(0)
  }
}
