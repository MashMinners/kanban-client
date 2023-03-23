import { createStore } from 'vuex';
import {appModule} from "@/store/appModule";
import {cpModule} from "@/store/cpModule";

export default createStore({
  modules: {
    app: appModule,
    cp: cpModule
  }
})
