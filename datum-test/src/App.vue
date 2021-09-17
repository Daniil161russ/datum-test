<template>
  <div id="app">
    <Header />
    <main class="main">
      <router-view/>
    </main> 
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    Header: () => import("@/components/molecules/Header")
  },
}
</script>

