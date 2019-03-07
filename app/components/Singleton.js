import { isIOS } from "tns-core-modules/platform";
import { TNSPlayer } from "nativescript-audio";
const appSettings = require("tns-core-modules/application-settings");

export const Singleton = {
  points: null,
  featurePoints: null,
  /**
   * oe  ?  beebep stop loop :)
   */
  beebeepDone: [],
  progress: 0,
  isPlaying: false,

  player: null,

  _current: null,
  get current() {
    return this._current;
  },

  set current(value) {
    this.points.find(x => x.id == value.id).active = false;
    this._current = value;
    this.printData();
    appSettings.setString("points", JSON.stringify(this.points));
  },

  printData() {
    console.log(
      "active true -----------------------> " +
        this.points.filter(x => x.active == true).length
    );
    console.log(
      "active false ----------------------------------------------> " +
        this.points.filter(x => x.active == false).length
    );
  },

  /**
   * play new song > ? why setup -> coz
   */
  setup() {
    this.player = null;
    this.player = new TNSPlayer();

    const playerOptions = {
      audioFile: this.current.mp3,
      loop: false,
      completeCallback: function() {}
    };

    this.player
      .playFromUrl(playerOptions)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log("something went wrong...", err);
      });

    this._checkInterval = setInterval(() => {
      this.player.getAudioTrackDuration().then(duration => {
        // iOS: duration is in seconds
        // Android: duration is in milliseconds
        let current = this.player.currentTime;
        if (isIOS) {
          duration *= 1000;
          current *= 1000;
        }

        this.progress = Math.ceil((current / duration) * 100);
        this.isPlaying = this.player.isAudioPlaying();
      });
    }, 200);
  },
  play() {
    this.player.play();
  },
  clear() {},
  playPause() {
    if (this.player.isAudioPlaying()) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }
};
