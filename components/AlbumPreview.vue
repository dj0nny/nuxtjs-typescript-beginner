<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ album.title }}</h5>
      <a href="#" class="card-link">View album</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Album } from '@/api/models';

@Component
export default class AlbumPreview extends Vue {
  @Prop() album?: Album
}
</script>
