import VueDivider from './divider.vue'
export default VueDivider
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('niu-divider', VueDivider)
}
