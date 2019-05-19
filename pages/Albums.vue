<template>
  <section>
    <h1>Albums</h1>
    <Loading v-if="!loading"></Loading>
    <div class="row">
      <div class="col-md-4" v-for="album in albums" :key="album.id">
        <AlbumPreview :album="album"></AlbumPreview>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as API from '@/api'
import { Album } from '@/api/models' 

import Loading from '@/components/Loading.vue'
import AlbumPreview from '@/components/AlbumPreview.vue'


@Component({
  components: {
    Loading,
    AlbumPreview
  }
})
export default class Albums extends Vue {
  albums?: Album[] = []
  loading: boolean = false

  async created() {
    this.albums = await API.fetchAlbums()
    this.loading = true
  }
}
</script>
