<template>
 <div class="comments">
  <div class="list-group">
    <div class="list-group-item list-group-item-action" v-for="item in postComments" :key="item.id">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ item.name }}</h5>
      </div>
      <p class="mb-1">{{ item.body }}</p>
      <small>{{ item.email }}</small>
    </div>
  </div>
 </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as API from '@/api/index'

import { Comment } from '@/api/models'

@Component
export default class Thread extends Vue {
  @Prop() id?: string

  postComments: Comment[] = []

  async created() {
    this.postComments = await API.fetchPostComments(this.id)
  }
}
</script>

<style scoped>
.comments h5 {
  font-weight: bold;
}
</style>

