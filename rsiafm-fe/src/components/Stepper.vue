<template>
  <div>
    <v-stepper non-linear>
      <v-stepper-header>
        <v-stepper-step
            editable
            step="1"
        >
          Enter your student card!
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            editable
            step="2"
        >
          Take a picture!
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            step="3"
            editable
        >
          Processing...
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <Camera/>
  </div>
</template>

<script>
import Camera from './Camera'
export default {
  component: {
    Camera,
  },
}
</script>

<style scoped>

</style>