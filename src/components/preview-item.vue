<template>
  <el-form-item :label="widget.label" :prop="widget.id">
    <template v-if="widget.type==='input'">
      <el-input
        :placeholder="widget.extra.placeholder"
        :disabled="widget.disabled"
        v-model.number="dataModel"
      />
    </template>
  </el-form-item>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: ["widget"],
  computed: {
    ...mapState({
      models: "models",
      dataModel(state) {
        return state.models[this.widget.id];
      }
      //   dataModel(state) {
      //     return {
      //       get() {
      //         return state.models[this.widget.id];
      //       },

      //       set(value) {
      //         const models = JSON.parse(JSON.stringify(state.models));
      //         models[this.widget.id] = value;
      //         this.setModels(models);
      //       }
      //     };
      //   }
    })
  },
  mounted() {
    console.log(this.models);
  },
  methods: {
    ...mapMutations(["setModels"])
  }
};
</script>