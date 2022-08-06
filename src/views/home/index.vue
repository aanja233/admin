<template>
    <el-row class="home" :gutter="20">
        <el-col :span="12" style="margin-top:20px">
            <el-card shadow="hover">
                <div>
                    <img :src="userImg" />
                    <div>
                        <p>Admin</p>
                        <p>超级管理员</p>
                    </div>
                </div>
                <div>
                    <span>
                        上次登录时间:
                    </span>
                    <span>2022-8-6</span>
                </div>
            </el-card>
            <el-card>
                <el-table :data="tableData">
                    <el-table-column v-for="(val, index) in tableLabel" :key="index" :prop="index" :label="val">
                    </el-table-column>
                </el-table>
            </el-card>
        </el-col>
        <el-col span="12">
            <div>
                <el-card v-for="item in countData" :key="item.name" style="display: flex; padding: 0 ">
                    <i class="icon" :class="`el - icon - ${item.icon}`" :style="{ background: item.color }"></i>
                    <div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.value }}</p>
                    </div>
                </el-card>

            </div>
        </el-col>
    </el-row>
</template>
<script>
import { getData } from '../../api/data'
export default {
    name: 'home',
    data() {
        return {
            userImg: require('@/assets/imges/user.png'),
            tableData: [
                {
                    name: 'oppo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: 'vivo',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '苹果',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '小米',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '三星',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                },
                {
                    name: '魅族',
                    todayBuy: 100,
                    monthBuy: 300,
                    totalBuy: 800
                }
            ],
            tableLabel: {
                name: '课程',
                todayBuy: '今日购买',
                monthBuy: '本月购买',
                totalBuy: '总购买'
            },
            countData: [
                {
                    name: "今日支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "今日收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "今日未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
                {
                    name: "本月支付订单",
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9",
                },
                {
                    name: "本月收藏订单",
                    value: 210,
                    icon: "star-on",
                    color: "#ffb980",
                },
                {
                    name: "本月未支付订单",
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef",
                },
            ],
        }
    },
    mounted() {
        getData().then(res => {
            console.log(res)
        })
    }
}



</script>