<template>
  <div>
    <h1>HandyMarian</h1>
    <nav>
      <ul>
        <li class="category" @click="setCategoria('portfolio')">portfolio</li>
        <li class="category" @click="setCategoria('madera')">woodworks</li>
        <li class="category" @click="setCategoria('hierro')">welds</li>
        <li class="category" @click="setCategoria('robustos')">roughs</li>
        <!-- esta sería la línea rústica/no refinada: cajonera fenólico Dodi -->
        <li class="category" @click="setCategoria('upcycles')">upcycles</li>
        <li class="category" @click="setCategoria('spaces')">spaces</li>
        <li class="category" @click="setCategoria('flea-market')">
          flea market
        </li>
        <li class="category" @click="setCategoria('mecenazgo')">mecenazgo</li>
        <!-- bocetos en sketchup buscando quien los financie -->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    setCategoria(categoria) {
      this.categoria = categoria;
      this.$emit("selectedCat", this.categoria);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #556052;
}

nav {
  padding: 0 5%;
}
nav > ul {
  color: #3f4e4f;
}

.category:hover {
  color: white;
  cursor: pointer;
  background: #40513b;
  border-radius: 3px;
  padding: 5px 15px 5px 15px;
}

ul {
  display: flex;
  justify-content: center;
  border-top: solid 1px;
  border-bottom: solid 1px;
  padding: 5px;
}

li {
  list-style-type: none;
  font-weight: bold;
  padding: 5px 15px 5px 15px;
  margin: 0px 5px;
}
</style>
