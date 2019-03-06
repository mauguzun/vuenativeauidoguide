import Vue from "nativescript-vue";
import Master   from "./components/Master";
import "./styles.scss";



  
  
// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production');
Vue.config.silent = true;



new Vue({
  render: h => h("frame", [h(Master)])
}).$start();

