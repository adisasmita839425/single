<template>
  <div>
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="col-md-12"
      v-loading="loading"
    >
      <h5 class="text-center mb-4" v-if="title_register">Registrasi</h5>
      <el-form-item label="Nama" prop="nama" size="small" class="mb-4">
        <el-input v-model="form.nama" ref="nama"> </el-input>
      </el-form-item>
      <el-form-item label="Jenis Kelamin" prop="jenis_kelamin" class="mb-4">
        <el-select
          placeholder="jenis kelamin"
          v-model="form.jenis_kelamin"
          size="small"
          ref="jenis_kelamin"
        >
          <el-option
            :label="jenis_kelamin.label"
            :value="jenis_kelamin.value"
            v-for="jenis_kelamin in jenis_kelamin"
            :key="jenis_kelamin.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Agama" prop="agama" class="mb-4">
        <el-select
          placeholder="agama"
          v-model="form.agama"
          size="small"
          ref="agama"
        >
          <el-option
            v-for="agama in agama"
            :key="agama.value"
            :label="agama.label"
            :value="agama.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Alamat" prop="alamat" class="mb-4">
        <el-input
          type="textarea"
          size="small"
          v-model="form.alamat"
          ref="alamat"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Username" prop="username" class="mb-4">
        <el-input size="small" v-model="form.username" ref="username">
        </el-input>
      </el-form-item>
      <el-form-item label="Password" prop="password" class="mb-4">
        <el-input size="small" v-model="form.password" ref="password">
        </el-input>
      </el-form-item>
      <el-form-item label="Ulangi Password" prop="ulangi_password" class="mb-4">
        <el-input
          size="small"
          v-model="form.ulangi_password"
          ref="ulangi_password"
        >
        </el-input>
      </el-form-item>
    </el-form>
    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <el-button
          v-if="index_edit === null"
          type="primary"
          class="float-right"
          @click="submitForm('form')"
          :disabled="loading"
          >Daftar</el-button
        >
        <el-button
          v-if="index_edit !== null"
          type="primary"
          class="float-right"
          @click="simpan('form')"
          :disabled="loading"
          >Simpan</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import validatorRequiredFocus from "../mixins/validatorRequiredFocus";
export default {
  mixins: [validatorRequiredFocus],
  props: ["title_register", "index_edit"],
  data() {
    return {
      loading: false,
      error_signup: false,
      form: {
        nama: "",
        alamat: "",
        jenis_kelamin: "",
        agama: "",
        username: "",
        password: "",
        ulangi_password: "",
      },

      jenis_kelamin: [
        {
          value: "laki - laki",
          label: "Laki - laki",
        },
        {
          value: "Perempuan",
          label: "Perempuan",
        },
      ],

      agama: [
        {
          label: "Islam",
          value: "Islam",
        },
        {
          label: "Hindu",
          value: "Hindu",
        },
        {
          label: "Konghucu",
          value: "Konghucu",
        },
        {
          label: "Budha",
          value: "Budha",
        },
        {
          label: "Kristen",
          value: "Kristen",
        },
      ],

      rules: {
        nama: [
          {
            validator: this.validatorRequiredFocus,
            ref: "nama",
            message: "Data tidak boleh kosong",
          },
        ],
        jenis_kelamin: [
          {
            validator: this.validatorRequiredFocus,
            ref: "jenis_kelamin",
            message: "Data tidak boleh kosong",
          },
        ],
        agama: [
          {
            validator: this.validatorRequiredFocus,
            ref: "agama",
            message: "Data tidak boleh kosong",
          },
        ],
        alamat: [
          {
            validator: this.validatorRequiredFocus,
            ref: "alamat",
            message: "Data tidak boleh kosong",
          },
        ],
        username: [
          {
            validator: this.validatorRequiredFocus,
            ref: "username",
            message: "Data tidak boleh kosong",
          },
        ],
        password: [
          {
            validator: this.validatorRequiredFocus,
            ref: "password",
            message: "Data tidak boleh kosong",
          },
        ],
        ulangi_password: [
          {
            validator: this.validatorRequiredFocus,
            message: "Data tidak boleh kosong",
            ref: "ulangi_password",
          },
        ],
      },
    };
  },
  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.form_data();
        } else {
          console.log("error");
        }
      });
    },
    simpan(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$emit("close_modal", true);
          Swal.fire({
            toast: true,
            icon: "success",
            title: "Data berhasil diperbahrui",
            position: "top-end",
            timer: 1500,
            showConfirmButton: false,
          });
        } else {
          console.log("error");
        }
      });
    },
    form_data() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        if (this.form.password === this.form.ulangi_password) {
          var user = this.$store.state.listDataSignUp;

          user.find((user) => {
            if (
              user.password === this.form.ulangi_password &&
              user.username === this.form.username
            ) {
              this.error_signup = true;
            }
          });

          if (this.error_signup === true) {
            this.$emit("close_modal", true);
            Swal.fire({
              type: "error",
              icon: "error",
              title: "username dan password tidak valid",
              showCloseButton: false,
              showConfirmButton: true,
            });
          } else {
            this.$emit("close_modal", true);
            Swal.fire({
              toast: true,
              icon: "success",
              title: "Registrasi berhasil",
              position: "top-end",
              timer: 1500,
              showConfirmButton: false,
            }).then(() => {
              this.$store.dispatch("simpan_data_signup", this.form);
              this.$emit("registrasiSuccess", true);
              this.form = {
                nama: "",
                alamat: "",
                jenis_kelamin: "",
                agama: "",
                username: "",
                password: "",
                ulangi_password: "",
              };
            });
          }
        } else {
          this.$emit("close_modal", true);
          Swal.fire({
            type: "error",
            icon: "error",
            text: "ulangi password salah",
            showConfirmButton: true,
            showCloseButton: true,
          });
        }
      }, 2000);
    },
  },
  watch: {
    index_edit() {
      if (this.index_edit === null) {
        console.log(this.index_edit);
        this.form = {
          nama: "",
          alamat: "",
          jenis_kelamin: "",
          agama: "",
          username: "",
          password: "",
          ulangi_password: "",
        };
      } else if (this.index_edit !== null) {
        console.log(this.index_edit);
        this.$store.dispatch("select_data_user_edit", this.index_edit);
        this.form = this.$store.getters.get_users_edit;
      } else {
        //
      }
    },
  },
};
</script>
