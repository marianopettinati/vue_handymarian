COSAS A VER: - Responsiveness

<template>
  <div>
    <Header @selected-cat="categoryFilter" />
  </div>
  <h2>{{ categoryActive }}</h2>
  <p v-if="isLoading">Cargando...</p>
  <div class="products">
    <div
      class="product"
      @click="openProductDetails(index)"
      @category="setCategory"
      v-for="(product, index) in filtered_products"
      :key="product.id"
    >
      <!-- En realidad, para que el css quede bien en lugar de usa un if en el renderizado, tendría que recorrer un array nuevo filtrado por categoria  -->
      <img class="bottom" :src="product.fotoPortadaAlt" :alt="product.name" />
      <img class="top" :src="product.fotoPortada" :alt="product.name" />
      <div class="articulo">
        <h3>{{ product.nombre }}</h3>
        <p>{{ product.descripcion }}</p>
      </div>
    </div>
    <ProductDetail v-if="showProductDetails" @close="closeProductDetails">
      <template v-slot>
        <h1>{{ selectedProduct.nombre }}</h1>
        <p>{{ selectedProduct.descripcion }}</p>
        <img
          :src="selectedProduct.fotoPortadaAlt"
          :alt="selectedProduct.nombre"
        />
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
      categoryActive: "portfolio",
      isLoading: true,
      showProductDetails: false,
      selectedProduct: "",
      filtered_products: [],
      products: [
        {
          id: 0,
          nombre: "Perchero Ary",
          descripcion: "Perchero con estante en paraíso laqueado",
          fotoPortada: require("../assets/percheroAry.jpg"),
          fotoPortadaAlt: require("../assets/percheroAryIso.jpg"),
          categoria: "madera",
          mouseOver: false,
        },
        {
          id: 1,
          nombre: "Velador Tangible",
          descripcion: "Velador de amurar en paraíso y cemento blanco",
          fotoPortada: require("../assets/veladorTangibleAmurado.jpg"),
          fotoPortadaAlt: require("../assets/velador_tangible.png"),
          categoria: "spaces",
          mouseOver: false,
        },
        {
          id: 2,
          nombre: "Biblio Catalina",
          descripcion:
            "Biblioteca en tres módulos en paraíso y melamina blanca, con lugar de guardado",
          fotoPortada: require("../assets/bibliotecaCatalinaSobreFondoDeHormigon.jpg"),
          fotoPortadaAlt: require("../assets/biblioCataFrente.png"),
          categoria: "madera",
          mouseOver: false,
        },
        {
          id: 3,
          nombre: "Mesa Coqui",
          descripcion: "Mesa ratona en Guayubira y cemento blanco",
          fotoPortada: require("../assets/mesaRatonaGuayubira.jpeg"),
          fotoPortadaAlt: require("../assets/mesaRatonaGuayubiraFrenteNoBG.png"),
          categoria: "madera",
          mouseOver: false,
        },
        {
          id: 4,
          nombre: "Banqueta Marisita",
          descripcion: "Banqueta estilo campo en paraíso maciso",
          fotoPortada: require("../assets/banquetaMarisita.jpg"),
          fotoPortadaAlt: require("../assets/banquetaMarisitaFrente.jpg"),
          categoria: "madera",
          mouseOver: false,
        },
      ],
    };
  },
  mounted() {
    this.filtered_products = this.products;
    this.isLoading = false;
  },
  methods: {
    openProductDetails(index) {
      this.showProductDetails = true;
      this.selectedProduct = this.products[index];
    },
    closeProductDetails() {
      this.showProductDetails = false;
    },
    categoryFilter(cat) {
      if (cat === "portfolio") {
        this.filtered_products = this.products;
        this.categoryActive = "Portfolio";
      } else {
        this.categoryActive = cat;
        this.filtered_products = this.products.filter((item) => {
          return item.categoria === cat;
        });
      }
    },
  },
};
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 5%;
}

.product {
  position: relative;
  margin: 1em;
  display: flex;
  flex-direction: column;
  height: 370px;
  width: 260px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.product img {
  position: absolute;
  border-radius: 5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  max-height: 260px;
  max-width: 260px;
  object-fit: contain;
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
  max-height: 70%;
  max-width: 70%;
  object-fit: contain;
}
</style>
