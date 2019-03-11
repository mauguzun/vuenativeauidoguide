import { isIOS } from "tns-core-modules/platform";
import { TNSPlayer } from "nativescript-audio";
const appSettings = require("tns-core-modules/application-settings");

export const Singleton = {

  vueinst : null,
  points: null,
  _featurePoints: null,

  get featurePoints() {
    return this._featurePoints;
  },
  set featurePoints(value) {
    this._featurePoints = value;

    if (this.vueinst) {
      this.vueinst.featurePoints = this._featurePoints;
    }
    
    this.savePoints();
  },
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
    
    this._current = null;  
    
    this.points.find(x => x.id == value.id).active = false;
    this.savePoints();

    this._current = value;

    if (this.vueinst) {
      this.vueinst.showPlayer = this._current;
    }
   
  },

  printData() {
    if (this.points == null) {
      return;
    }
    console.log(
      "active true -----------------------> " +
        this.points.filter(x => x.active == true).length
    );
    console.log(
      "active false ----------------------------------------------> " +
        this.points.filter(x => x.active == false).length
    );
  },
  savePoints() {
    appSettings.setString("points", JSON.stringify(this.points));
  },
  /**
   * play new song > ? why setup -> coz
   */
  setup() {
    try {
      this.player.audioFile = null;

    } catch (e) {
      
    }
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
      if (!this.player) return;

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
  clear() {
    try {
      clearInterval(this._checkInterval);
    } catch (e) {
      console.log(e.message);
    }
    try {
      this.player.pause();
      this.player.audioFile == null ;
    } catch (e) {
      console.log(e.message);
    }
    this._current = null;
    this.player = null;
    this.savePoints();
  },
  playPause() {
    if (this.player.isAudioPlaying()) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }
};
