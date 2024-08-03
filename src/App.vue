<template>
  <v-app>
    <v-main>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </v-main>
  </v-app>
</template>

<script>
import Header from './Layout/header.vue';
import Footer from './Layout/footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer
  },

  data: () => ({
    //
  }),
}
</script>
