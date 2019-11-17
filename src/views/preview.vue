<template>
  <div class="preview">
    <el-form>
      <template v-for="(item,index) in widgetForm.list">
        <preview-item :widget="item" :key="index"/>
      </template>
    </el-form>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import PreviewItem from "@/components/preview-item.vue";
export default {
  computed: {
    ...mapState(["widgetForm"])
  },
  components: {
    PreviewItem
  }
};
</script>