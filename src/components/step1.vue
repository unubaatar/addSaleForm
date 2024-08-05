<template>
  <v-container>
    <v-card class="pa-4" variant="outlined">
        <!-- <div>{{ selectedItem }}</div> -->
      <div>step1</div>
      <v-btn-toggle v-model="defaultValue1">
        <v-btn @click="updateSelectedItem('name', item)" color="red" v-for="item in data"> {{ item }}</v-btn>
      </v-btn-toggle>
      <br />
      <v-btn-toggle v-model="defaultValue2"
        ><v-btn @click="updateSelectedItem('user', item)" color="red" v-for="item in data"> {{ item }}</v-btn>
      </v-btn-toggle>
      <br />
      <v-btn-toggle v-model="defaultValue3"
        ><v-btn @click="updateSelectedItem('item', item)" color="red" v-for="item in data">
          {{ item }}</v-btn
        ></v-btn-toggle
      >
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "One",
  data() {
    return {
      defaultValue1: 0,
      defaultValue2: 0,
      defaultValue3: 0,
      selectedItem: {
        name: "",
        user: "",
        item: "",
      },
      selectedItems: [],
      data: ["1", "2", "3"],
    };
  },
  methods: {
    updateSelectedItem(key, item) {
      this.selectedItem[key] = item;
      this.$emit('update:selectedItem', this.selectedItem);
    }
  },
  mounted() {},
};
</script>
