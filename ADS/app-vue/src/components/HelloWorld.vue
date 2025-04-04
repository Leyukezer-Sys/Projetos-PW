<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>

    <div style="display: flex; align-items: center; justify-content: center">
      <input
        placeholder="Digite seu Nome"
        style="padding: 15px; font-size: 18px"
        v-model="nome"
      />
      <button
        style="padding: 14px; background: none; text-color: white"
        v-on="btClicado"
        @click="adivinharNome"
      >
        <img v-bind:src="image" style="width: 1.3rem" />
      </button>
    </div>

    <h3 v-if="carregando">
      <img v-bind:src="carregando_img" style="width: 1.3rem" />
    </h3>

    <div>
      <h3 v-if="btClicado">Seu Nome é: {{ nome }}</h3>
      <button
        v-if="btClicado"
        @click="resetarNome"
        style="color: red; padding: 10px; background: none; border: none"
      >
        resetar
      </button>
    </div>

    <h3>Nomes Advinhados:</h3>
    <ul
      style="
        display: block;
        list-style-type: decimal;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0;
        margin-right: 0;
        padding-left: 40px;
      "
    >
      <li v-for="item in listaNomes" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },

  data() {
    return {
      nome: null,
      btClicado: false,
      carregando: false,
      listaNomes: [],
      image: "https://cdn-icons-png.flaticon.com/256/32/32213.png",
      carregando_img:
        "https://i.pinimg.com/originals/59/ee/b7/59eeb7a03e0afc1af1300a582737183b.gif",
    };
  },

  methods: {
    adivinharNome() {
      this.carregando = true;
      setTimeout(() => {
        this.carregando = false;
        this.btClicado = true;
        this.listaNomes.push(this.nome);
      }, 4000);
    },

    resetarNome() {
      this.btClicado = false;
      this.nome = null;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
