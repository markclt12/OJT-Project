import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../services/maintenance.services';

interface Vehicle {
  type: string;
  plateNumber: string;
  concern: string;
  status: string;
}

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  submitted: boolean = false;
  vehicles: Vehicle[] = [];

  newVehicle: Vehicle = {
    type: '',
    plateNumber: '',
    concern: '',
    status: 'For Review'
  };
  

  constructor(private maintenanceService: MaintenanceService) {}

  ngOnInit(): void {
    this.vehicles = this.maintenanceService.getVehicles();
  }

  addVehicle(): void {
    this.submitted = true;

    if (!this.newVehicle.type || !this.newVehicle.plateNumber || !this.newVehicle.concern) {
      console.log("Form is invalid.");
      return;
    }

    const addedVehicle = { ...this.newVehicle };
    this.maintenanceService.addVehicle(addedVehicle);
    this.vehicles = this.maintenanceService.getVehicles();

    console.log('Added Vehicle:', addedVehicle);
    console.log('Updated Vehicle List:', this.vehicles);

    this.newVehicle = { type: '', plateNumber: '', concern: '', status: 'For Review' };
    this.submitted = false;}
    logVtInput(event: Event) {
      const vehicleTypeValue = (event.target as HTMLInputElement).value;
      console.log("Vehicle Type:", vehicleTypeValue);
    }
    logPnInput(event: Event) {

      const plateNumberValue = (event.target as HTMLInputElement).value;
      console.log("Plate Number:", plateNumberValue);
    }
    logCInput(event: Event) {

      const concernValue = (event.target as HTMLInputElement).value;
      console.log("Concern:", concernValue);
  }
  
}
