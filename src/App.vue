<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './views/Home.vue'
import testComponent from './components/testComponent.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    testComponent
  },

  data: () => ({
    //
  }),
}
</script>
