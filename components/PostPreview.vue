<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <nuxt-link :to="'/post/' + post.id">View post</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
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
