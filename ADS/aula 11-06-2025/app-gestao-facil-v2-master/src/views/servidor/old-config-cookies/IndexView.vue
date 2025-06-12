<template>
  <div class="row">
    <!-- [ sample-page ] start -->
    <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <div class="row">
            <div class="col-sm-10">
              <h3 class="m-0">Servidores</h3>
            </div>
            <div class="col-sm-2 d-grid">

              <RouterLink class="btn btn-primary" to="/servidores/novo">
                <i class="fas fa-plus-circle me-2"></i>Novo
              </RouterLink>

            </div>

          </div>
        </div>
        <div class="card-body p-0">
          <table class="table m-0">
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Siape</th>
                <th>Data Nascimento</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(servidor, index) in servidores" :key="servidor.id">
                <td>{{ index + 1 }}</td>
                <td>{{ servidor.nome }}</td>
                <td>{{ servidor.siape }}</td>
                <td>{{ formatDate(servidor.dataNascimento) }}</td>
                <td>{{ servidor.email }}</td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
    <!-- [ sample-page ] end -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'IndexView',

  data() {
    return {
      servidores: [],
      loading: false
    }
  },

  mounted() {
    this.carregarListaServidoresCookies();
    this.addNovoServidor();
  },
  methods: {

    addNovoServidor() {
      if (this.$cookies.isKey('novo-servidor')) {
        this.servidores.push(this.$cookies.get('novo-servidor'));
        this.$cookies.remove('novo-servidor');
        this.atualizarListaServidoresCookies();
      }
    },

    carregarListaServidoresCookies() {
      if (!this.$cookies.isKey('servidores-lista')) {
        this.inserirListaServidoresCookies();
      }

      const listaServidores = this.$cookies.get('servidores-lista');

      this.servidores = JSON.parse(listaServidores);
    },

    inserirListaServidoresCookies() {
      this.$cookies.set('servidores-lista', JSON.stringify([
        {
          id: 1,
          nome: 'João Silva',
          siape: '1234567',
          dataNascimento: '1980-03-15',
          email: 'joao.silva@email.com'
        },
        {
          id: 2,
          nome: 'Maria Santos',
          siape: '7654321',
          dataNascimento: '1985-07-22',
          email: 'maria.santos@email.com'
        },
        {
          id: 3,
          nome: 'Pedro Oliveira',
          siape: '9876543',
          dataNascimento: '1978-11-10',
          email: 'pedro.oliveira@email.com'
        },
        {
          id: 4,
          nome: 'Ana Costa',
          siape: '4567890',
          dataNascimento: '1990-06-05',
          email: 'ana.costa@email.com'
        },
        {
          id: 5,
          nome: 'Carlos Souza',
          siape: '2345678',
          dataNascimento: '1982-09-18',
          email: 'carlos.souza@email.com'
        }
      ]));
    },

    atualizarListaServidoresCookies() {
      this.$cookies.remove('servidores-lista');
      this.$cookies.set('servidores-lista', JSON.stringify(this.servidores))
    },

    formatDate(dateString) {
      const date = dayjs(dateString);
      // Then specify how you want your dates to be formatted
      return date.format('DD/MM/YYYY');
    }

  }
});
</script>
