const audio = require("nativescript-audioplay");

export function beep() {
  const sound =
    "https://notificationsounds.com/soundfiles/4e4b5fbbbb602b6d35bea8460aa8f8e5/file-sounds-1096-light.mp3";

  let player = new audio.TNSPlayer();
  let playerOptions = {
    audioFile: sound,
    loop: false,
    completeCallback: function() {
      console.log("finished playing");
    },
    errorCallback: function(errorObject) {
      console.log(JSON.stringify(errorObject));
    },
    infoCallback: function(args) {
      console.log(JSON.stringify(args));
    }
  };

  player
    .playFromUrl(playerOptions)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log("something went wrong...", err);
    });
}
