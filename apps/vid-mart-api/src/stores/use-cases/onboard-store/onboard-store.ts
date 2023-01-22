import { Address } from "../../../core/models/address.js";
import { storeRepository } from "../../data/stores.js";
import { Store } from "../../models/store.js";

export function onboardStore(address: Address) {
  const store = new Store({ address });
  storeRepository.addStore(store);
}
