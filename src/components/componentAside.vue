<template>
  <el-aside>
    <el-menu style="
   height: 100%;width: 100%;
  border: none" default-active="2" background-color="rgb(33, 104, 186)" text-color="black" active-text-color="white"
      :collapse="isCollapse" @open="handleOpen" @close="handleClose">
      <h3>{{ isCollapse ? '后台' : '通用后台管理系统' }}</h3>
      <el-menu-item @click="clickMenu(item)" v-for=" item in noChildren" :index="item.path + ''" :key="item.path">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.path + ''" :key="item.path">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group v-for="(subItem) in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" index="subItem.path">{{ subItem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>

export default {
  name: 'componentAside',
  data() {
    return {
      isCollapse: this.$store.state.tab.isCollapse,
      // isCollapse: false,
      menu: [
        {
          path: '/',
          name: 'home',
          label: '首页',
          icon: 's-home',
          url: 'Home/Home'
        },
        {
          path: '/mall',
          name: 'mall',
          label: '商品管理',
          icon: 'video-play',
          url: 'MallManage/MallManage'
        },
        {
          path: '/user',
          name: 'user',
          label: '用户管理',
          icon: 'user',
          url: 'UserManage/UserManage'
        },
        {
          label: '其他',
          icon: 'location',
          children: [
            {
              path: '/page1',
              name: 'page1',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/page2',
              name: 'page2',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        }
      ]
    }
  },
  computed: {
    noChildren() {
      return this.menu.filter(item => !item.children)
    },
    hasChildren() {
      return this.menu.filter(item => item.children)
    }
  },
  methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name
      })
    },
    // isCollapse() {
    //   return this.$store.state.tab.isCollapse
    // },
  },
}
</script>



<style>
h3 {
  color: #fff;
  text-align: center;
  line-height: 48px;
}
</style>

