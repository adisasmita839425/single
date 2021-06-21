<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="card mt-5 shadow" v-loading="loading">
            <div class="card-body">
              <el-form :model="form_login" :rules="rules" ref="form">
                <el-form-item label="Username" prop="username">
                  <el-input v-model="form_login.username"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                  <el-input v-model="form_login.password"></el-input>
                </el-form-item>
                <el-button
                  class="float-right"
                  type="primary"
                  @click="submitForm('form')"
                  >Login</el-button
                >
              </el-form>
            </div>
          </div>
          <div class="text-center mt-2">
            Tidak memiliki akun ? &nbsp;
            <span class="text-primary" @click="register">Daftar sekarang</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      loading: false,
      user_login: false,

      form_login: {
        username: "",
        password: "",
      },

      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;

            var user = this.$store.state.listDataSignUp;
            var user_login = "";

            user.find((user) => {
              if (
                this.form_login.username === user.username &&
                this.form_login.password === user.password
              ) {
                this.user_login = true;
                user_login = user.nama;
              }
            });

            if (this.user_login === true) {
              Swal.fire({
                type: "success",
                icon: "success",
                title: "Hay " + user_login + ", kamu berhasil login",
                showConfirmButton: true,
                showCancelButton: false,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
              }).then(() => {
                this.$emit("move_page", "login_success");
              });
            } else {
              Swal.fire({
                type: "warning",
                icon: "error",
                title: "Password atau username salah",
                showCancelButton: true,
                showConfirmButton: false,
                cancelButtonText: "Cancel",
              });
            }
          }, 2000);
        } else {
          console.log("error");
        }
      });
    },
    register() {
      this.$emit("move_page", "register");
    },
  },
};
</script>
