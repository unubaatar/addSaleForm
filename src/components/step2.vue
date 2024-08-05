<template>
  <v-container>
    <v-card class="pa-4" variant="outlined">
      <v-select
        v-model="currentProduct"
        :items="products"
        item-title="name"
        variant="outlined"
        density="compact"
      ></v-select>
      <v-btn  :disabled="currentProduct === ''" @click="addItem()">add</v-btn>
      {{ selectedProducts }}
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Two",
  data() {
    return {
      currentProduct: "",
      selectedProducts: [],
      products: [
        {
          name: "Apple",
          category: "Fruit",
          price: 1.2,
          id: 1,
        },
        {
          name: "Banana",
          category: "Fruit",
          price: 0.5,
          id: 2,
        },
        {
          name: "Orange",
          category: "Fruit",
          price: 0.8,
          id: 3,
        },
        {
          name: "Pineapple",
          category: "Fruit",
          price: 3.0,
          id: 4,
        },
        {
          name: "Strawberry",
          category: "Fruit",
          price: 2.5,
          id: 5,
        },
        {
          name: "Carrot",
          category: "Vegetable",
          price: 0.3,
          id: 6,
        },
        {
          name: "Broccoli",
          category: "Vegetable",
          price: 1.0,
          id: 7,
        },
        {
          name: "Potato",
          category: "Vegetable",
          price: 0.4,
          id: 8,
        },
      ],
    };
  },
  methods: {
    addItem() {
        const selectedProduct = this.products.filter(
          (product) => product.name === this.currentProduct
        );
        this.selectedProducts.push(selectedProduct[0]);
        this.currentProduct = "";
        this.$emit("addItem" , this.selectedProducts);
      },
  },
  mounted() {},
};
</script>
