<template>
  <div>
    <h1>Lista de Juegos</h1>
    <div class="container">
      <table style="width: 100%">
        <tr>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
        <tr v-for="game in juegos"  :style="{color:game.color}" :key='game.codigo'>
          <td>{{game.codigo}}</td>
          <td>{{game.nombre}}</td>          
          <td>{{game.stock}}</td>
          <td>{{Number(game.precio).toLocaleString('es-CL')}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
//maphelper  
import { mapState } from "vuex";
export default {
  name: "GameList",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["juegos"]),
  },
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>

table, th, td {
  border:1px solid black;
}

</style>