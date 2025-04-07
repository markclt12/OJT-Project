import { Component, AfterViewInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements AfterViewInit {
  public contentHeader: object;
  public driverStats = [
    { title: "Total Drivers", value: 50 },
    { title: "Assigned Drivers", value: 35 },
    { title: "Available Drivers", value: 15 },
  ];

  public drivers = [
    { name: "John Doe", vehicle: "SUV", status: "Assigned" },
    { name: "Jane Smith", vehicle: "Truck", status: "Available" },
    { name: "Michael Johnson", vehicle: "Van", status: "Assigned" },
    { name: "Sarah Lee", vehicle: "SUV", status: "Available" },
    { name: "Robert Brown", vehicle: "Truck", status: "Assigned" },
    { name: "Emily Davis", vehicle: "Van", status: "Assigned" },
    { name: "David Wilson", vehicle: "SUV", status: "Assigned" },
    { name: "Emma White", vehicle: "Truck", status: "Assigned" },
    { name: "James Anderson", vehicle: "Van", status: "Available" },
    { name: "Olivia Harris", vehicle: "SUV", status: "Assigned" },
    { name: "Daniel Martinez", vehicle: "Truck", status: "Assigned" },
    { name: "Sophia Clark", vehicle: "Van", status: "Available" },
    { name: "Matthew Rodriguez", vehicle: "SUV", status: "Assigned" },
    { name: "Isabella Lewis", vehicle: "Truck", status: "Available" },
    { name: "Lucas Walker", vehicle: "Van", status: "Assigned" },
    { name: "Mia Hall", vehicle: "SUV", status: "Assigned" },
    { name: "Alexander Allen", vehicle: "Truck", status: "Assigned" },
    { name: "Charlotte Young", vehicle: "Van", status: "Available" },
    { name: "Ethan King", vehicle: "SUV", status: "Assigned" },
    { name: "Amelia Wright", vehicle: "Truck", status: "Assigned" },
    { name: "Benjamin Scott", vehicle: "Van", status: "Available" },
    { name: "Harper Green", vehicle: "SUV", status: "Assigned" },
    { name: "Mason Adams", vehicle: "Truck", status: "Assigned" },
    { name: "Evelyn Nelson", vehicle: "Van", status: "Assigned" },
    { name: "Logan Carter", vehicle: "SUV", status: "Assigned" },
    { name: "Ava Mitchell", vehicle: "Truck", status: "Available" },
    { name: "William Perez", vehicle: "Van", status: "Assigned" },
    { name: "Sophia Roberts", vehicle: "SUV", status: "Available" },
    { name: "Henry Turner", vehicle: "Truck", status: "Assigned" },
    { name: "Liam Phillips", vehicle: "Van", status: "Assigned" },
    { name: "Ella Campbell", vehicle: "SUV", status: "Assigned" },
    { name: "Jack Parker", vehicle: "Truck", status: "Assigned" },
    { name: "Scarlett Evans", vehicle: "Van", status: "Available" },
    { name: "Lucas Edwards", vehicle: "SUV", status: "Assigned" },
    { name: "Chloe Collins", vehicle: "Truck", status: "Available" },
    { name: "Daniel Stewart", vehicle: "Van", status: "Assigned" },
    { name: "Madison Morris", vehicle: "SUV", status: "Available" },
    { name: "Sebastian Rogers", vehicle: "Truck", status: "Assigned" },
    { name: "Hannah Reed", vehicle: "Van", status: "Assigned" },
    { name: "Matthew Cook", vehicle: "SUV", status: "Assigned" },
    { name: "Elizabeth Morgan", vehicle: "Truck", status: "Available" },
    { name: "James Bell", vehicle: "Van", status: "Assigned" },
    { name: "Samantha Bailey", vehicle: "SUV", status: "Assigned" },
    { name: "Joseph Rivera", vehicle: "Truck", status: "Assigned" },
    { name: "Emily Cooper", vehicle: "Van", status: "Assigned" },
    { name: "Michael Richardson", vehicle: "SUV", status: "Available" },
    { name: "Grace Howard", vehicle: "Truck", status: "Assigned" },
    { name: "Andrew Foster", vehicle: "Van", status: "Assigned" },
    { name: "Lily Ward", vehicle: "SUV", status: "Assigned" },
    { name: "Ryan Cox", vehicle: "Truck", status: "Assigned" },
  ];

  ngOnInit(): void {
    this.contentHeader = {
      headerTitle: "Dashboard",
      actionButton: false,
      breadcrumb: {
        type: "",
        links: [{ name: "Dashboard", isLink: false }],
      },
    };
    console.log("Drivers Count: ", this.driverStats);
  }

  ngAfterViewInit() {
    this.renderPieChart();
    this.renderLineChart();
    this.renderDoughnutChart();
    this.renderRadarChart();
  }

  renderPieChart() {
    const pieChart = new Chart(
      document.getElementById("pieChart") as HTMLCanvasElement,
      {
        type: "pie",
        data: {
          labels: ["SUV", "Truck", "Van"],
          datasets: [
            { data: [15, 7, 13], backgroundColor: ["blue", "green", "yellow"] },
          ],
        },
      }
    );
    console.log("Vehicle Distribution:", pieChart.data);
  }

  renderLineChart() {
    const lineChart = new Chart(
      document.getElementById("lineChart") as HTMLCanvasElement,
      {
        type: "line",
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Expenses",
              data: [600, 800, 750, 1200, 1600, 1100],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
            },
          ],
        },
      }
    );
    console.log("Monthly Expenses:", lineChart.data);
  }

  renderDoughnutChart() {
    const doughnutChart = new Chart(
      document.getElementById("doughnutChart") as HTMLCanvasElement,
      {
        type: "doughnut",
        data: {
          labels: ["SUV", "Truck", "Van"],
          datasets: [
            { data: [15, 7, 13], backgroundColor: ["blue", "green", "yellow"] },
          ],
        },
      }
    );
    console.log("Monthly Vehicle Usage:", doughnutChart.data);
  }

  renderRadarChart() {
    const radarChart = new Chart(
      document.getElementById("radarChart") as HTMLCanvasElement,
      {
        type: "radar",
        data: {
          labels: [
            "Speed",
            "Fuel Efficiency",
            "Durability",
            "Comfort",
            "Maintenance Cost",
          ],
          datasets: [
            {
              label: "SUV",
              data: [70, 75, 80, 70, 65],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Truck",
              data: [60, 50, 90, 50, 95],
              borderColor: "green",
              backgroundColor: "rgba(0, 128, 0, 0.3)",
            },
            {
              label: "Van",
              data: [65, 80, 70, 75, 85],
              borderColor: "yellow",
              backgroundColor: "rgba(255, 255, 0, 0.3)",
            },
          ],
        },
      }
    );
    console.log("Vehicle Performance Comparison:", radarChart.data);
  }
}
