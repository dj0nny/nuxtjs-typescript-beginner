<template>
  <header>
    <div class="row">
      <div class="col-md-12">
        <nav>
          <ul class="menu">
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/">Home</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/posts">Posts</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/comments">Comments</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/albums">Albums</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/photos">Photos</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/todos">Todos</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link class="nav-link" to="/users">Users</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue { }
</script>


<style scoped>
header {
    margin: 20px;
    text-align: center;
}

ul.menu {
    padding: 0;
    margin: 0;
}

ul.menu li.menu-item {
    display: inline-block;
}

ul.menu li.menu-item a {
    padding: 0;
    margin-right: 17px;
}

a.nav-link {
    color: #3b8070;
    font-weight: bold;
}

a.nav-link:hover {
  text-decoration: underline;
}
</style>

