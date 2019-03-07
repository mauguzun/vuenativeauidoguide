import { isIOS } from "tns-core-modules/platform";
import { TNSPlayer } from "nativescript-audio";

export const Singleton = {
    points: null,
    featurePoint: null,
    foo: 123,
    progress: 0,
    isPlaying: false,
    point: null,
    player: null,
    
   
    /**
     * 
     */
    setup: function () {
        this.player = null;
        this.player = new TNSPlayer();
  
        const playerOptions = {
          audioFile: this.point.mp3,
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
    play: function () {
        
    },
    clear: function () {
        
    },
    playPause: function () {
        if (this.player.isAudioPlaying()) {
          this.player.pause();
        } else {
          this.player.play();
        }
      },
      
 };   