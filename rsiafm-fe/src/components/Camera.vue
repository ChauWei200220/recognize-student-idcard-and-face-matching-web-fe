<template>
    <div class="camera">
        <video autoplay class="feed"></video>
        <button v-on:click="$emit('takePicture')">Click</button>
    </div>
</template>

<script>
export default {
    name: "camera",
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
        }
    },

    beforeMount () {
        this.init();
    }
}
</script>

<style scoped>
.camera {
    width: 700px;

    padding: 25px;
    box-sizing: border-box;
}

.feed {
        display: block;
        width: 100%;
        max-width:  1280px;
        margin: 0 auto;
        background-color: #171717;
        box-shadow: 6px 6px 12px 0px rgba(0, 0, 0, 0.35);
    }

</style>
