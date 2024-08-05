<template>
  <v-container class="mt-16">
    <v-btn class="mr-2" v-if="!select1" @click="backStep()">back sda </v-btn>

    {{ selectedItem }}
    {{ selectedProducts }}

    <v-btn v-if="!select4" @click="moveStep()" class="ml-2">click sda </v-btn>
    <Step1 @update:selectedItem="getDataFromStep1"  v-if="select1">1</Step1>
    <Step2 @addItem="getDataFromStep2" v-if="select2">2</Step2>
    <Step3 :selectedProducts="selectedProducts" :selectedItem="selectedItem" v-if="select3">3</Step3>
    <Step4 v-if="select4">4</Step4>
  </v-container>
</template>

<script>
import Step1 from "@/components/step1.vue";
import Step2 from "@/components/step2.vue";
import Step3 from "@/components/step3.vue";
import Step4 from "@/components/step4.vue";
export default {
  components: { Step1, Step2, Step3, Step4 },
  data() {
    return {
      select1: true,
      select2: false,
      select3: false,
      select4: false,
      selectedItem: {
        name: "",
        user: "",
        item: "",
      },
      selectedProducts: []
    };
  },
  methods: {
    getDataFromStep1(selectedItem) {
        this.selectedItem = selectedItem;
    },
    getDataFromStep2(selectedProducts) {
        this.selectedProducts = selectedProducts;
    },
    moveStep() {
      if (this.select1) {
        this.select1 = false;
        this.select2 = true;
      } else if (this.select2) {
        this.select2 = false;
        this.select3 = true;
      } else if (this.select3) {
        this.select3 = false;
        this.select4 = true;
      }
    },
    backStep() {
      if (this.select4) {
        this.select4 = false;
        this.select3 = true;
      } else if (this.select3) {
        this.select3 = false;
        this.select2 = true;
      } else if (this.select2) {
        this.select2 = false;
        this.select1 = true;
      }
    },
  },
  mounted() {},
};
</script>
