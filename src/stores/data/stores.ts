import { Store } from "../models/store.js";

const stores: Store[] = [];

export const storeRepository = {
  addStore(store: Store) {
    stores.push(store);
  },
  getAll(){
    return stores
  }
};
