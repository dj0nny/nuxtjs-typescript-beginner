<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
      <p class="card-text">{{ user.email }}</p>
      <p class="card-text">{{ user.phone }}</p>
      <p class="card-text">{{ user.website }}</p>
      <a href="#" class="card-link">View Profile</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { User } from '@/api/models';

@Component
export default class CommentPreview extends Vue {
  @Prop() user?: User
}
</script>

<style>
.card {
  max-width: 290px;
  min-height: 200px;
  margin-bottom: 20px;
}

.card-title {
  font-weight: bold;
}
</style>
