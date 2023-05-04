<template>
  <div>
    <Header />
  </div>
  <h2>Wood</h2>
  <div class="products">
    <div
      class="product"
      @mouseenter="mouseEnter"
      @mouseleave="mouseLeave"
      :class="{ productActive: productIsActive }"
      v-for="product in products"
    >
      <!-- <img :src="fotoPortada" alt="imagen" /> -->
      <img src="{{product.fotoPortada}}" alt="{{product.name}}" />
      <div class="articulo">
        <h3>{{ product.nombre }}</h3>
        <p>{{ product.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: { Header },
  data() {
    return {
      productIsActive: false,
      fotoPortada: "",
      products: [
        {
          nombre: "Mesa Coqui",
          descripcion: "Mesa ratona en guayubira y cemento blanco",
          fotoPortada: require("../assets/MesaRatoaGuayubiraFrenteNoBG.png"),
          fotoPortadaAlt: require("../assets/pebblely.png"),
        },
        {
          nombre: "Velador Tangible",
          descripcion: "Velador de amurar en paraíso y cemento blanco",
          fotoPortada: require("../assets/MesaRatoaGuayubiraFrenteNoBG.png"),
          fotoPortadaAlt: require("../assets/pebblely.png"),
        },
        {
          nombre: "Biblio Catalina",
          descripcion:
            "Biblioteca en tres módulos en paraíso y melamina blanca, con lugar de guardado",
          fotoPortada: require("../assets/MesaRatoaGuayubiraFrenteNoBG.png"),
          fotoPortadaAlt: require("../assets/pebblely.png"),
        },
      ],
    };
  },
  mounted() {
    this.fotoPortada = this.products[0].fotoPortada;
  },
  methods: {
    mouseEnter() {
      this.fotoPortada = this.products[0].fotoPortadaAlt;
    },
    mouseLeave() {
      this.fotoPortada = this.products[0].fotoPortada;
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

.productActive {
  background: #dcd7c9;
}

.product {
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 350px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
