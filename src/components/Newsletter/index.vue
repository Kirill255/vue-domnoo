<template>
  <div class="container newsl_container">
    <h2>Join to our newsletter</h2>
    <div class="form">
      <input
        type="text"
        v-model="email"
      />
      <button
        type="button"
        @click="submitHandler"
      >Subscribe</button>
    </div>

    <div class="error_label">
      <div>{{ error }}</div>
    </div>
    <div class="success_label">
      <div>{{ success }}</div>
    </div>

    <div class="small">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      error: "",
      success: ""
    };
  },
  methods: {
    validate(email) {
      let valid = [true, ""];

      if (!/\S+@\S+\.\S+/.test(email)) {
        valid = [false, "Enter a valid email"];
      }
      if (email === "") {
        valid = [false, "Its empty"];
      }
      return valid;
    },
    submitHandler() {
      let valid = this.validate(this.email);
      if (valid[0]) {
        this.error = "";
        this.addEmail(this.email);
      } else {
        this.error = valid[1];
      }
    },
    addEmail(email) {
      this.$http
        .get(`users.json?orderBy="email"&&equalTo="${email}"`)
        .then(response => {
          // console.log(response);
          // в response.data будет или пустой объект или объект с пользователем
          // соответственно, если объект пустой, то регестрируем новую почту
          // если не! пустой, то говорим что такая почта уже зарегестрированна
          if (Object.getOwnPropertyNames(response.data).length === 0) {
            this.$http
              .post("users.json", { email: this.email })
              .then(response => {
                this.success = "Thank you";
              });
          } else {
            this.success = "Already on the list";
          }
        });
      this.clearSuccess();
    },
    clearSuccess() {
      setTimeout(() => {
        this.email = "";
        this.success = "";
      }, 3000);
    }
  }
};
</script>

