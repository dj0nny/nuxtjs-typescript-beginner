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
    <div class="col-md-12 todos">
      <h2>{{profile.name}}'s todos</h2>
      <ul class="list-group">
        <TodoPreview v-for="item2 in userTods" :key="item2.id" :todo="item2"></TodoPreview>
      </ul>
    </div>
    <div class="col-md-12 albums">
      <h2>{{profile.name}}'s albums</h2>
      <div class="row">
        <div class="col-md-4 album" v-for="item3 in userAlbums" :key="item3.id">
          <AlbumPreview :album="item3"></AlbumPreview>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as API from '@/api/index'
import { User, Post, Todo, Album } from '@/api/models'

import PostPreview from '@/components/PostPreview.vue'
import TodoPreview from '@/components/TodoPreview.vue'
import AlbumPreview from '@/components/AlbumPreview.vue'

@Component({
  components: {
    PostPreview,
    TodoPreview,
    AlbumPreview
  }
})
export default class UserProfile extends Vue { 
  @Prop() id?: string
  
  profile: User[] = []
  userPosts: Post[] = []
  userTods: Todo[] = []
  userAlbums: Album[] = []

  async created() {
    this.profile = await API.fetchUserById(this.id)
    this.userPosts = await API.fetchUserPosts(this.id)
    this.userTods = await API.fetchUserTodos(this.id)
    this.userAlbums = await API.fetchUserAlbums(this.id)    
  }

}
</script>

<style scoped>
.card {
  margin-left: auto;
  margin-right: auto;
  min-height: 100px;
}

.posts, .todos, .albums {
    margin-top: 20px;
}

.posts h2, .todos h2, .albums h2 {
    margin-bottom: 30px;
}
</style>


