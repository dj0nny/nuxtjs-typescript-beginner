<template>
  <section>
    <h1>Photos</h1>
    <Loading v-if="!loading"></Loading>
    <div class="row" v-if="loading">
      <div class="col-md-4" v-for="photo in photos" :key="photo.id">
        <PhotoPreview :photo="photo"></PhotoPreview>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as API from '@/api'
import { Photo } from '@/api/models';

import Loading from '@/components/Loading.vue'
import PhotoPreview from '@/components/PhotoPreview.vue'


@Component({
  components: {
    Loading,
    PhotoPreview
  }
})
export default class Photos extends Vue {
  photos?: Photo[] = []
  loading: boolean = false

  async created() {
    this.photos = await API.fetchPhotos()
    this.loading = true
  }
}
</script>
