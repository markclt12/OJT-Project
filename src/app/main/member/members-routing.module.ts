import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberComponent } from "./member.component";
import { MemberFormComponent } from "./member-form/member-form.component";
import { MemberDetailsResolver } from "app/common/resolvers/member-details.resolver";
import { MembersService } from "app/api";

const routes: Routes = [
  {
    path: "",
    component: MemberComponent,
  },
  {
    path: "add",
    component: MemberFormComponent,
    data: {
      title: "Assign New Driver",
      breadcrumb: "New",
    },
  },
  {
    path: "view/:id",
    component: MemberFormComponent,
    data: {
      title: "View Driver",
      breadcrumb: "View",
    },
    resolve: {
      MemberDetails: MemberDetailsResolver,
    },
  },
  {
    path: "edit/:id",
    component: MemberFormComponent,
    data: {
      title: "Edit Driver",
      breadcrumb: "Edit",
    },
    resolve: {
      MemberDetails: MemberDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class MemberRoutingModule {}
