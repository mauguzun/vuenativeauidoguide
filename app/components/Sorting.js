import { Singleton } from "./Singleton.js";
import { locationSettings } from "./locationSettings.js";
import { beep } from "./beep";

export const Sorting = {
  prevLocation: {
    lat: null,
    lng: null
  },
  /**
   *
   * @param {number} currentLat
   * @param {number} currentLng
   */
  sortPoints(currentLat, currentLng) {
    console.log(currentLat, currentLng);
    if (
      this.prevLocation.lat != null &&
      this.distanceInKmBetweenEarthCoordinates(
        this.prevLocation.lat,
        this.prevLocation.lng,
        currentLat,
        currentLng
      ) < locationSettings.samePlaceInKm
    ) {
      console.log("not moved :( ");
      return;
    }
    if (Singleton.points == null) {
      alert("Please load  points");
      return;
    }

    //  only active
    let points = Singleton.points.filter(x => x.active == true);
    if (!points) {
      console.log("points all done ");
      return;
    }

    for (let ind in points) {
      points[ind].distance = this.getDistanceFromLatLonInKm(
        currentLat,
        currentLng,
        points[ind].lat,
        points[ind].lng
      );
      console.log(
        points[ind].active +
          " - " +
          points[ind].distance +
          " km " +
          points[ind].title
      );
    }

    let clear = points
      .filter(
        x =>
          x.distance < locationSettings.featurePointDistanceKm &&
          x.active == true
      )
      .sort((a, b) => {
        if (a.distance > b.distance) {
          return 1;
        }
        if (a.distance < b.distance) {
          return -1;
        }

        return 0;
      });

    console.log("ssssssssssss");
    for (let a in clear) {
      console.log(`${a}->${clear[a].title} in ${clear[a].distance}`);
    }
    console.log(`${0}->${clear[0].title} in ${clear[0].distance}`);

    console.log("ssssssssssss");
    if (clear.length > 0) {
      if (clear[0].distance < locationSettings.pointCanPlaceDistanceKm) {
        Singleton.printData();

        if (
          Singleton.progress &&
          Singleton.progress > 0 &&
          Singleton.progress < 100
        ) {
          if (
            Singleton.player &&
            !Singleton.beebeepDone.includes(Singleton.current.id)
          ) {
            if (Singleton.player) Singleton.player.pause();
            beep();
            Singleton.beebeepDone.push(Singleton.current.id);
            setTimeout(e => {
              if (Singleton.player) Singleton.player.resume();
            }, 2000);
          }
        } else {
          Singleton.current = clear[0];
          Singleton.setup();
        }
      }
    }
    Singleton.featurePoints = clear.length > 0 ? clear : null;

    //   this.prevLocation.lat = currentLat;
    //   this.prevLocation.lng = currentLng;
  },

  /**
   *
   * @param {number} lat1
   * @param {number} lon1
   * @param {number} lat2
   * @param {number} lon2
   */
  getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1); // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) *
        Math.cos(this.deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  },

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
};
