<template>
  <div>
    <div class="col-md-12">
      <Logo></Logo>
      <h1 class="title">
        nuxtjs-typescript-beginner
      </h1>
      <h2 class="subtitle">
        A NuxtJS + Typescript app for beginners
      </h2>
      <div class="links">
        <!-- <nuxt-link to="#" target="_blank" class="button--green">Start</nuxt-link> -->
        <a href="https://github.com/dj0nny/nuxtjs-typescript-beginner" target="_blank" class="button--grey" >GitHub repository</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import Logo from '@/components/Logo.vue'

@Component({
  components: {
    Logo
  }
})
export default class index extends Vue {
  head() {
    return {
      title: 'NuxtJS + Typescript app for beginners'
    }
  }
}

</script>


<style>
.title {
  margin: 20px
}

.subtitle {
  font-size: 20px;
  margin-bottom: 20px;
}

.links {
  margin-top: 50px;
}

</style>
