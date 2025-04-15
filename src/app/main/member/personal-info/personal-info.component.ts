import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { MembersService } from "app/api";
import { FlatpickrOptions } from "ng2-flatpickr";
import * as driversList from "../../../../assets/json/drivers.json";
import Swal from "sweetalert2";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalInfoComponent implements OnInit {
  submitted: boolean = false;
  @ViewChild("personalInfoForm") personalInfoForm: NgForm;

  public driverInfoForm: any = {
    department: null,
    name: null,
    vehicle: null,
    location: null,
    date: null,
    daysLeft: null,
  };

  public vehicleChoices = [
    { id: 1, description: "Truck - ABC-1234" },
    { id: 2, description: "SUV - XYZ-5678" },
    { id: 3, description: "Truck - LMN-9012" },
    { id: 4, description: "Van - DEF-3456" },
    { id: 5, description: "Van - GHI-7890" },
    { id: 6, description: "Suv - JKL-1122" },
    { id: 7, description: "Truck - QRS-3344" },
    { id: 8, description: "Suv - TUV-5566" },
    { id: 9, description: "Van - WXY-7788" },
    { id: 10, description: "Suv - ZAB-9900" },
    { id: 11, description: "Van - CDE-2233" },
    { id: 12, description: "Truck - FGH-4455" },
    { id: 13, description: "Truck - IJK-6677" },
    { id: 14, description: "Van - LMO-8899" },
    { id: 15, description: "Suv - NOP-1010" }
  ];

  public departmentChoices = [
    { id: 1, description: "Accounting" },
    { id: 2, description: "Admin" },
    { id: 3, description: "Area Manager" },
    { id: 4, description: "Billing Collection" },
    { id: 5, description: "Engineering" },
    { id: 6, description: "ICD" },
    { id: 7, description: "ICT" },
    { id: 8, description: "Inventory Staff" },
    { id: 9, description: "Marketing" },
    { id: 10, description: "Membership" },
    { id: 11, description: "Merchandise Trading" },
    { id: 12, description: "Paiwi" },
    { id: 13, description: "Purchasing" },
    { id: 14, description: "Regional Manager" },
    { id: 15, description: "Store Officer" },
    { id: 16, description: "Treasury" },
  ];

  public driverChoices = [];

  public customDateOptions: FlatpickrOptions = {
    altFormat: "F j, Y",
    altInput: true,
    dateFormat: "Y-m-d",
    minDate: "today",
  };

  constructor(private memberService: MembersService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.initializeForm();
    this.departmentChoices.sort((a, b) => a.description.localeCompare(b.description));
    this.driverChoices.sort((a, b) => a.name.localeCompare(b.name));
  }

  initializeForm(): void {
    this.driverInfoForm = {
      department: null,
      name: null,
      vehicle: null,
      location: null,
      date: null,
      daysLeft: null,
    };

    this.driverChoices = (driversList as any).default.filter((d) => d.status === "Available");
    this.filterAssignedDrivers();
  }

  onChangeDepartment(event: any): void {
    console.log("Department: ", this.driverInfoForm.department);
  }

  onChangeDriver(event: any): void {
    console.log("Driver: ", this.driverInfoForm.name);
  }

  onChangeVehicle(event: any): void {
    console.log("Vehicle: ", this.driverInfoForm.vehicle);
  }

  onChangeLocation(event: any): void {
    console.log("Location: ", this.driverInfoForm.location);
  }

  onChangeDate(event: any): void {
    if (event) {
      const selectedDate = new Date(event);
      const year = selectedDate.getFullYear();
const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
const day = String(selectedDate.getDate()).padStart(2, '0');
this.driverInfoForm.date = `${year}-${month}-${day}`;
      this.driverInfoForm.daysLeft = this.calculateDaysLeft(selectedDate);
    } else {
      this.driverInfoForm.date = null;
      this.driverInfoForm.daysLeft = null;
    }
    this.cdr.detectChanges();
  }

  calculateDaysLeft(selectedDate: Date): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    const diffTime = selectedDate.getTime() - today.getTime();
    return Math.max(Math.ceil(diffTime / (1000 * 60 * 60 * 24)), 0);
  }

  addMembers(): void {
    this.submitted = true;
  
    if (!this.personalInfoForm.valid) {
      console.log("Form is invalid.");
      return;
    }
  
    const assignedDrivers = JSON.parse(localStorage.getItem("assignedDrivers") || "[]");
  
    // 🚫 Check for duplicate vehicle on the same date
    const vehicleConflict = assignedDrivers.find(
      (entry: any) =>
        entry.vehicle === this.driverInfoForm.vehicle &&
        entry.date === this.driverInfoForm.date
    );
  
    if (vehicleConflict) {
      Swal.fire({
        title: "Duplicate Vehicle Booking!",
        text: `This vehicle is already assigned on ${new Date(this.driverInfoForm.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}. Please choose a different date or vehicle.`,
        icon: "error",
        confirmButtonColor: "#E42728",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "btn btn-danger",
        },
      });
      return;
    }
  
    // ✅ Proceed to assign
    Swal.fire({
      title: "Are you sure?",
      text: "Driver will be assigned!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7367F0",
      cancelButtonColor: "#E42728",
      confirmButtonText: "Yes",
      customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger ml-1",
      },
    }).then((result) => {
      if (result.value) {
        const selectedDriver = this.driverChoices.find((a) => a.name === this.driverInfoForm.name);
  
        if (selectedDriver) {
          assignedDrivers.push({
            ...this.personalInfoForm.value,
            name: selectedDriver,
          });
          localStorage.setItem("assignedDrivers", JSON.stringify(assignedDrivers));
          this.filterAssignedDrivers();
        }
  
        Swal.fire({
          title: "Great!",
          text: "Driver assigned!",
          icon: "success",
          confirmButtonColor: "#7367F0",
          confirmButtonText: "Ok",
          customClass: {
            confirmButton: "btn btn-primary",
          },
        }).then(() => {
          this.personalInfoForm.resetForm();
          this.submitted = false;
          window.location.reload();
        });
      }
    });
  }

  filterAssignedDrivers(): void {
    const assignedDrivers = JSON.parse(localStorage.getItem("assignedDrivers") || "[]");
    const assignedDriverIds = assignedDrivers.map((a: any) => a.name?.id);
    this.driverChoices = this.driverChoices.filter((driver) => !assignedDriverIds.includes(driver.id));
  }
}
