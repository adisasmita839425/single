import Swal from "sweetalert2";
export default {
  data() {
    return {
      tableLoading: false,
      dialogFormVisible: false,
      index_edit: null,
    };
  },
  methods: {
    close_modal() {
      this.dialogFormVisible = false;
    },
    remove(index) {
      Swal.fire({
        type: "warning",
        icon: "warning",
        title: "Apakah kamu yakin ingin menghapus data ini ? ",
        // showCloseButton: true,
        showCancelButton: true,
        showConfirmButton: true,
        cancelButtonText: "Batal",
        confirmButtonText: "Yakin",
      }).then((result) => {
        if (result.value) {
          this.tableLoading = true;
          setTimeout(() => {
            this.tableLoading = false;
          }, 1500);
          setTimeout(() => {
            Swal.fire({
              toast: true,
              icon: "success",
              title: "Data berhasil dihapus",
              position: "top-end",
              timer: 1900,
              showConfirmButton: false,
            }).then(() => {
              this.$store.dispatch("remove_data_users", index);
            });
          }, 2000);
        }
      });
    },
    edit(index) {
      this.dialogFormVisible = true;
      this.index_edit = index;
    },
  },
};
