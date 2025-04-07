import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
} from "@angular/core";
import { FormBuilder, NgForm, Validators } from "@angular/forms";
import { MembersService } from "app/api";
import { environment } from "environments/environment";
import { FlatpickrOptions } from "ng2-flatpickr";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class PersonalInfoComponent implements OnInit {
  submitted: boolean = false;
  @ViewChild("personalInfoForm") personalInfoForm: NgForm;
  // submitted: boolean = false;

  public driverInfoForm: any = {
    department: null,
    name: null,
    vehicle: null,
    location: null,
    date: null,
    daysLeft: null,
  };

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

  public driverChoices = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Sarah Lee" },
    { id: 5, name: "Robert Brown" },
    { id: 6, name: "Emily Davis" },
    { id: 7, name: "David Wilson" },
    { id: 8, name: "Emma White" },
    { id: 9, name: "James Anderson" },
    { id: 10, name: "Olivia Harris" },
    { id: 11, name: "Daniel Martinez" },
    { id: 12, name: "Sophia Clark" },
    { id: 13, name: "Matthew Rodriguez" },
    { id: 14, name: "Isabella Lewis" },
    { id: 15, name: "Lucas Walker" },
    { id: 16, name: "Mia Hall" },
    { id: 17, name: "Alexander Allen" },
    { id: 18, name: "Charlotte Young" },
    { id: 19, name: "Ethan King" },
    { id: 20, name: "Amelia Wright" },
    { id: 21, name: "Benjamin Scott" },
    { id: 22, name: "Harper Green" },
    { id: 23, name: "Mason Adams" },
    { id: 24, name: "Evelyn Nelson" },
    { id: 25, name: "Logan Carter" },
    { id: 26, name: "Ava Mitchell" },
    { id: 27, name: "William Perez" },
    { id: 28, name: "Sophia Roberts" },
    { id: 29, name: "Henry Turner" },
    { id: 30, name: "Liam Phillips" },
    { id: 31, name: "Ella Campbell" },
    { id: 32, name: "Jack Parker" },
    { id: 33, name: "Scarlett Evans" },
    { id: 34, name: "Lucas Edwards" },
    { id: 35, name: "Chloe Collins" },
    { id: 36, name: "Daniel Stewart" },
    { id: 37, name: "Madison Morris" },
    { id: 38, name: "Sebastian Rogers" },
    { id: 39, name: "Hannah Reed" },
    { id: 40, name: "Matthew Cook" },
    { id: 41, name: "Elizabeth Morgan" },
    { id: 42, name: "James Bell" },
    { id: 43, name: "Samantha Bailey" },
    { id: 44, name: "Joseph Rivera" },
    { id: 45, name: "Emily Cooper" },
    { id: 46, name: "Michael Richardson" },
    { id: 47, name: "Grace Howard" },
    { id: 48, name: "Andrew Foster" },
    { id: 49, name: "Lily Ward" },
    { id: 50, name: "Ryan Cox" },
  ];

  public customDateOptions: FlatpickrOptions = {
    altFormat: "F j, Y",
    altInput: true,
    dateFormat: "Y-m-d",
    minDate: "today",
  };

  constructor(
    private formBuilder: FormBuilder,
    private memberService: MembersService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.departmentChoices.sort((a, b) =>
      a.description.localeCompare(b.description)
    );

    this.driverChoices.sort((a, b) => a.name.localeCompare(b.name));

    console.log(
      "Initial Department:",
      this.driverInfoForm.department || "No Department set"
    );
    console.log("Initial Name:", this.driverInfoForm.name || "No name set");
    console.log(
      "Initial Vehicle:",
      this.driverInfoForm.vehicle || "No vehicle & plate number set"
    );
    console.log(
      "Initial Location:",
      this.driverInfoForm.location || "No location set"
    );
    console.log("Initial date:", this.driverInfoForm.date || "No date set");
  }
  private initializeForm(): void {
    this.driverInfoForm = this.formBuilder.group({
      department: [null, Validators.required],
      name: [null, Validators.required],
      vehicle: [null, Validators.required],
      location: [null, Validators.required],
      date: [null, Validators.required],
      daysLeft: [null],
    });
  }

  onChangeDepartment(event: any): void {
    console.log("Department: ", this.driverInfoForm.department);
  }
  onChangeDriver(event: any): void {
    console.log("Driver: ", this.driverInfoForm.name);
  }
  onChangeLocation($event: any): void {
    console.log("Location: ", this.driverInfoForm.location);
  }
  logInput(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    console.log("Input value:", inputValue);
  }

  onChangeDate(event: any): void {
    if (event) {
      const selectedDate = new Date(event);
      this.driverInfoForm.date = selectedDate.toISOString().split("T")[0];
      this.driverInfoForm.daysLeft = this.calculateDaysLeft(selectedDate);

      console.log("Selected Date:", this.driverInfoForm.date);
      console.log("Days Left:", this.driverInfoForm.daysLeft);
    } else {
      this.driverInfoForm.daysLeft = null;
      console.log("No date selected.");
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
 
    console.log("Driver Data:", this.personalInfoForm.value);
  
  // console.log("Form Data:", this.driverInfoForm);

  this.memberService
    .apiVversionMembersCreateMemberPost(
      environment.apiVersion,
      this.driverInfoForm
    )
    .subscribe({
      next: (response) => {
        console.log("Response:", response);
      },
      error: (error) => {
        console.error("Error while submitting form:", error);
      },
    });
}
}
