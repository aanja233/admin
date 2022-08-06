<template>
  <el-container>
    <el-header>
      <component-header></component-header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <component-aside></component-aside>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
import componentAside from '@/components/componentAside.vue'
import componentHeader from '@/components/componentHeader.vue'

export default {
  name: 'amain',
  components: {
    componentAside,
    componentHeader
  }
}
</script>



<style>
</style>

