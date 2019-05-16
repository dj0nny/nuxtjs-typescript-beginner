<template>
  <section>
    <h1>Posts</h1>
    <div class="row">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <PostPreview :post="post"></PostPreview>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as API from '@/api'
import { Post } from '../api/models';

import PostPreview from '@/components/PostPreview.vue'

@Component({
  components: {
    PostPreview
  }
})
export default class PostsList extends Vue {
  posts: Post[] = []

  async created() {
    this.posts = await API.fetchPosts()
  }

}
</script>