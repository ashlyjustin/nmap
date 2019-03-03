import UIStore from "./ui";
import UserStore from "./user";
import { create } from "mobx-persist";
import clientPersist from "client-persist";

class Store {
  constructor() {
    this.ui = new UIStore(this);
    this.user = new UserStore(this);
  }
}

const store = new Store();
export default store;

clientPersist.setDriver(clientPersist.SESSIONSTORAGE);

const hydrate = create({
  storage: clientPersist
});

const p1 = hydrate("hello", store.ui);

Promise.all([p1]).then(() => {
  console.log("Hydration complete");
  store.ui.fetchedFromPersist = true;
});
