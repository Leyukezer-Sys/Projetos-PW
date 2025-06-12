<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-10">
              <h3 class="m-0">Novo Servidor</h3>
            </div>
            <div class="col-sm-2 d-grid">
              <RouterLink class="btn btn-secondary" to="/servidores">
                <i class="fas fa-arrow-left me-2"></i>Voltar
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="alert alert-warning" v-if="v$.$errors.length">
            <p class="m-0 p-0" v-for="error of v$.$errors" :key="error.$uuid">
              {{ error.$property }} {{ error.$message }}
            </p>
          </div>
          <form @submit.prevent="salvar">
            <div class="row">
              <div class="col-sm-6 mb-3">
                <label for="nome" class="form-label">Nome</label>
                <input
                  type="text"
                  class="form-control"
                  id="nome"
                  v-model="formDados.nome"
                />
                <div
                  class="text-danger"
                  v-if="v$.formDados.nome.$errors.length"
                >
                  <p
                    class="m-0 p-0"
                    v-for="error of v$.formDados.nome.$errors"
                    :key="error.$uuid"
                  >
                    <small>{{ error.$message }}</small>
                  </p>
                </div>
              </div>
              <div class="col-sm-6 mb-3">
                <label for="siape" class="form-label">Siape</label>
                <input
                  type="text"
                  class="form-control"
                  id="siape"
                  v-model="formDados.siape"
                />
                <div
                  class="text-danger"
                  v-if="v$.formDados.siape.$errors.length"
                >
                  <p
                    class="m-0 p-0"
                    v-for="error of v$.formDados.siape.$errors"
                    :key="error.$uuid"
                  >
                    <small>{{ error.$message }}</small>
                  </p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6 mb-3">
                <label for="dataNascimento" class="form-label"
                  >Data de Nascimento</label
                >
                <input
                  type="date"
                  class="form-control"
                  id="dataNascimento"
                  v-model="formDados.dataNascimento"
                />
              </div>
              <div class="col-sm-6 mb-3">
                <label for="email" class="form-label">E-mail</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  v-model="formDados.email"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <button type="submit" class="btn btn-primary">
                  <i class="fas fa-save me-2"></i>Salvar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useVuelidate } from "@vuelidate/core";
import {
  email,
  helpers,
  minLength,
  numeric,
  required,
} from "@vuelidate/validators";
import { defineComponent } from "vue";
import axios from "axios";
import Swal from "sweetalert2";

export default defineComponent({
  name: "FormView",

  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      formDados: {
        nome: "",
        siape: "",
        dataNascimento: "",
        email: "",
      },
    };
  },

  validations() {
    return {
      formDados: {
        nome: {
          required: helpers.withMessage("O nome é obrigatório", required),
          minLength: helpers.withMessage(
            "O nome deve ter no mínimo 8 caracteres",
            minLength(8)
          ),
        },
        siape: { required, numeric },
        dataNascimento: { required },
        email: { required, email },
      },
    };
  },

  methods: {
    gerarId() {
      return Math.floor(Math.random() * 0xffff)
        .toString(16)
        .padStart(4, "0");
    },
    async salvar() {
      const result = await this.v$.$validate();

      if (!result) {
        return;
      }

      const dados = {
        ...this.formDados,
        id: this.gerarId(),
      };

      try {
        const response = await axios.post(
          "http://localhost:3000/servidores",
          dados
        );
        if (response.status == 201 || response.status == 200) {
          console.log("Servidor adicionado com sucesso!");

          Swal.fire({
            title: "Sucesso!",
            text: `o Servidor ${dados.id}|${dados.nome} foi cadastrado com sucesso.`,
            icon: "success",
            timer: 3000,
            showConfirmButton: false,
          }).then(() => {
            this.$router.push("/servidores");
          });
        }
      } catch (error) {
        console.log("Não foi possivel salvar o servidor ", error);
      }
    },
  },
});
</script>
