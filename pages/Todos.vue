<template>
  <section>
    <h1>Todos</h1>
    <Loading v-if="!loading"></Loading>
    <div class="row" v-if="loading">
      <div class="col-md-12">
        <ul class="list-group">
          <TodoPreview v-for="todo in todos" :key="todo.id" :todo="todo"></TodoPreview>
        </ul>
      </div>
    </div>
  </section>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Todo } from '@/api/models'
import * as API from '@/api'

import Loading from '@/components/Loading.vue'
import TodoPreview from '@/components/TodoPreview.vue'

@Component({
  components: {
    Loading,
    TodoPreview
  }
})
export default class Todos extends Vue {
  todos?: Todo[] = []
  loading: boolean = false

  async created() {
    this.todos = await API.fetchTodos()
    this.loading = true
  }

    head() {
    return {
      title: 'Todos | NuxtJS + Typescript'
    }
  }

}
</script>
