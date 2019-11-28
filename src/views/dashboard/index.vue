<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: Dashboard</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  },
  watch: {
    /**
     * @fun 监听路由改变
     */
    '$route': {
      handler(val) {
        console.log(val.path.split('/').slice(1))
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
