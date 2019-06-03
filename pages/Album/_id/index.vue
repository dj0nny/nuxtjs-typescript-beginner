<template>
  <div class="album">
    <Album :id="$route.params.id"></Album>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import Album from '@/components/Album.vue'

@Component({
  components: {
    Album
  }
})
export default class index extends Vue {

}
</script>
