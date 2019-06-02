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
    <div class="col-md-12 posts">
      <h2>{{profile.name}}'s posts</h2>
      <div class="row">
        <div class="col-md-4 post" v-for="item in userPosts" :key="item.id">
          <PostPreview :post="item"></PostPreview>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as API from '@/api/index'
import { User, Post } from '@/api/models'

import PostPreview from '@/components/PostPreview.vue'

@Component({
  components: {
    PostPreview
  }
})
export default class UserProfile extends Vue { 
  @Prop() id?: string
  
  profile: User[] = []
  userPosts: Post[] = []

  async created() {
    this.profile = await API.fetchUserById(this.id)
    this.userPosts = await API.fetchUserPosts(this.id)
    console.log(this.userPosts)
  }

}
</script>

<style scoped>
.card {
  margin-left: auto;
  margin-right: auto;
  min-height: 100px;
}

.posts {
    margin-top: 20px;
}

.posts h2 {
    margin-bottom: 30px;
}
</style>


