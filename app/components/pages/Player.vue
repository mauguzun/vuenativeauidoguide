<template>
  <StackLayout width="100%" horizontalAlignment="center" verticalAlignment="top">
    <StackLayout>
      <StackLayout orientation="horizontal" padding="1" @tap="playPause">
        <Image :src="point.img" stretch="aspectFill" class="postImageSmall"/>
        <StackLayout>
          <Label :text="point.title" class="postDateSmall"/>
          <Progress class="postDateSmall" :value="progress"/>
          <Label :text="isPlaying ? '⏸' : '▶'" class="postDateSmall"/>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import { isIOS } from "tns-core-modules/platform";
import { TNSPlayer } from "nativescript-audio";

export default {
  props: ["point"],
  watch: {
    point(val) {
      this.point = val;
      this.setup();
    }
  },
  data() {
    return {
      progress: 0,
      isPlaying: false
    };
  },
  mounted() {
    this.setup();
  },
  destroyed() {
    clearInterval(this._checkInterval);
  },
  methods: {
    setup() {
      this._player = null;
      this._player = new TNSPlayer();

      const playerOptions = {
        audioFile: this.point.mp3,
        loop: false,
        completeCallback: function() {}
      };

      this._player
        .playFromUrl(playerOptions)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log("something went wrong...", err);
        });

      this._checkInterval = setInterval(() => {
        this._player.getAudioTrackDuration().then(duration => {
          // iOS: duration is in seconds
          // Android: duration is in milliseconds
          let current = this._player.currentTime;
          if (isIOS) {
            duration *= 1000;
            current *= 1000;
          }

          this.progress = Math.ceil((current / duration) * 100);

          this.isPlaying = this._player.isAudioPlaying();
        });
      }, 200);
    },
    playPause() {
      if (this._player.isAudioPlaying()) {
        this._player.pause();
      } else {
        this._player.play();
      }
    },
    play() {
      try {
        this._player.play();
      } catch (e) {}
    },
    stop() {
      try {
        this._player.pause();
      } catch (e) {}
    }
  }
};
</script>