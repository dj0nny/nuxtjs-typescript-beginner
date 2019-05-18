<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Post } from '@/api/models';

@Component
export default class PostPreview extends Vue {
  @Prop() post?: Post
}
</script>

<style>
.card {
  max-width: 290px;
  min-height: 320px;
  margin-bottom: 20px;
}

.card-title {
  font-weight: bold;
}
</style>
