<template>
  <section class="examples" v-md-theme="'default'">
    <nav id="navigation">
      <md-toolbar class="md-medium">
        <div class="md-toolbar-container">
          <md-button class="md-icon-button">
            <router-link :to="{ name: 'home'}">
              <md-tooltip md-direction="top">Home</md-tooltip>
              <md-icon>menu</md-icon>
            </router-link>
          </md-button>

          <h2 class="md-title" style="flex: 1;">Vue Dragula service examples</h2>

          <md-button class="md-icon-button">
            <router-link :to="{ name: 'global'}">
              <md-tooltip md-direction="top">Global service</md-tooltip>
              <md-icon>search</md-icon>
            </router-link>
          </md-button>

          <md-button class="md-icon-button">
            <router-link :to="{ name: 'named'}">
              <md-tooltip md-direction="top">Named services</md-tooltip>
              <md-icon>filter_list</md-icon>
            </router-link>
          </md-button>
        </div>
      </md-toolbar>
    </nav>

    <router-view></router-view>
  </section>
</template>
<script>
export default {
}
</script>