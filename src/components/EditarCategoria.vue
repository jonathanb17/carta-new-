<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nombre categoria nuevo"
                  class="form-control"
                />
                <br />

                <input
                  type="number"
                  name=""
                  id=""
                  class="form-control"
                  placeholder="aumentar precios"
                />
                <br />
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        class="btn btn-info form-control"
                        v-on:click="redireccionNvoCateg"
                      >
                        Cerrar
                      </button>
                    </div>
                    <div class="col-md-6">
                      <button
                        class="btn btn-info form-control"
                        v-on:click="redireccionNvoCateg"
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
    redireccionNvoCateg: function() {
      this.$router.push("/usuario");
    },
  },
};
</script>
