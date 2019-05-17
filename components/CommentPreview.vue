<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ comment.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
      <p class="card-text">{{ comment.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { Comment } from '../api/models';

@Component
export default class CommentPreview extends Vue {
  @Prop() comment?: Comment
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
