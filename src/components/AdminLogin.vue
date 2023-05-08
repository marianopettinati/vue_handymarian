<template>
  <form @submit.prevent="handleSubmit">
    <label>¡Hola, HandyMarian! </label>
    <input type="password" required v-model="password" placeholder="password" />
    <div class="passwordError" v-if="passwordError">
      {{ passwordError }}
    </div>
    <div class="submit">
      <button>Login</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "test",
      password: "",
      role: "developer",
      terms: false,
      names: [],
      tempSkill: "",
      skills: [],
      passwordError: "",
    };
  },
  methods: {
    addSkill(event) {
      if (event.key === "Enter" && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill != item;
      });
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "La contraseñoa debe tener un mínimo de 6 caracteres";
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #012c0b;
  display: inline-block;
  margin: 25px 0 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

button {
  background: #556052;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 5px;
}
button:hover {
  cursor: pointer;
}
.submit {
  text-align: center;
}

.passwordError {
  color: red;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
