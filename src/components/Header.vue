<template>
  <div>
    <h1>HandyMarian</h1>
    <nav>
      <ul>
        <li
          @mouseenter="toggleClass"
          @mouseleave="toggleClass"
          :class="{ active: isActive }"
        >
          portfolio
        </li>
        <li>woodworks</li>
        <li>welds</li>
        <li>roughs</li>
        <!-- esta sería la línea rústica/no refinada: cajonera fenólico Dodi -->
        <li>upcycles</li>
        <li>spaces</li>
        <li>flea market</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
    toggleProductClass() {
      this.productIsActive = !this.productIsActive;
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
.active {
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
}
</style>
