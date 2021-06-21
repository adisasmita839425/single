export default {
  methods: {
    validatorRequiredFocus(rules, value, callback) {
      if (!value) {
        this.$refs[rules.ref].focus();
        return callback(new Error(rules.message));
      }
      return callback();
    },
  },
};
