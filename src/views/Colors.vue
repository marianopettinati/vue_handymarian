<template>
  <div>
    <Header />
    <p>Soy texto</p>
    <br />
    <br />
    <div class="colors">
      <div id="one">
        <h1>HandyMarian</h1>
        <ul>
          <li
            @mouseenter="toggleClass"
            @mouseleave="toggleClass"
            :class="{ active: isActive }"
          >
            woodworks
          </li>
          <li>welds</li>
          <li>upcycles</li>
        </ul>
        <p>Soy texto</p>
      </div>
      <div id="two">
        <h1>HandyMarian</h1>
        <ul>
          <li>woodworks</li>
          <li>welds</li>
          <li>upcycles</li>
        </ul>
        <p>Soy texto</p>
      </div>
      <div id="three">
        <h1>HandyMarian</h1>
        <ul>
          <li>woodworks</li>
          <li>welds</li>
          <li>upcycles</li>
        </ul>
        <p>Soy texto</p>
      </div>
    </div>
    <br />
    <div id="colores-sueltos">
      <div id="uno">#565D47</div>
      <div id="dos">#696464</div>
      <div id="tres">#222831</div>
      <div id="cuatro">#012C0B</div>
      <div id="cinco">#40513B</div>
      <div id="cinco">#556052</div>
    </div>
    <br />

    <br /><br /><br /><br />
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: { Header },
  data() {
    return {
      isActive: false,
      productIsActive: false,
    };
  },
  methods: {
    toggleClass() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  color: #556052;
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

.colors {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
}

#one {
  background: #dcd7c9;
  height: 300px;
  width: 350px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

#one > h1 {
  color: #2c3639;
}

#one > ul {
  color: #3f4e4f;
}

#one > p {
  color: #222831;
}

#two {
  background: #f0ebce;
  height: 300px;
  width: 350px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

#two > h1 {
  color: #395144;
}

#two > ul {
  color: #436c50;
}

#two > p {
  color: #aa8b56;
}

#three {
  background: #f8ede3;
  height: 300px;
  width: 350px;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
}

#three > h1 {
  color: #798777;
}

#three > ul {
  color: #a2b29f;
}

#three > p {
  color: #bdd2b6;
}

#colores-sueltos {
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
}

#uno,
#dos,
#tres,
#cuatro,
#cinco,
#seis {
  padding: 10px;
  height: 220px;
  width: 170px;
  border-radius: 10px;
  color: white;
}

#uno {
  background: #565d47;
}
#dos {
  background: #696464;
}

#tres {
  background: #222831;
}

#cuatro {
  background: #012c0b;
}

#cinco {
  background: #40513b;
}

#seis {
  background: #556052;
}
</style>
