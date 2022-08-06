<template>
    <el-header style="display:flex; justify-content:space-between;background-color: rgb(33, 104, 186);">
        <div class="l-content">
            <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
            <p style="color:thistle">首页</p>
        </div>
        <div class="r-content">
            <el-dropdown trigger="click" size="mini">
                <div style="margin-top:4px;"><img class="user" :src="userImg" /> </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </el-header>
</template>

<script>
export default {
    name: 'componentHeader',
    data() {
        return {
            userImg: require('../assets/imges/user.png')
        }
    },
    methods: {
        handleMenu() {
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style>
img {
    width: 50px;
    height: 50px;
    margin: 0;

}


.l-content {
    display: flex;
    align-items: center;
}
</style>