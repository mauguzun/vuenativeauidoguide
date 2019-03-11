<template>
  <StackLayout width="100%" horizontalAlignment="center" verticalAlignment="top">
    <StackLayout>
      <StackLayout orientation="horizontal" padding="1" @tap="playPause">
        <Image :src="point.img" stretch="aspectFill" class="postImageSmall"/>
        <StackLayout>
          <Label :text="point.title" class="postDateSmall"/>
          <Progress class="postDateSmall" :value="progress"/> 
          <!-- <Label :text="isPlaying ? '⏸' : '▶'" class="postDateSmall"/> -->
        </StackLayout>  
      </StackLayout>
    </StackLayout>
  </StackLayout>
</template>

<script>
import { isIOS } from "tns-core-modules/platform";
import { TNSPlayer } from "nativescript-audio";
import { Singleton } from "../Singleton";

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
       this.isPlaying = true;

      this._checkInterval = setInterval(() => {
        this.progress = Singleton.progress;
      }, 200);
    },
    playPause() {
      if (Singleton.player && Singleton.player.isAudioPlaying()) {
        Singleton.player.pause();
      } else if (Singleton.player) {
        Singleton.player.play();
      }
    },
    play() {
      try {
        Singleton.player.play();
      } catch (e) {}
    },
    stop() {
      try {  
        Singleton.player.pause();
      } catch (e) {}
    }
  }
};
</script>