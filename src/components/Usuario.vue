<template>
  <div>
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="margin-top: -59px;"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link to="/NuevoProducto">Producto</router-link>
            <router-link to="/usuario" style="margin-left: 10px;"
              >Categoria</router-link
            >
            <router-link>Usuario</router-link>
            <!-- edita los datos del usuario -->
          </div>
        </div>
      </div>
    </nav>
    <div class="container" style="margin-top: 49px;">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="nombre de la categoria"
                  class="form-control"
                />
                <br />

                <button class="btn btn-primary form-control">Enviar</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">EDIT</th>
                <th scope="col">delete</th>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <button v-on:click="redirigirEdit" class="btn btn-primary">
                    Edit
                  </button>
                </th>
                <th>
                  <button class="btn btn-danger" v-on:click="eliminarProducto">
                    delete
                  </button>
                </th>
                <td>Mark</td>
              </tr>
              <tr>
                <th scope="row">
                  <button v-on:click="redirigirEdit" class="btn btn-primary">
                    Edit
                  </button>
                </th>
                <th>
                  <button class="btn btn-danger" v-on:click="eliminarProducto">
                    delete
                  </button>
                </th>
                <td>Jacob</td>
              </tr>
              <tr>
                <th scope="row">
                  <button v-on:click="redirigirEdit" class="btn btn-primary">
                    Edit
                  </button>
                </th>
                <th>
                  <button class="btn btn-danger" v-on:click="eliminarProducto">
                    delete
                  </button>
                </th>
                <td>Larry</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    redirigirEdit: function() {
      this.$router.push("/editarCategoria");
    },
  },
};
</script>

<style lang=""></style>
