<template>
  <div class="d-flex justify-center">
    <v-card
      rounded="lg"
      variant="outlined"
      class="pa-8 ma-4 mb-12"
      style="width: 100%; max-width: 1440px; border: 2px solid #75a0ea"
    >
      <v-row>
        <img
          style="height: 48px"
          src="https://image.similarpng.com/very-thumbnail/2020/09/Nike-logo-on-transparent-background-PNG.png"
          alt=""
      /></v-row>
      <v-row>
        <v-col cols="6" class="d-flex flex-column justify-space-between">
          <v-row>
            <v-col cols="6">
              <p class="my-2">Үйлчилгээний нөхцөл</p>
              <p class="my-2">Бидний тухай</p>
              <p class="my-2">Захиалга хийх заавар</p>
            </v-col>
            <v-col cols="6">
                <p class="my-2">Түгээмэл асуултууд</p>
                <p class="my-2">Нууцлалын бодлого</p>
              </v-col></v-row
          >
          <div class="d-flex justify-center align-center flex-column" > <div>Зохиогчийн эрх хуулиар хамгаалагдсан </div><div class="mt-2">2024 он</div></div>
        </v-col>
        <v-col cols="6">
          <p
            class="mb-4"
            style="font-size: 20px; font-weight: bold; color: #75a0ea"
          >
            Холбоо барих
          </p>
          <v-text-field
            hide-details
            class="mb-4"
            label="Name"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            hide-details
            class="mb-4"
            label="Phone number"
            variant="outlined"
          >
          </v-text-field>
          <v-text-field
            hide-details
            class="mb-4"
            label="Email"
            variant="outlined"
          ></v-text-field>
          <v-text-field
            hide-details
            class="mb-4"
            label="Feedback"
            variant="outlined"
          ></v-text-field>
          <v-btn
            style="height: 48px; width: 144px"
            append-icon="mdi-send"
            color="#75a0ea"
            >Send</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
