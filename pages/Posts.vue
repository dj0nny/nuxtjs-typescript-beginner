<template>
  <section>
    <h1>Posts</h1>
    <Loading v-if="!loading"></Loading>
    <div class="row" v-if="loading">
      <div class="col-md-4" v-for="post in posts" :key="post.id">
        <PostPreview :post="post"></PostPreview>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import * as API from '@/api'
import { Post } from '@/api/models';

import PostPreview from '@/components/PostPreview.vue'
import Loading from '@/components/Loading.vue'

@Component({
  components: {
    PostPreview,
    Loading
  }
})
export default class Posts extends Vue {
  posts: Post[] = []
  loading: boolean = false

  async created() {
    this.posts = await API.fetchPosts()
    this.loading = true
  }

}
</script>