<template>
  <div id="app">
    <CardLogin v-if="value_page.login" @move_page="move_page" />
    <Signup
      v-if="value_page.signup"
      @registrasiSuccess="registrasiSuccess"
      :title_register="true"
    />
    <Homepage v-if="value_page.homepage" />
  </div>
</template>

<script>
import CardLogin from "./components/CardLogin.vue";
import Signup from "./components/Signup.vue";
import Homepage from "./components/Homepage.vue";

export default {
  name: "App",
  components: {
    CardLogin,
    Signup,
    Homepage,
  },
  data() {
    return {
      value_page: {
        login: true,
        signup: false,
        homepage: false,
      },
    };
  },
  methods: {
    move_page(value) {
      console.log(value);
      if (value === "register") {
        this.value_page.login = false;
        this.value_page.signup = true;
      } else if (value === "login_success") {
        this.value_page.login = false;
        this.value_page.homepage = true;
      }
    },
    registrasiSuccess() {
      this.value_page.signup = false;
      this.value_page.login = true;
    },
  },
};
</script>
