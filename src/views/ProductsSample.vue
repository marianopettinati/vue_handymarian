COSAS A VER: - Responsiveness

<template>
  <div>
    <Header />
  </div>
  <h2>Wood</h2>
  <div class="products">
    <div
      class="product"
      v-for="(product, index) in products"
      :key="product.id"
      @click="openProductDetails(index)"
    >
      <img class="bottom" :src="product.fotoPortadaAlt" :alt="product.name" />
      <img class="top" :src="product.fotoPortada" :alt="product.name" />
      <!-- <img
        :src="product.mouseOver ? product.fotoPortadaAlt : product.fotoPortada"
        :alt="product.name"
      /> -->
      <div class="articulo">
        <h3>{{ product.nombre }}</h3>
        <p>{{ product.descripcion }}</p>
      </div>
    </div>
    <ProductDetail v-if="showProductDetails" @close="closeProductDetails">
      <template v-slot>
        <h1>{{ selectedProduct.nombre }}</h1>
        <p>{{ selectedProduct.descripcion }}</p>
        <img :src="selectedProduct.fotoPortada" :alt="selectedProduct.nombre" />
      </template>
    </ProductDetail>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import ProductDetail from "../components/ProductDetails.vue";

export default {
  components: { Header, ProductDetail },
  data() {
    return {
      showProductDetails: false,
      selectedProduct: "",
      products: [
        {
          id: 0,
          nombre: "Perchero Ary",
          descripcion: "Perchero con estante en paraíso laqueado",
          fotoPortada: require("../assets/percheroAryFrente.jpeg"),
          fotoPortadaAlt: require("../assets/percheroAryIso.jpeg"),
          mouseOver: false,
        },
        {
          id: 1,
          nombre: "Velador Tangible",
          descripcion: "Velador de amurar en paraíso y cemento blanco",
          fotoPortada: require("../assets/velador_tangible.png"),
          fotoPortadaAlt: require("../assets/velador_tangible_perspectiva.png"),
          mouseOver: false,
        },
        {
          id: 2,
          nombre: "Biblio Catalina",
          descripcion:
            "Biblioteca en tres módulos en paraíso y melamina blanca, con lugar de guardado",
          fotoPortada: require("../assets/bibliotecaCatalinaSobreFondoDeHormigon.jpg"),
          fotoPortadaAlt: require("../assets/biblioCataFrente.png"),
          mouseOver: false,
        },
        {
          id: 3,
          nombre: "Mesa Coqui",
          descripcion: "Mesa ratona en Guayubira y cemento blanco",
          fotoPortada: require("../assets/mesaRatonaGuayubiraFrenteNoBG.png"),
          fotoPortadaAlt: require("../assets/mesaRatonaGuayubiraIso.png"),
          mouseOver: false,
        },
      ],
    };
  },
  methods: {
    openProductDetails(index) {
      console.log("click", index);
      this.showProductDetails = true;
      this.selectedProduct = this.products[index];
    },
    closeProductDetails() {
      this.showProductDetails = false;
    },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
}

.product {
  position: relative;
  /* margin: 0 auto; */

  display: flex;
  flex-direction: column;
  height: 400px;
  width: 300px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.product img {
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  /* -webkit-transition: opacity 0.5s ease-in-out;
  -moz-transition: opacity 0.5s ease-in-out;
  -o-transition: opacity 0.5s ease-in-out; */
  transition: opacity 0.5s ease-in-out;
}

.top:hover {
  opacity: 0;
}

.articulo {
  text-align: left;
  margin-top: auto;
}
img {
  margin: auto;
  max-height: 80%;
  max-width: 80%;
  object-fit: contain;
}
</style>
