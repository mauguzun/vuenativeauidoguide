import Vue from "nativescript-vue";
import Master   from "./components/Master";
import { Wikitude } from 'nativescript-wikitude';
import "./styles.scss";


var application = require("application");
application.wikitudeLicense = "palPJoYwNfx9BvX2y08jjF8j56sM0mk4IH3KcjCU+6/qkZa1rez8lOrp9ng/N+KdovrmYnY7r7zL4z+GtUkDUdL4uq7tJfE2PplDomlg2QuWvzm22Pdp++f3nvEXmBWF9Fg0cAgW6vE6i/RpQAcvr5nfBmKiC5hdE9tvUXIWnbxTYWx0ZWRfXzgIG3VLe4aZydUxxDq818R0yE0+RU2sxr0nvdjldDyxYmab/QJpukGLz99SvG/1WwyyvzymW6IF/hZyUSfoCn7Gm5EPCfeaVG9qJDmtOOSf9pAl0MFIDGtZCItufEehpyY9I04LMb/tH4fkqVyOkbGF/we4nQ7BUd4WUDATjlpwqV5HJ6vJ+GtpQDqK112a/t2vCmRauM08/ArqFA5fkcr7agQTaC7TFtwP6C+2AxkDcOiZF2l8ChjFoAmYYuAsZ6YoL1iDwQZco8xzur2tQ+kQF8e05JqdLwNjDet84oiJ73m2F2nV5sI2FzGs6cHRmeRfgib66eaCvfTQoChNluAu1kQdRTrEsej023O7trkTd4CpOV7l+5D+q9AHOL/1pzx/fR8L/GFUcxtzhWSX6j4jSl1AXHx8YkQ03Tk5U3SMOKuhbmGUdvxktW1TopNY3CCIxBI0d2mopzx+tJrHfX2dd1b7lKg/5dAhg0CkY53718I5UGBOyGGtCrlAJKmEgF4RrLBD46Atq2R6iB9Mp8aSa0lrqNS3W/Aun9QPHiyGKHCZaAtEtzTTdYp0dRpccGKq6Jnfthk4"
  
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
  () =>Wikitude 
);    
      

Wikitude.licenseKey = "palPJoYwNfx9BvX2y08jjF8j56sM0mk4IH3KcjCU+6/qkZa1rez8lOrp9ng/N+KdovrmYnY7r7zL4z+GtUkDUdL4uq7tJfE2PplDomlg2QuWvzm22Pdp++f3nvEXmBWF9Fg0cAgW6vE6i/RpQAcvr5nfBmKiC5hdE9tvUXIWnbxTYWx0ZWRfXzgIG3VLe4aZydUxxDq818R0yE0+RU2sxr0nvdjldDyxYmab/QJpukGLz99SvG/1WwyyvzymW6IF/hZyUSfoCn7Gm5EPCfeaVG9qJDmtOOSf9pAl0MFIDGtZCItufEehpyY9I04LMb/tH4fkqVyOkbGF/we4nQ7BUd4WUDATjlpwqV5HJ6vJ+GtpQDqK112a/t2vCmRauM08/ArqFA5fkcr7agQTaC7TFtwP6C+2AxkDcOiZF2l8ChjFoAmYYuAsZ6YoL1iDwQZco8xzur2tQ+kQF8e05JqdLwNjDet84oiJ73m2F2nV5sI2FzGs6cHRmeRfgib66eaCvfTQoChNluAu1kQdRTrEsej023O7trkTd4CpOV7l+5D+q9AHOL/1pzx/fR8L/GFUcxtzhWSX6j4jSl1AXHx8YkQ03Tk5U3SMOKuhbmGUdvxktW1TopNY3CCIxBI0d2mopzx+tJrHfX2dd1b7lKg/5dAhg0CkY53718I5UGBOyGGtCrlAJKmEgF4RrLBD46Atq2R6iB9Mp8aSa0lrqNS3W/Aun9QPHiyGKHCZaAtEtzTTdYp0dRpccGKq6Jnfthk4"
// Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production');
Vue.config.silent = false;

new Vue({
  render: h => h("frame", [h(Master)])
}).$start();

