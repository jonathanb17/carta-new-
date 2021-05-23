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
                <select name="select" class="form-control">
                  <option value="value1">Value 1</option>
                  <option value="value2" selected>Value 2</option>
                  <option value="value3">Value 3</option> </select
                ><br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="codigo"
                  class="form-control"
                />
                <br />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="nombre"
                  class="form-control"
                />
                <br />
                <textarea
                  name=""
                  id=""
                  cols="30"
                  placeholder="detalles"
                  class="form-control"
                ></textarea>
                <br />
                <input type="text" name="" id="" class="form-control" />
                <br />

                <input type="file" name="" id="" />
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
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
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
                <td>Otto</td>
                <td>@mdo</td>
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
                <td>Thornton</td>
                <td>@fat</td>
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
                <td>the Bird</td>
                <td>@twitter</td>
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
    return {
      dialog: false,
    };
  },
  methods: {
    redirigirEdit: function() {
      this.$router.push("/editar");
    },
    eliminarProducto: function() {
      alert("estas seguro que decea eliminar este producto??");
    },
  },
};
</script>

<style lang=""></style>
