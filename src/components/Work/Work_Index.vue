<template type="html">
  <div class="content_Index">
    <div class="content_left">
      <div class="layui-nav head">
        <div class="layui-nav-item title">微软中国</div>
        <router-link :to="{path: '/work'}" class="iconfont icon-more"></router-link>
      </div>
      <div class="work_container">
        <ul class="layui-nav layui-nav-tree border" style="background: none">
          <li class="layui-nav-item">
            <router-link :to="{path: '/'}" class="iconfont icon-daiban">待办</router-link>
            <span class="layui-nav-more raduis">6</span>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{path: '/'}" class="iconfont icon-daiban">待办</router-link>
            <span class="layui-nav-more raduis">6</span>
          </li>
          <li class="layui-nav-item">
            <router-link :to="{path: '/'}" class="iconfont icon-daiban">待办</router-link>
            <span class="layui-nav-more raduis">6</span>
          </li>
        </ul>
        <ul class="layui-nav layui-nav-tree business" style="width: 100%;background: none">
          <li class="layui-nav-item" v-for="(rs,index) in rst">
            <router-link :to="{path: '/work/business_'+index,query: {id: rs['ID']}}" style="margin-left: 30px;padding: 0;color:#252525">{{rs['ModelName']}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content_right">
      <router-view></router-view>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        rst: [],
        selectType: ''
      }
    },
    created () {
      this.$nextTick(function () {
        this.initDataRender();
      })
    },
    watch: {
      '$route': 'initDataRender'
    },
    methods: {
      initDataRender () {
        this.rst = JSON.parse(sessionStorage.getItem('doc'))
      }
    }
  }
</script>
<style>
  .content_Index{
    width: 100%;
    height: 100%;
    min-height: 600px;
    display: flex;
  }
  .content_left{
    flex: 0 0 300px;
    background: #f3f4f4;
  }
  .content_left .head{
    width: 100%;
    height: 50px;
    padding: 0;
    text-align: center;
    position: relative;
    background-color: #ececec;
  }
  .head .title{
    line-height: 50px;
    color: #252525;
    font-size: 16px;
    font-family: "Microsoft YaHei";
  }
  .head .icon-more:before{
    position: absolute;
    line-height: 50px;
    right:30px;
    top: 0;
    color: #9b9b9b;
  }
  .work_container .border{
    width: 100%;
  }
  .work_container .border:after{
    content: ' ';
    height: 1px;
    width: 240px;
    background: #cecfcf;
    margin: 0 auto;
    display: block;
  }
  .work_container .border .layui-nav-item{
    height: 50px;
    line-height: 50px;
    position: relative;
  }
  .work_container .border .layui-nav-item a,
  .work_container .business .layui-nav-item a{
    padding: 0;
    height: 50px;
    font-family: "Microsoft YaHei";
    margin-left: 30px;
    font-size: 15px;
    color: #252525;
  }
  .work_container .border .layui-nav-item .raduis{
    width: 20px;
    height: 20px;
    top: 50%;
    right: 30px;
    line-height: 20px;
    text-align: center;
    margin-top: -10px;
    color: #fcece9;
    border: 0;
    border-radius: 100%;
    background: #e63e11;
  }
  .work_container .border .layui-nav-item:hover,
  .work_container .business .layui-nav-item:hover{
    background: #d9e9f0;
  }
  .work_container .border .layui-nav-item a:hover,
  .work_container .business .layui-nav-item a:hover{
    background: none;
  }

  .content_right{
    width: 100%;
    display: inline-block;
  }
</style>
