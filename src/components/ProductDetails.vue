<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot
        >Default content - aparezco solo si no me pasan contenido para el
        slot</slot
      >
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [""],
  methods: {
    closeModal() {
      console.log("backdrop");
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 600px;
  height: 600px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(34, 40, 49, 0.6);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: darkolivegreen;
}

.modal .actions {
  text-align: center;
  margin: 30px 0 10px 0;
}

.modal .actions a {
  color: #333;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  margin: 10px;
}

.warning {
  background-color: red;
}

.success {
  background-color: green;
}
</style>
