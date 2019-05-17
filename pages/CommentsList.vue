<template>
  <section>
    <h1>Comments</h1>
    <Loading v-if="!loading"></Loading>
    <div class="row">
      <div class="col-md-4" v-for="comment in comments" :key="comment.id">
        <CommentPreview :comment="comment"></CommentPreview>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as API from '@/api'
import { Comment } from '../api/models';

import CommentPreview from '@/components/CommentPreview.vue'
import Loading from '@/components/Loading.vue'


@Component({
  components: {
    CommentPreview,
    Loading
  }
})
export default class CommentsList extends Vue {
  comments: Comment[] = []
  loading: boolean = false

  async created() {
    this.comments = await API.fetchComments()
    this.loading = true
  }

}
</script>