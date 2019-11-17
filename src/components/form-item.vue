<template>
  <el-form-item>
    <template v-if="widget.type==='input'">
      <el-input
        :disabled="widget.disabled"
        :type="widget.extra.type"
        :placeholder="widget.extra.placeholder"
      ></el-input>
    </template>
  </el-form-item>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
    props:["widget"]
};
</script>