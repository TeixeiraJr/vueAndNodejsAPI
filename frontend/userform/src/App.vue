<template>
  <div class="container grid-xs py-2" id="app" style="text-align: center">
    <img class="img-response img-logo" src="@/assets/qualicorp.png" alt="Qualicorpo logo">
    <h5>Insira os dados para cadastrar o usuário na nossa plataforma:</h5>
    <div class="text-success" v-if="isSucess">
      <button class="btn btn-success">Usuário Cadastrado com sucesso</button>
    </div>
    <div class="text-error" v-if="isError">
      <button class="btn btn-error">Por favor, preencha todos os campos</button>
    </div>
    <form @submit.prevent="onCreatePost">
      <div class="docs-demo columns">
          <label class="form-label">Nome</label>
          <input class="form-input" type="text" id="" placeholder="Name" v-model="username">
          <label class="form-label">Email</label>
          <input class="form-input" type="text" id="" placeholder="Name" v-model="email">
          <label class="form-label">CPF</label>
          <input class="form-input" type="text" id="" placeholder="Name" v-mask="'###.###.###-##'" v-model="cpf">
          <label class="form-label">Telefone</label>
          <input class="form-input" type="text" id="" placeholder="Name" v-mask="'(##) #####-####'" v-model="cellphone">

      </div>
        <button class="btn btn-primary input-group-btn btn-submit">Adicionar Usuário</button>
    </form>
  </div>
</template>

<script>
const api = require('@/services/api');
export default {
  data() {
    return {
      isSucess: false,
      isError: false
    }
  },
  methods: {
    onCreatePost() {
      this.isError = false;
      if (this.username && this.email && this.cpf && this.cellphone) {
        api.post('/users', {
          username: this.username, email: this.email, cpf: this.cpf, cellphone: this.cellphone
        }).then((res) => {
          console.log(res);
          this.isError = false;
          this.isSucess = true;
        })
      } else {
        this.isSucess = false;
        this.isError = true;
      }
    }
  }
}
</script>

<style scoped>
.img-logo {
  max-width: 200px;
  margin: 0 auto;
}

.btn {
  margin: 20px;
  border-radius: 7px;
}

.form-input {
  border-radius: 7px;
}
</style>