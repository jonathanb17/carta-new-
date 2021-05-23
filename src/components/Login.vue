<template>
  <div>
    <div class="login">
      <h1 class="title">Login Carta Digital</h1>
      <form action class="form">
        <input
          v-model="dato.usuario"
          class="form-input"
          type="text"
          id="email"
          required
          placeholder="usuario"
        /><br />
        <input
          v-model="dato.password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
        /><br />
        <input
          class="form-submit btn btn-primary"
          type="submit"
          value="Login"
          v-on:click="redirigir"
        />
      </form>
      <footer style="background-color:#ccc;width:100%">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              Carta Digital
            </div>

            <div class="col-md-6">
              <!-- <img
              class="mr-0"
              src="../assets/jablackSoftfotofinal.png"
              alt=""
              srcset=""
              style=" width: 30%;"
            /> -->
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: "",
      password: "",
      dato: {},
    };
  },
  methods: {
    redirigir: function(e) {
      e.preventDefault();
      console.log(this.dato);
      if (this.dato.usuario == "usuario" && this.dato.password == "1234") {
        this.$router.push("/nuevoProducto");
        e.preventDefault();
      } else {
        alert("ingrese datos correctos!");
        this.dato = {};
      }
    },
  },
};
</script>

<style>
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: #ccc;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}
</style>
