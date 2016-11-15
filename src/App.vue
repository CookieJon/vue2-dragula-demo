<template>
  <section class="examples">
    <nav id="navigation">
      <router-link :to="{ name: 'home'}">Home</router-link>
      <router-link :to="{ name: 'global'}">Global service</router-link>
      <router-link :to="{ name: 'named'}">Named services</router-link>
    </nav>

    <router-view></router-view>
  </section>
</template>
<script>
export default {
}
</script>