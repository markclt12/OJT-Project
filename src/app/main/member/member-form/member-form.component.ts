import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MembersService } from "app/api";
import { Subject } from "rxjs";
import Stepper from "bs-stepper";

@Component({
  selector: "app-member-form",
  templateUrl: "./member-form.component.html",
  styleUrls: ["./member-form.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class MemberFormComponent implements OnInit {
  public contentHeader: object;
  private unsubscribeAll: Subject<any>;
  private horizontalWizardStepper: Stepper;

  @ViewChild("personalInfoForm") personalInfoForm: NgForm;

  constructor(
    private memberService: MembersService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.data;
    this.contentHeader = {
      headerTitle: data.title,
      actionButton: false,
      breadcrumb: {
        type: "",
        links: [
          {
            name: "Driver",
            isLink: true,
            link: "/members/",
          },
          {
            name: data.breadcrumb,
            isLink: false,
          },
        ],
      },
    };

    setTimeout(() => {
      this.horizontalWizardStepper = new Stepper(document.querySelector("#stepper1"), {});
      console.log("Stepper initialized:", this.horizontalWizardStepper);
    }, 100);
  }

  goTo(stepNumber: number) {
    if (this.horizontalWizardStepper) {
      this.horizontalWizardStepper.to(stepNumber);
    }

    switch (stepNumber) {
      case 1:
        console.log("You are in Assign Driver page");
        break;
      case 2:
        console.log("You are in Maintenance page"); 
        break;
      case 3:
        console.log("You are in Review page");
        break;
      default:
        console.log("Unknown step selected");
    }
  }

  next() {
    if (this.horizontalWizardStepper) {
      this.horizontalWizardStepper.next();
    }
    console.log("Proceeded")
  }

  previous() {
    if (this.horizontalWizardStepper) {
      this.horizontalWizardStepper.previous();
    }
    console.log("Preceded")
  }
}
