<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 mt-4 mb-4">
          <div class="card">
            <div class="card-body shadow">
              <Form
                :title_register="true"
                :index_edit="(index_edit = null)"
                @registrasiSuccess="registrasiSuccess"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../components/form";
export default {
  props: ["title_register"],
  components: {
    Form,
  },
  methods: {
    registrasiSuccess() {
      this.$emit("registrasiSuccess", true);
    },
  },
};
</script>
