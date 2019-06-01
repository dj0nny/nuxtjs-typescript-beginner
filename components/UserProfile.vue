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
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import * as API from '@/api/index'
import { User } from '@/api/models'

@Component
export default class UserProfile extends Vue { 
  @Prop() id?: string
  
  profile: User[] = []

  async created() {
    this.profile = await API.fetchUserById(this.id)
    console.log(this.profile)
  }

}
</script>

<style scoped>
.card {
  margin-left: auto;
  margin-right: auto;
  min-height: 100px;
}
</style>


