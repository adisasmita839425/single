import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index_user_edit: null,
    listDataSignUp: [
      {
        nama: "de oyik",
        alamat: "Br. Ketogan, Taman, Abiansemal",
        jenis_kelamin: "Laki - laki",
        agama: "Hindu",
        username: "deoyik_",
        password: "deoyik_",
        ulangi_password: "deoyik_",
      },
    ],
  },

  mutations: {
    SIMPAN_DATA_SIGNUP(state, data_signup) {
      state.listDataSignUp.push(data_signup);
    },
    REMOVE_DATA_INDEX(state, index) {
      state.listDataSignUp.splice(index, 1);
    },
    SELECT_DATA_USERS_EDIT(state, index) {
      state.index_user_edit = index;
    },
  },

  actions: {
    simpan_data_signup({ commit }, data_signup) {
      commit("SIMPAN_DATA_SIGNUP", data_signup);
    },
    remove_data_users({ commit }, index) {
      commit("REMOVE_DATA_INDEX", index);
    },
    select_data_user_edit({ commit }, index) {
      commit("SELECT_DATA_USERS_EDIT", index);
    },
  },

  getters: {
    get_users: (state) => {
      var data = state.listDataSignUp;
      var jumlah = data.length;
      var data_users = data;

      return {
        jumlah: jumlah,
        data_users: data_users,
      };
    },
    get_users_edit: (state) => {
      return state.listDataSignUp[state.index_user_edit];
    },
  },
});
