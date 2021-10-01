<template>
  <div id="app">
    <Camera v-on:takePicture="this.takePicture"/>
    <Picture/>
  </div>
</template>

<script>

import Camera from './components/Camera.vue'
import Picture from './components/Picture.vue'

export default {
  name: 'App',
  components: {
    Camera,
    Picture
  },

  methods: {
    takePicture () {
      let ratio = (window.innerHeight < window.innerWidth) ? 16 / 7 : 7 / 16;
      const picture = document.querySelector("canvas");
      picture.width = (window.innerWidth < 690) ? window.innerWidth : 690;
      picture.height = window.innerWidth / ratio;
      const ctx = picture.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(document.querySelector("video"), 0, 0, picture.width, picture.height);
    }
  }
}
</script>

<style>

</style>
