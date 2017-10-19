<template>
  <div id="app">
    <div class="body">
      <div class="serviceBlock">
        <ul class="layui-nav layui-nav-tree listTree">
          <li class="layui-nav-item">
            <router-link :to="{path: '/work'}">工作</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{path: '/work'}">工作</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{path: '/work'}">工作</router-link>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{path: '/work'}">工作</router-link>
          </li>
        </ul>
      </div>
      <div class="routerView">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  created () {
    var _= this;
    this.$nextTick(function () {
      _.$http({
        method: 'get',
        url: 'http://service.csb.zhongjitech.cn//VIEWAPI.ashx?Action=INIT_GETINDEXMENUNEW&P1=PCINDEX',
        headers:{
          "Authorization":"Yh6j9Xw3_nz6bq55ejZjHi5h2GA4RtI07GYPAOF8YTIxkTRlXH-YkmL8Y3sQmDAs"
        }
      }).then(function (res) {
        sessionStorage.setItem('doc', JSON.stringify(res.data['Result']));
      })
    })
  }
}
</script>

<style>
  @import "assets/font/iconfont.css";
  html,body,div,ul,li,img,p,i,b,a,h1,h2,h3,h4,h5,h6,button{
    padding: 0;
    margin: 0;
  }
  #app{
    width: 100%;
    height: 100%;
    min-height: 600px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
  }
  .body{
    width: 100%;
    height: 100%;
    display: flex;
  }
  .serviceBlock{
    flex: 0 0 74px;
    height: 100%;
    min-height: 600px;
  }
  .serviceBlock .listTree{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    min-height: 600px;
    color: #d1dee7;
    background: #00abf5;
  }
  .listTree a{
    padding: 0;
    text-align: center;
  }
  .routerView{
    width: 100%;
  }
</style>
