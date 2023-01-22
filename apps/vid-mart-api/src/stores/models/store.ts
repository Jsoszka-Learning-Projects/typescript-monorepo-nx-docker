import { randomInt } from "crypto";
import { Address } from "../../core/models/address.js";

export class Store {
  storeNumber: number;
  address: Address;
  status: "onboarding" | "open" | "closed";

  constructor({ address }) {
    this.storeNumber = randomInt(10000);
    (this.address = address), (this.status = "onboarding");
  }
}
