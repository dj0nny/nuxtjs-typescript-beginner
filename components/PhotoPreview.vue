<template>
  <div class="media">
    <img :src="photo.thumbnail" class="mr-3" :alt="photo.alt">
    <div class="media-body">
      {{ photo.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Photo } from '@/api/models';

@Component
export default class PhotoPreview extends Vue {
  @Prop() photo?: Photo
}
</script>


