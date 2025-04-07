import { Component, OnInit } from '@angular/core';
import { MaintenanceService } from '../services/maintenance.services';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  vehicles = [];

  constructor(private maintenanceService: MaintenanceService) { }

  ngOnInit(): void {
    this.vehicles = this.maintenanceService.getVehicles();
  }

  markAsFixed(index: number): void {
    this.maintenanceService.markAsFixed(index);
    this.vehicles = this.maintenanceService.getVehicles(); // Refresh the list
  }
}
