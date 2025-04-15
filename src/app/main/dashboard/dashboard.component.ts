import { Component, AfterViewInit } from "@angular/core";
import Chart from "chart.js";
import * as driversList from "../../../assets/json/drivers.json"
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

  public drivers = [];

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
    this.drivers = (driversList as any).default;
    console.log ("Drivers List: ", this.drivers)
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
