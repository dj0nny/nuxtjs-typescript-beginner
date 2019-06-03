<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ album.title }}</h5>
      <nuxt-link :to="'/album/' + album.id" class="card-link">View album</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Album } from '@/api/models';

@Component
export default class AlbumPreview extends Vue {
  @Prop() album?: Album
}
</script>

<style scoped>
.card {
    max-width: 290px;
    min-height: 150px;
    margin-bottom: 20px;
}
</style>

