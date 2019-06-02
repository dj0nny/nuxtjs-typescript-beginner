<template>
  <div class="row">
    <div class="col-md-4 photo" v-for="item in albumPhotos" :key="item.id">
      <PhotoPreview :photo="item"></PhotoPreview>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as API from '@/api/index'
import { Photo } from '@/api/models'

import PhotoPreview from '@/components/PhotoPreview.vue'

@Component({
  components: {
    PhotoPreview
  }
})
export default class Album extends Vue {
  @Prop() id?: string

  albumPhotos: Photo[] = []

  async created() {
    this.albumPhotos = await API.fetchAlbumPhotos(this.id)
  }
}
</script>
