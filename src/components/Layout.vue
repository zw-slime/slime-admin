<template>
  <el-container>
    <el-aside class="sidebar" style="width: 250px">
      <div class="info">
        <div class="img"></div>
        <div class="name">zw</div>
        <div class="dec">
          好好学习天天向上好好学习天天向上好好学习天天向上好好学习天天向上
        </div>
      </div>
      <el-menu
        default-active="1"
        class="el-menu-wrap"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>用户</span>
          </template>
          <el-menu-item index="1-1">用户管理</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">文章</span>
          </template>
          <el-menu-item index="2-1">文章管理</el-menu-item>
          <el-menu-item index="2-2">编辑文章</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">文章类型</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {
      activeIndex: '1'
    };
  }
};
</script>

<style scoped>
.el-container {
  width: 100vh;
  min-height: 100vh;
}
.sidebar {
  background-color: #545c64;
  padding: 20px 0;
}
.el-menu-wrap {
  border: none;
}
.info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid #333;
}
.img {
  width: 100px;
  height: 100px;
  background: url('../assets/images/logo.png') no-repeat;
  background-size: cover;
  margin-bottom: 10px;
}
.name {
  color: #fff;
  line-height: 24px;
  font-size: 18px;
  width: 80%;
  margin: 0 auto 10px;
  text-align: center;
}
.dec {
  font-size: 16px;
  color: #fff;
  line-height: 24px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
</style>
