import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    widgetForm: {
      list: []
    }, //记录所有已添加的表单
    models: [] //记录生成的表单的数据，已经删掉了其他传递到组件上的属性
  },
  mutations: {
    setWidgetFrom(state, widgetForm) {
      state.widgetForm = widgetForm
    },
    setModels(state, models) {
      state.models = models
    }
  },
  actions: {},
  modules: {}
})
