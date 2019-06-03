<template>
  <div class="profile">
    <UserProfile :id="$route.params.id"></UserProfile>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import UserProfile from '@/components/UserProfile.vue'

@Component({
  components: {
    UserProfile
  }
})
export default class index extends Vue { }
</script>

<style scoped>
.profile {
    margin-top: 50px;
}
</style>


