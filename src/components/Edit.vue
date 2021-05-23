<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
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
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        class="btn btn-info form-control"
                        v-on:click="redireccionNvoProd"
                      >
                        Cerrar
                      </button>
                    </div>
                    <div class="col-md-6">
                      <button
                        class="btn btn-info form-control"
                        v-on:click="redireccionNvoProd"
                      >
                        Aceptar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
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
    redireccionNvoProd: function() {
      this.$router.push("/nuevoProducto");
    },
  },
};
</script>

<style lang=""></style>
