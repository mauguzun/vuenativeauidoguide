<template>
  <StackLayout horizontalAlignment="center" verticalAlignment="top">
    <MapView
      width="100%"
      height="70%"
      @mapReady="mapReady"
      dock="top"
      ref="map"
      :zoom="zoom"
      :latitude="latitude"
      :longitude="longitude"
      bearing="180"
      tilt="35"
    />
  </StackLayout>
</template>

<script>
let mapsModule = require("nativescript-google-maps-sdk");
//import { MapViewBase } from 'nativescript-google-maps-sdk/map-view-common';

export default {
  //  props: ["points"],
  watch: {
    points(value) {
      this.points = value;
      this.drawPoints();
    }
  },
  mounted() {},
  data() {
    return {
      longitude: 7.1827772,
      latitude: 43.7031691,
      zoom: 17,
      points: null,
      currenLocation: null,
      map: null
    };
  },

  methods: {
    mapReady(args) {
      this.map = args.object;
      mapsModule.myMap = args.object;

      //   this.pointsMarkers.push(marker);
      this.map.latitude = 43.7031691;
      this.map.longitude = 7.1827772;
      this.markerSetPoints();
    },

    markerSetPoints() {
      for (var x = 0; this.points[x]; x++) {
        let marker = new mapsModule.Marker();
        marker.position = new mapsModule.Position.positionFromLatLng(
          this.points[x].lat,
          this.points[x].lng
        );
        // marker.icon = 'sadf';
        marker.title = this.points[x].title;
        marker.userData = { id: this.points[x].id };
        this.map.addMarker(marker);
        this.map.latitude = this.points[x].lat;
        this.map.longitude = this.points[x].lng;
      }
    },

    setCurrentLocation(lat, lng) {
      if (this.currenLocation == null) {
        this.currenLocation = new mapsModule.Marker();
        this.currenLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
        this.currenLocation.title = "You are here";

        mapsModule.myMap.addMarker(this.currenLocation);
      } else {
        this.currenLocation.position = new mapsModule.Position.positionFromLatLng(
          lat,
          lng
        );
      }
      this.map.latitude = lat;
      this.map.longitude = lng;
      alert("map");
    }
  }
};
</script>

<style>
</style>
