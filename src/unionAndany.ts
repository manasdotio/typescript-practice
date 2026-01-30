let subs: number | string = "1M";

let apiRequestStatus: "pending" | "success" | "failed" = "pending";

let airlineSeat: "aisle" | "middle" | "window" = "aisle";

const orders = ["100", "200", "300"];

let currentorder: string | undefined;

for (let order of orders) {
  if (order === "200") {
    currentorder = order;
    break;
  }
  currentorder = "11"
}
console.log(currentorder);
