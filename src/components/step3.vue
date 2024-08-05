<template>
  <v-container>
    <v-card class="pa-4" variant="outlined"></v-card>
    <div>step3</div>
    <div>hereglegchiin medeelel</div>
    <v-list>
      <v-list-item>{{ selectedItem?.name }}</v-list-item>
      <v-list-item>{{ selectedItem?.item }}</v-list-item>
      <v-list-item>{{ selectedItem?.user }}</v-list-item>
    </v-list>
    <div>baraanii medeelel</div>
    <v-row>
      <v-col v-for="product in selectedProducts" cols="4">
        <v-card class="pa-4">
          {{ product }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Three",
    props: {
      selectedProducts: {
        type: Array,
        required: true,
      },
      selectedItem: {
        type: Object,
        required: true,
      },
    },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
