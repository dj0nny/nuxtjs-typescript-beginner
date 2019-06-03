<template>
  <div class="spinner-border text-success" role="status">
    <span class="sr-only">Loading...</span>
  </div>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class Loading extends Vue { }

</script>
