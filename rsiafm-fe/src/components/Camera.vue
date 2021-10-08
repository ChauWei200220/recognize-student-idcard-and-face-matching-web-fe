<template>
  <div class="bg">
    <div class="camera">
      <div class="pic">
        <video autoplay class="feed"></video>
        <v-btn
            class="ma-2"
            outlined
            large
            fab
            color="indigo"
            @click="takePicture()"
        >
          <v-icon>mdi-camera</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="picture">
      <canvas/>
      <v-btn
          v-if="capturedImg"
          class="ml-4"
          color="secondary"
      >Next step</v-btn>
    </div>

  </div>
</template>

<script>

export default {
    name: "camera",
    data () {
      return {
        capturedImg: false,
      }
    },
    methods: {
      init () {
          if('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
              navigator.mediaDevices.getUserMedia({video: true}).then(stream => {
                  const videoPlayer = document.querySelector("video");
                  videoPlayer.srcObject = stream;
                  videoPlayer.play();
              });
          } else {
              alert("Cannot get media devices");
          }
      },

      takePicture () {
        let ratio = (window.innerHeight < window.innerWidth) ? 8.25 / 2 : 2 / 8.25;
        const picture = document.querySelector("canvas");
        picture.width = (window.innerWidth < 410) ? window.innerWidth : 410;
        picture.height = window.innerWidth / ratio;
        const ctx = picture.getContext("2d");
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(document.querySelector("video"), 0, 0, picture.width, picture.height);
        this.capturedImg = true;
      }
    },

    beforeMount () {
        this.init();
    }
}
</script>

<style scoped>
.bg {
  display: flex !important;
  flex-direction: row !important;
  text-align: center;
}

.camera {
  display: block !important;
  width: 500px;
  padding: 25px;
  box-sizing: border-box;
  margin: 60px;
  text-align: center;
}

.picture {
  margin-top: 100px;
  margin-left: 60px;
  width: 100px;
  height: 100px;
}

.feed {
  display: block;
  width: 100%;
  max-width:  690px;
  margin: 0 auto;
  background-color: #171717;
  box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);
}

</style>
