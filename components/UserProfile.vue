<template>
  <div class="row">
    <div class="col-md-6">
      <h2>{{ profile.name }}</h2>
      <h4>{{ profile.username }}</h4>
      <h6>{{ profile.email }}</h6>
    </div>
    <div class="col-md-6">
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>Telephone: </strong>{{ profile.phone }}</li>
          <li class="list-group-item"><strong>Website: </strong>{{ profile.website }}</li>
        </ul>
      </div>
    </div>
    <div class="col-md-12 comments">
      <h2>{{profile.name}}'s comments</h2>
      <div class="row">
        <div class="col-md-4 comment" v-for="item in userComments" :key="item.id">
          <CommentPreview :comment="item"></CommentPreview>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as API from '@/api/index'
import { User, Comment } from '@/api/models'

import CommentPreview from '@/components/CommentPreview.vue'

@Component({
  components: {
    CommentPreview
  }
})
export default class UserProfile extends Vue { 
  @Prop() id?: string
  
  profile: User[] = []
  userComments: Comment[] = []

  async created() {
    this.profile = await API.fetchUserById(this.id)
    this.userComments = await API.fetchUserComments(this.id)
  }

}
</script>

<style scoped>
.card {
  margin-left: auto;
  margin-right: auto;
  min-height: 100px;
}

.comments {
    margin-top: 20px;
}

.comments h2 {
    margin-bottom: 30px;
}
</style>


