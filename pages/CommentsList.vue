<template>
  <section>
    <h1>Comments</h1>
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

@Component({
  components: {
    CommentPreview
  }
})
export default class CommentsList extends Vue {
  comments: Comment[] = []

  async created() {
    this.comments = await API.fetchComments()
  }

}
</script>