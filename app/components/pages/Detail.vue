<template>
  <AbsoluteLayout>
    <StackLayout ref="main" class="dialog" width="100%" height="100%" backgroundColor="white">
      <ScrollView ref="scrollView" @scroll="onScroll">
        <StackLayout>
          <StackLayout
            ref="topView"
            :backgroundImage="point.img[0]"
            height="250"
            style="background-repeat: no-repeat; background-position: center; background-size: cover;"
          >
            <!-- this is the header for collapsing --->
            <!-- Note: this can be any type of layout you want -->
            <Label
              text=" x "
              @tap="hide()"
              color="white"
              textAlignment="center"
              fontSize="30"
              marginTop="40"
            />
            <Label
              :text="point.title"
              color="white"
              textAlignment="center"
              fontSize="30"
              marginTop="40"
            />

            <Progress color="#8C489F" backgroundColor="#FFFF66" :value="progress"/>
          </StackLayout>

          <StackLayout width="100%" backgroundColor="white" padding="10">
            <!--Add your page content here-->
            <Label textWrap="true" :text="point.title" class="h2 description-label"/>
            <Label
              textWrap="true"
              class="p-10"
              text="Incididunt laboris et cupidatat irure qui ea id laboris cupidatat ullamco. Id ut est anim irure elit enim consectetur. Sit pariatur est velit non nisi fugiat officia id velit ex ad sunt quis.

Veniam ullamco qui occaecat duis eiusmod voluptate dolor incididunt velit laborum excepteur velit. Duis ipsum adipisicing nostrud sit sit in consectetur ea velit eu aliqua duis. Do in occaecat consequat reprehenderit qui officia minim. Tempor laboris in deserunt dolore. Reprehenderit do laborum dolore mollit proident voluptate nostrud in labore. Irure ut minim culpa deserunt officia officia in dolor id et velit duis aute. Sit laboris amet adipisicing esse aliqua dolor excepteur reprehenderit amet magna ea elit exercitation.

Enim dolore anim laborum incididunt ad Lorem amet. Ullamco do duis sunt deserunt Lorem exercitation deserunt. Ut id enim dolore sit id. Laboris nisi sit ex irure adipisicing ullamco incididunt commodo ad.

Enim tempor esse nostrud cillum irure incididunt et id aliqua labore ullamco nostrud laboris. Officia culpa irure aliquip et. Sit consectetur voluptate cupidatat dolore. Fugiat adipisicing velit amet cillum minim excepteur enim sit anim officia nostrud reprehenderit occaecat cillum. Anim dolore incididunt occaecat in proident deserunt proident voluptate duis excepteur ullamco sunt.

Eu nulla officia eiusmod occaecat enim est ut. Commodo deserunt officia aute excepteur elit. Exercitation enim sint excepteur sunt veniam tempor. Dolor minim officia eu elit elit velit aliquip voluptate nulla ipsum et aliqua voluptate. Est exercitation minim proident minim incididunt reprehenderit id sunt exercitation. Consectetur non sunt Lorem et ad sunt aliqua cillum.

In irure magna proident adipisicing nisi fugiat et dolor ipsum laborum tempor. Consequat fugiat amet ullamco esse id culpa pariatur labore aute nisi sunt. Dolore nisi nostrud nostrud reprehenderit in magna nulla. Deserunt voluptate eu amet aute tempor labore adipisicing quis ea cupidatat. Aliquip reprehenderit non nisi magna excepteur eu fugiat eiusmod qui. Sunt qui ut laboris qui nulla et cillum reprehenderit esse officia. Adipisicing velit nulla et et nisi laboris ipsum.

Sit est cillum consectetur quis consectetur est et sunt veniam laborum sunt ipsum nostrud. Ea adipisicing amet qui mollit adipisicing esse ad ea. Sint ea ipsum Lorem aliqua exercitation quis et voluptate. Aliqua in reprehenderit pariatur aliqua non non consectetur eu exercitation quis et pariatur laborum. Proident adipisicing deserunt quis voluptate cillum non officia duis. Proident officia exercitation do elit do sint culpa. Laboris incididunt sunt voluptate consectetur aute dolore fugiat aliqua quis sint sunt non.

Eu adipisicing magna aliqua non proident ipsum id exercitation ex aute non. Labore ullamco reprehenderit irure consequat adipisicing minim deserunt laborum velit sint. Et ea ullamco exercitation ullamco Lorem proident minim incididunt dolore aute dolor voluptate labore et.

Nulla ipsum do ipsum do voluptate ut dolor veniam esse. Minim non do veniam duis cillum consequat. Ut amet aute ad elit ipsum amet pariatur excepteur officia fugiat qui reprehenderit voluptate eiusmod. Quis excepteur duis eiusmod deserunt proident id labore ex consequat occaecat mollit nisi."
            />
          </StackLayout>
        </StackLayout>
      </ScrollView>
    </StackLayout>
  </AbsoluteLayout>
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
    onScroll() {
      //access to the native event
      const scrollView = this.$refs.scrollView.nativeView;
      const topView = this.$refs.topView.nativeView;

      // if the offset is less than the height of the header.
      if (scrollView.verticalOffset < 250) {
        const offset = scrollView.verticalOffset / 1.65; // you can adjust this number to make the parallax more subtle or dramatic
        if (scrollView.ios) {
          // iOS adjust the position with an animation to create a smother scrolling effect.
          topView
            .animate({ translate: { x: 0, y: offset } })
            .then(() => {}, () => {});
        } else {
          // Android, animations are jerky so instead just adjust the position without animation.
          topView.translateY = Math.floor(offset);
        }
      }
    },
    setup() {
      this.isPlaying = true;
      this.$refs.main.nativeView.height = "100%";
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
    },
    hide() {
      this.$refs.main.nativeView.height = "10%";
    }
  }
};
</script>
