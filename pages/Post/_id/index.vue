<template>
  <div>
    <Thread :id="$route.params.id"></Thread>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Thread from '@/components/Thread.vue'

@Component({
  components: {
    Thread
  }
})
export default class index extends Vue {

}
</script>
