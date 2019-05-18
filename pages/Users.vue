<template>
    <section>
      <h1>Users</h1>
      <Loading v-if="!loading"></Loading>
      <div class="row" v-if="loading">
      <div class="col-md-4" v-for="user in users" :key="user.id">
        <UserPreview :user="user"></UserPreview>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import * as API from '@/api'
import { User } from '@/api/models'

import UserPreview from '@/components/UserPreview.vue'
import Loading from '@/components/Loading.vue'

@Component({
  components: {
    UserPreview,
    Loading
  }
})
export default class UsersList extends Vue {
  users: User[] = []
  loading: boolean = false

  async created() {
    this.users = await API.fetchUsers()
    this.loading = true
  }
}

</script>
