<template>
  <div
    class="mx-auto d-flex"
    style="
      position: fixed;
      height: 64px;
      background-color: #75a0ea;
      width: 100%;
    "
  >
    <v-row>
      <v-col class="pa-0 ma-0 d-flex justify-center align-center" cols="4">
        <img
          
          style="height: 48px; cursor: pointer;"
          src="https://image.similarpng.com/very-thumbnail/2020/09/Nike-logo-on-transparent-background-PNG.png"
          alt=""
          @click="this.$router.push('/')"
        />
      </v-col>
      <v-col class="pa-0 ma-0 d-flex justify-center align-center" cols="4">
        <v-text-field
          density="compact"
          style="background-color: white"
          variant="outlined"
          color="white"
          width="100%"
          max-width="600"
          hide-details=""
        ></v-text-field
        ><v-btn color="green" style="height: 40px"
          ><v-icon style="font-size: 24px">mdi-magnify</v-icon></v-btn
        >
      </v-col>
      <v-col class="pa-0 ma-0 d-flex justify-center align-center" cols="4">
        <div
          style="width: 100%; max-width: 200px"
          class="d-flex align-center justify-space-around"
        >
        <v-tooltip location="bottom" text="Cart">
            <template v-slot:activator="{ props }">
              <v-icon  @click="this.$router.push('/cart')" style="cursor: pointer;" v-bind="props" color="white">mdi-cart </v-icon>
            </template>
          </v-tooltip>

          <v-tooltip location="bottom" text="Favorite">
            <template v-slot:activator="{ props }">
              <v-icon  @click="this.$router.push('/favorite')" style="cursor: pointer;" v-bind="props" color="white">mdi-heart </v-icon>
            </template>
          </v-tooltip>

          <v-tooltip location="bottom" text="Log in">
            <template v-slot:activator="{ props }">
              <v-icon @click="this.$router.push('/login')" style="cursor: pointer;" v-bind="props" color="white">mdi-account </v-icon>
            </template>
          </v-tooltip>

        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: "Header",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
