import { storeRepository } from "../../data/stores";

export function listStores(){
    return storeRepository.getAll()
}
