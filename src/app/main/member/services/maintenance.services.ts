import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";
interface Vehicle {
  type: string;
  plateNumber: string;
  concern: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  


  private vehicles: Vehicle[] = [];

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  markAsFixed(index: number): void {
    if (index > -1 && this.vehicles[index].status === 'For Review') {
      this.vehicles[index].status = 'Fixed';

      // ✅ Log "Vehicle Fixed" with details of the vehicle
      console.log(`Vehicle Fixed:`, this.vehicles[index]);
    }
  }
}
