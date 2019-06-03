<template>
  <li class="list-group-item">
    <span :class="{ completed : todo.completed }">
      {{ todo.title }}
    </span>
  </li>
</template>


<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Todo } from '@/api/models';

@Component
export default class TodoPreview extends Vue {
  @Prop() todo?: Todo
}
</script>

<style scoped>

.completed {
  text-decoration: line-through
}

</style>
