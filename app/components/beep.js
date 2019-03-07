const audio = require("nativescript-audioplay");

export function beep() {
  const sound =
    "https://notificationsounds.com/soundfiles/1728efbda81692282ba642aafd57be3a/file-sounds-1101-plucky.mp3";

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
