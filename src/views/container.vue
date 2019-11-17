<template>
  <el-row class="container">
    <!-- 左侧的组件拖拽区域 -->
    <Dragger />
    <!-- 中间的表单展示区域 -->
    <center-form />
    <!-- 右边的属性配置区域 -->
    <right-config />
  </el-row>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Draggable from "vuedraggable";
import Dragger from "./dragger";
import CenterForm from "./center-form";
import RightConfig from "./right-config";
import formList from "@/config/form.ts";

export default {
  name: "container",
  data() {
    return {
      formList
    };
  },
  components: { Dragger, CenterForm, RightConfig }
};
</script>
