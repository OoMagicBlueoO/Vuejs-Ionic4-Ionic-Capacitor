<template>
<ion-app>
  <ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
    <ion-title>3 My Navigation Bar 3</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <img :src="photo" >

  <ion-fab vertical="bottom" horizontal="center" slot="fixed">
    <ion-fab-button @click="takePicture">
      <ion-icon name="camera"></ion-icon>
    </ion-fab-button>
  </ion-fab>
</ion-content>

</ion-app>
</template>

<script>

import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';

export default {
  name: 'App',
  data () {
    return {
      photo: null,
      data: null,
      items: [{id: 0, name:'Ahmed'},{id:1, name: 'Naima'}]
    }
  },  
  methods: {
    async takePicture() {
      const image = await Plugins.Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      console.log("image", image);
      this.photo = image.dataUrl;
      // this.photo = DomSanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    },
    presentLoading() {
      this.data=null;
      // return this.$ionic.loadingController
      //   .create({
      //     message: 'Loading',
      //     duration: 5000,
      //   })
      //   .then(l => {
          
          setTimeout(() => {
            this.data = {
              'heading': 'Normal text',
              'para1': 'Lorem ipsum dolor sit amet, consectetur',
              'para2': 'adipiscing elit.'
            };
          }, 5000);
          
          // return l.present()
        // })
    },
  },
  mounted() {
    this.presentLoading();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
