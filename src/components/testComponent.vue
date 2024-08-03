<template>
    <v-container
      class="d-flex justify-center align-center"
      style="height: 100%; width: 100%"
    >
      <v-row>
        <v-col cols="3">
          <v-row>
            <v-col cols="8" class="px-0" align="end">
              <div style="font-size: 16px; height: 96px">
                <p>Step1</p>
                <strong>Customer</strong>
                <div>Choose customer</div>
              </div>
              <div style="font-size: 16px; height: 96px">
                <p>Step2</p>
                <strong>Product</strong>
                <div>Choose Product</div>
              </div>
              <div style="font-size: 16px; height: 96px">
                <p>Step1</p>
                <strong>Preview</strong>
                <div>Choose Preview</div>
              </div>
              <div style="font-size: 16pxs; height: 96px">
                <p>Step1</p>
                <strong>Add</strong>
                <div>Choose Add</div>
              </div>
            </v-col>
            <v-col cols="4">
              <div
                :class="showCostumer ? 'selectedWizardItem' : 'wizardItem'"
                class="mx-auto pt-3"
              >
                1
              </div>
              <div class="wizardLine mx-auto"></div>
              <div
                :class="showProduct ? 'selectedWizardItem' : 'wizardItem'"
                class="wizardItem mx-auto pt-3"
              >
                2
              </div>
              <div class="wizardLine mx-auto"></div>
              <div
                :class="showPreview ? 'selectedWizardItem' : 'wizardItem'"
                class="wizardItem mx-auto pt-3"
              >
                3
              </div>
              <div class="wizardLine mx-auto"></div>
              <div
                :class="showAdd ? 'selectedWizardItem' : 'wizardItem'"
                class="wizardItem mx-auto pt-3"
              >
                4
              </div>
            </v-col>
          </v-row>
          <v-row class="d-flex justify-end pa-0">
            <div>
              <v-btn
                v-if="!showCostumer"
                @click="backStep"
                class="mr-4"
                color="blue"
                prepend-icon="mdi-arrow-left"
                >Back</v-btn
              >
              <v-btn
                v-if="!showAdd"
                @click="goToNextStep"
                color="blue"
                append-icon="mdi-arrow-right"
                >Next step</v-btn
              >
            </div>
          </v-row>
        </v-col>
  
        <v-col cols="9">
          <v-container style="width: 100%; max-width: 720px" v-if="showCostumer">
            <strong class="mt-4">Channel</strong>
            <hr class="mt-2" />
            <div class="my-2" style="width: 100%">
              <v-btn-toggle
                mandatory
                style="height: auto"
                selected-class="selectedClass"
              >
                <v-btn
                  @click="
                    selectedChannel = item;
                    selectedPriceGroup = '';
                    selectedCustomer = '';
                    selectedIndex1 = -1;
                  "
                  class="channel"
                  v-for="item in channels"
                >
                  {{ item }}
                </v-btn>
              </v-btn-toggle>
            </div>
  
            <strong v-if="selectedChannel != ''" class="mt-4">Price group</strong>
            <hr v-if="selectedChannel != ''" class="mt-2" />
            <div v-if="selectedChannel != ''" class="my-2" style="width: 100%">
              <v-btn-toggle
                mandatory
                v-model="selectedIndex1"
                style="height: auto"
                selected-class="selectedClass"
              >
                <v-btn
                  @click="
                    selectedPriceGroup = item;
                    selectedCustomer = '';
                  "
                  class="channel"
                  v-for="item in priceGroups"
                >
                  {{ item }}
                </v-btn>
              </v-btn-toggle>
            </div>
  
            <strong v-if="selectedPriceGroup != ''" class="mt-4">Customer</strong>
            <hr v-if="selectedPriceGroup != ''" class="mt-2" />
            <div v-if="selectedPriceGroup != ''" class="my-2" style="width: 100%">
              <v-btn-toggle
                mandatory
                style="height: auto"
                selected-class="selectedClass"
              >
                <v-btn
                  @click="selectedCustomer = item"
                  class="channel"
                  v-for="item in customers"
                >
                  {{ item }}
                </v-btn>
              </v-btn-toggle>
            </div>
  
            <div
              style="font-weight: bold"
              v-if="
                selectedChannel != '' &&
                selectedCustomer != '' &&
                selectedPriceGroup != ''
              "
              class="text-center mt-8"
            >
              Дэлгэрэнгүй мэдээлэл
            </div>
            <hr
              v-if="
                selectedChannel != '' &&
                selectedCustomer != '' &&
                selectedPriceGroup != ''
              "
              class="mt-2"
            />
  
            <div
              class="d-flex justify-space-between mt-4"
              v-if="
                selectedChannel != '' &&
                selectedCustomer != '' &&
                selectedPriceGroup != ''
              "
            >
              <div>
                Channel:
                <span style="font-weight: bold; font-size: 16px">{{
                  selectedChannel
                }}</span>
              </div>
              <div>
                Price Group:
                <span style="font-weight: bold; font-size: 16px">{{
                  selectedPriceGroup
                }}</span>
              </div>
              <div>
                Customer:
                <span style="font-weight: bold; font-size: 16px">{{
                  selectedCustomer
                }}</span>
              </div>
            </div>
          </v-container>
  
          <v-container style="width: 100%; max-width: 720px" v-if="showProduct">
            <strong>Бүтээгдхүүний төрлөө сонгоно уу</strong>
            <hr class="mt-2" />
            <div class="d-flex mt-4">
              <v-select
                v-model="currentProduct"
                density="compact"
                :items="products"
                item-title="name"
                hide-details
                variant="outlined"
              ></v-select>
              <v-btn
                :disabled="currentProduct === ''"
                @click="addItem()"
                style="height: 42px"
                color="blue"
                elevation="0"
                variant="flat"
                >Add</v-btn
              >
            </div>
            <div
              style="font-weight: bold"
              class="pt-4"
              v-if="selectedProducts.length > 0"
            >
              Таны сонгосон бүтээгдхүүнүүд
            </div>
            <hr v-if="selectedProducts.length > 0" class="mt-2 mb-4" />
            <v-card
              class="d-flex mt-2 pa-2 justify-space-between"
              variant="tonal"
              v-for="product in selectedProducts"
            >
              <div class="d-flex">
                <div>
                  name: <span style="font-weight: bold">{{ product.name }}</span>
                </div>
                <div class="ml-8">
                  price:
                  <span style="font-weight: bold"> {{ product.price }}</span>
                </div>
              </div>
              <v-btn
                @click="removeItem(product)"
                style="width: 48px"
                density="compact"
                variant="flat"
                color="red"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card>
          </v-container>
          <v-container style="width: 100%; max-width: 720px" v-if="showPreview">
            <div
            style="font-weight: bold"
            v-if="
              selectedChannel != '' &&
              selectedCustomer != '' &&
              selectedPriceGroup != ''
            "
            class="text-center mt-8"
          >
            Дэлгэрэнгүй мэдээлэл
          </div>
          <hr
            v-if="
              selectedChannel != '' &&
              selectedCustomer != '' &&
              selectedPriceGroup != ''
            "
            class="mt-2"
          />
  
          <div
            class="d-flex justify-space-between mt-4"
            v-if="
              selectedChannel != '' &&
              selectedCustomer != '' &&
              selectedPriceGroup != ''
            "
          >
            <div>
              Channel:
              <span style="font-weight: bold; font-size: 16px">{{
                selectedChannel
              }}</span>
            </div>
            <div>
              Price Group:
              <span style="font-weight: bold; font-size: 16px">{{
                selectedPriceGroup
              }}</span>
            </div>
            <div>
              Customer:
              <span style="font-weight: bold; font-size: 16px">{{
                selectedCustomer
              }}</span>
            </div>
          </div>
            <div class="mt-8 text-center" style="font-weight: bold;">Таны сонгосон бүтээгдхүүнүүд</div>
            <hr class="mt-2" />
  
            <v-row class="mt-4">
              <v-col cols="4" v-for="product in selectedProducts">
                <v-card variant="outlined" class="pa-4">
                  <img
                    style="width: 100%; object-fit: contain"
                    src="https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
                    alt=""
                  />
                  <div
                    class="px-4"
                    style="color: blue; font-weight: bold; font-size: 18px"
                  >
                    {{ product.name }}
                  </div>
  
                  <div class="px-4">
                    Үнэ: <span> {{ product.price }} </span>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
          <v-container
            v-if="showAdd"
            style="width: 100%; height: 100%; max-width: 720px"
          >
            <div
              style="width: 100%; height: 100%"
              class="d-flex align-center; justify-center"
            >
              <v-card
                variant="outlined"
                height="180"
                width="400"
                class="my-auto pa-4"
              >
                <div style="font-size: 22px" class="text-center">
                  Та захиалга нэмэхдээ итгэлтэй байна уу?
                </div>
                <div class="mt-6 d-flex justify-space-around">
                  <v-btn variant="flat" color="red">Үгүй</v-btn>
                  <v-btn variant="flat" color="green">Тийм</v-btn>
                </div>
              </v-card>
            </div>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "HelloWorld",
    data() {
      return {
        selectedIndex1: -1,
        selectedIndex1: -1,
        showCostumer: true,
        showProduct: false,
        showPreview: false,
        showAdd: false,
        currentProduct: "",
        selectedChannel: "",
        selectedPriceGroup: "",
        selectedCustomer: "",
        channels: ["Boom", "Topsale", "Pagepro", "Smartmotors", "Xiaomi"],
        priceGroups: ["Group1", "Group2", "Group3", "Group4", "Group5"],
        customers: ["Uunuu", "Duk", "Khusle", "Andka lalar", "Mumu sda"],
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
        selectedProducts: [],
      };
    },
    methods: {
      addItem() {
        const selectedProduct = this.products.filter(
          (product) => product.name === this.currentProduct
        );
        this.selectedProducts.push(selectedProduct[0]);
        this.currentProduct = "";
      },
      removeItem(product) {
        this.selectedProducts = this.selectedProducts.filter(
          (item) => item.name != product.name
        );
        console.log(this.selectedProducts);
      },
      goToNextStep() {
        if (this.showCostumer == true) {
          console.log("qwer");
          this.showProduct = true;
          this.showCostumer = false;
        } else if (this.showProduct) {
          this.showPreview = true;
          this.showProduct = false;
        } else if (this.showPreview) {
          this.showAdd = true;
          this.showPreview = false;
        }
      },
      backStep() {
        console.log("clicked back");
        if (this.showAdd) {
          this.showAdd = false;
          this.showPreview = true;
        } else if (this.showPreview) {
          this.showPreview = false;
          this.showProduct = true;
        } else if (this.showProduct) {
          this.showCostumer = true;
          this.showProduct = false;
        }
      },
    },
    mounted() {},
  };
  </script>
  
  <style scoped>
  .selectedWizardItem {
    text-align: center;
    border: 2px solid blue !important;
    background-color: blue;
    color: white !important;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  
  .wizardItem {
    text-align: center;
    border: 2px solid gray;
    color: black;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
  
  .wizardLine {
    width: 2px;
    height: 48px;
    background-color: gray;
  }
  
  .channel {
    height: 32px !important;
    margin-right: 16px;
    border-radius: 16px !important;
    border: 2px solid blue !important;
  }
  
  .selectedClass {
    background-color: blue !important;
    color: white !important;
  }
  </style>
  