<template>
  <div class="container mt-4">
    <div class="card">
      <div class="card-body shadow">
        <h5 class="mb-4 text-center">Data Users</h5>

        <button
          class="btn btn-primary btn-sm mt-3 mb-1"
          @click="(dialogFormVisible = true), (index_edit = null)"
        >
          Tambah Data
        </button>

        <div class="table table-responsive">
          <table class="table table-hover table-striped table-bordered">
            <caption>
              Data user login
            </caption>
            <thead>
              <tr class="text-center">
                <th>No</th>
                <th>Nama</th>
                <th>Alamat</th>
                <th>Jenis Kelamin</th>
                <th>Agama</th>
                <th>Username</th>
                <th>Password</th>
                <th colspan="2">Aksi</th>
              </tr>
            </thead>
            <tbody v-loading="tableLoading">
              <tr v-for="(item, index) in get_users.data_users" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ item.nama }}</td>
                <td>{{ item.alamat }}</td>
                <td>{{ item.jenis_kelamin }}</td>
                <td>{{ item.agama }}</td>
                <td>{{ item.username }}</td>
                <td>{{ item.password }}</td>
                <td class="text-center">
                  <el-button-group>
                    <el-button
                      icon="el-icon-edit"
                      size="mini"
                      @click="edit(index)"
                    ></el-button>
                    <el-button
                      icon="el-icon-delete"
                      @click="remove(index)"
                      size="mini"
                    ></el-button>
                  </el-button-group>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="float-right mt-3 text-secondary">
          <p style="font-size:13px">Jumlah data : {{ get_users.jumlah }}</p>
        </div>
      </div>
    </div>
    <!-- modal dialog -->
    <el-dialog
      :title="index_edit == null ? 'Create data users' : 'Update data users'"
      :visible.sync="dialogFormVisible"
      width="90%"
    >
      <Form @close_modal="close_modal" :index_edit="index_edit" />
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import home_methods from "../mixins/home_methods";
import Form from "../components/form";

export default {
  components: {
    Form,
  },
  mixins: [home_methods],
  data() {
    return {};
  },

  methods: {},

  computed: {
    // untuk memanggil nama store
    ...mapGetters(["get_users"]),
  },
};
</script>
