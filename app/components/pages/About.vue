<template>
  <HtmlView style="padding :  10 " :html="code"/>
</template>

<script>
import { apiCall } from "./../api.js";
const appSettings = require("tns-core-modules/application-settings");

export default {
  data() {
    return {
      code: "<div><h1 </h1></div>"
    };
  },
  mounted() {
    apiCall("code", {
      page_name: "about",
      lang: appSettings.getString("lang", "en")
    }).then(res => {
      return res.json().then(e => {
        this.code = e.code;
      });
    });
  }
};
</script>
 
<style>
</style>
