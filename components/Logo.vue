<template>
  <div class="VueToNuxtLogo">
    <img src="https://cdn-images-1.medium.com/max/2600/1*Pfa4uR2nDfhvjXeg6B5hrg.png">
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Logo extends Vue { }
</script>

<style scoped>
.VueToNuxtLogo {
  margin-top: 30px;
  margin-bottom: 30px;
}

img {
  width: 50%
}
</style>

