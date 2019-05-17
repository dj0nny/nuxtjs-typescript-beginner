<template>
    <section>
    <h1>Users</h1>
    <div class="row">
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

@Component({
  components: {
    UserPreview
  }
})
export default class UsersList extends Vue {
  users: User[] = []

  async created() {
    this.users = await API.fetchUsers()
  }
}

</script>
