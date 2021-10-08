<template>
  <v-app class="main">
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app class="footer">
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {

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

<style scoped>
.bg {
  display: flex !important;
}
</style>
