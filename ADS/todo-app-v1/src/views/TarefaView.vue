<template>
  <div>
    <h1>Lista de Tarefas</h1>

    <div v-if="form" class="conteiner">
      <div class="mb-3">
        <label for="descricao" class="form-label">Descricão da Tarefa:</label>
        <input type="text" class="form-control" name="descricao" v-model="descricao" id="descricao" placeholder="Digite uma descricao da tarefa">
      </div>
      
        <button @click="adicionar">Adicionar</button>
    </div>

    <button class="btn btn-primary" v-if="!form" @click="abrirForm">Nova Tarefa</button>
    <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Descrição</th>
          <th>Feito</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in tarefas" :key="index">
        <tr>
          <td>{{ index }}</td>
          <td>{{ item.id }}</td>
          <td>{{ item.descricao }}</td>
          <td>{{ item.feito ? 'SIM' : 'NÃO' }}</td>
          <td>
            <button v-if="item.feito == false" @click="finalizar(item.id)">✔️</button>

            <button v-if="item.feito == true" @click="desmarcar(item.id)">❌</button>

            <button @click="excluir(item.id)">♻️</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {},
  data() {
    return {
      tarefas: [
        {
          id: 1,
          descricao: 'Estudar TypeScript',
          feito: false,
        },
        {
          id: 2,
          descricao: 'Estudar JavaScript',
          feito: true,
        },
      ],
      descricao: null,
      form: false,
    }
  },
  methods: {
    finalizar(id: Number) {
      for (const item of this.tarefas) {
        if (item.id == id) {
          item.feito = true
        }
      }
    },
    desmarcar(id: Number) {
      for (const item of this.tarefas) {
        if (item.id == id) {
          item.feito = false
        }
      }
    },
    excluir(id: Number) {
      let index = 0
      for (const item of this.tarefas) {
        if (item.id == id) {
          this.tarefas.splice(index, 1)
        }
        index++
      }
    },
    adicionar() {
      let id = this.tarefas.length + 1

      if (this.descricao != null) {
        const novaTarefa = {
          id: id,
          descricao: this.descricao,
          feito: false,
        }

        this.tarefas.push(novaTarefa)
        this.descricao = null
        this.form = false
      }
    },
    abrirForm() {
      this.form = true
    },
  },
})
</script>
