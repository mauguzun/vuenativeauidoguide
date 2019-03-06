<template>
  <StackLayout width="100%" horizontalAlignment="center" verticalAlignment="top">
    <Label :text="translate.labels.city"/>

    <ListPicker
      v-model="indexCity"
      :items="cities"
      textField="title"
      valueField="id"
      @selectedIndexChange="changeLang"
    ></ListPicker>

    <Label :text="translate.labels.lang"/>

    <ListPicker
      :items="lang"
      v-model="indexLang"
      @selectedIndexChange="changeLang"
      textField="title"
      valueField="id"
    ></ListPicker>

    <Button text="lsit xxaasaass" class="btn btn-primary" @tap="onButtonTap"/>
  </StackLayout>
</template>

<script>
import { apiCall, langList } from "./../api.js";

const appSettings = require("tns-core-modules/application-settings");

export default {
  props: ["translate"],
  mounted() {
    apiCall("cities", { lang: appSettings.getString("lang", "en") })
       .catch(e=>{
         console.log(e);
       })
      .then(res => {

        return res.json();  
      })
      .then(res => {
          
        if (res.action == true) {
          this.cities = res.code;
          this.indexCity = this.cities.findIndex(
            p => p.id == appSettings.getString("city", "1")
          );
          this.indexLang = langList().findIndex(
            p => p.id == appSettings.getString("lang", "en")
          );
        }
      });
  },
  data() {
    return {
      indexLang: 1,
      indexCity: 1,
      sendLang: null,
      sendCity: null,
      cities: [],
      lang: langList()
    };
  },

  methods: {
    onButtonTap() {
      this.$emit("settingSaved", { city: this.sendCity, lang: this.sendLang });
    },
    changeLang(args) {
      this.sendCity = this.cities[this.indexCity].id;
      this.sendLang = this.lang[this.indexLang].id;
    }
  }
};
</script>

<style>
</style>
