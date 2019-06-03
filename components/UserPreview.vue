<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ user.username }}</h6>
      <nuxt-link :to="'/profile/' + user.id" class="card-link">View Profile</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { User } from '@/api/models';

@Component
export default class UserPreview extends Vue {
  @Prop() user?: User
}
</script>

<style scoped>
.card {
  max-width: 290px;
  min-height: 100px;
  margin-bottom: 20px;
}

.card-title {
  font-weight: bold;
}
</style>
