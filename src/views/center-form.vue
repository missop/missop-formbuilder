<template>
  <el-col :span="8" class="center-form">
    <h2>表单展示区</h2>
    <el-form ref="formDom">
      <!-- 外层的draggable组件为数据添加id -->
      <draggable
        v-model="widgetForm.list"
        v-bind="{group:'people', ghostClass: 'ghost',animation: 200, handle: '.drag-widget'}"
        @add="handleWidgetAdd"
      >
        <transition-group name="fede" tag="div" class="widget-form-list">
          <template v-for="(item,i) in widgetForm.list">
            <form-item :widget="item" :key="i" />
          </template>
        </transition-group>
      </draggable>
    </el-form>
  </el-col>
</template>
<script type="ts">
import { mapState, mapMutations } from "vuex";
import FormItem from "@/components/form-item.vue";
import Draggable from "vuedraggable";
export default {
  mounted() {
    console.log(this.widgetForm);
  },
  computed: {
    widgetForm: {
      get() {
        return this.$store.state.widgetForm;
      },
      set(value) {
        this.setWidgetFrom(value);
      }
    }
  },
  methods: {
    ...mapMutations(["setWidgetFrom"]),
    handleWidgetAdd({ newIndex, to }) {
      console.log(newIndex, to);
      // 添加唯一标识id
      const id = new Date().getTime() + "" + parseInt(Math.random() * 9999);
      const copiedWidgetForm = JSON.parse(JSON.stringify(this.widgetForm));
      copiedWidgetForm.list[newIndex].id = id;
      this.setWidgetFrom({ list: [...copiedWidgetForm.list] });
    }
  },
  components: {
    FormItem,
    Draggable
  }
};
</script>