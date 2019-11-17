<template>
  <el-col :span="8" class="left-dragger">
    <h2>拖拽表单区域</h2>
    <draggable
      tag="ul"
      :list="formList"
      v-bind="{group:{ name:'people', pull:'clone',put:false},sort:false, ghostClass: 'ghost'}"
    >
      <li v-for="(item,index) in formList" :key="index">
        <a>
          <span>{{item.typeName}}</span>
        </a>
      </li>
    </draggable>
  </el-col>
</template>
<script type="ts">
import formList from "@/config/form.ts";
import Draggable from "vuedraggable";

export default {
  name: "dragger",
  data() {
    return {
      formList: Object.freeze(formList)
    };
  },
  components:{Draggable}
};
</script>