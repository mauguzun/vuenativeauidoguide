import Vue from "nativescript-vue";
import Master   from "./components/Master";
import "./styles.scss";

// import { Wikitude } from 'nativescript-wikitude';

Vue.registerElement(
  "RadSideDrawer",
  () => require("nativescript-ui-sidedrawer").RadSideDrawer
);
Vue.registerElement(
  "MapView",
  () => require("nativescript-google-maps-sdk").MapView
);  
Vue.registerElement(
  "Wikitude",
  () => require("nativescript-wikitude").Wikitude
);
      
  
  
// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production');
Vue.config.silent = false;

new Vue({
  render: h => h("frame", [h(Master)])
}).$start();

