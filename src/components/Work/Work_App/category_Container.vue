<template type="html">
  <div class="categories_list">
    <div class="layui-collapse categories-collapse" style="border: none;height: 0;" lay-accordion="">
      <div class="layui-colla-item categroy_title" v-for="item in items"  v-if="items.length>0">
        <h2 class="layui-colla-title box-border categroy">
          <span class="categoryName">{{item['ModelName']}}</span>
          <span class="categroy_opreation" style="display: none;" v-show="isEdit">
              <i class="iconfont icon-bianji" style="font-size: 14px;" v-on:click="test($event)"></i>
              <i class="iconfont icon-lajitong" style="font-size: 14px"></i>
          </span>
        </h2>
        <div class="layui-colla-content layui-show" style="padding:0;">
          <div class="layui-nav navigation" style="padding: 0">
            <div class="layui-nav-item app_navigation" v-for="list in item['FunData'] ">
              <router-link :to="{path: list['PageUrl']}" style="padding: 0;display: unset;">
                <img src="http://localhost:8080/static/icon/Customermanagement.png" alt="" />
                <span>{{list['PageName']}}</span>
              </router-link>
              <i class="iconfont icon-shanchu" v-show="isEdit"></i>
            </div>
            <div class="layui-nav-item app_navigation additional" :dataMethod="notice" v-on:click="alert(this,$event)">
              <img src="http://localhost:8080/static/icon/add.png" alt="" />
              <span>添加</span>
            </div>
          </div>
        </div>
      </div>
      <div class="layui-colla-item categroy_title">
        <h2 class="layui-colla-title box-border categroy">
          <span class="categoryName">快捷网址</span>
          <span class="categroy_opreation" style="display: none;" v-show="isEdit">
              <i class="iconfont icon-bianji" style="font-size: 14px;" v-on:click="test($event)"></i>
              <i class="iconfont icon-lajitong" style="font-size: 14px"></i>
          </span>
        </h2>
        <div class="layui-colla-content layui-show" style="padding:0;">
          <div class="layui-nav navigation" style="padding: 0">
            <div class="layui-nav-item app_navigation" v-for="categorylist in Categorieslist">
              <router-link :to="{path: categorylist['URL']}" style="padding: 0;display: unset;">
                <img src="http://localhost:8080/static/icon/Customermanagement.png" alt="" />
                <span>{{categorylist['Title']}}</span>
              </router-link>
              <i class="iconfont icon-shanchu" v-show="isEdit"></i>
            </div>
            <div class="layui-nav-item app_navigation additional" :dataMethod="notice" v-on:click="alert(this,$event)">
              <img src="http://localhost:8080/static/icon/add.png" alt="" />
              <span>添加</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        notice: 'notice',
        Categorieslist: []
      }
    },
    created () {
      var _=this;
      this.$nextTick(function () {
        layui.use(['layer', 'upload'], function(){ //独立版的layer无需执行这一句
          var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
          var upload = layui.upload;
          //触发事件
          _.actives = {
            notice: function(){
              //示范一个公告层
              layer.open({
                type: 1,
                //不显示标题栏
                title: false,
                closeBtn: false,
                area: '355px;',
                shade: 0.5,
                //设定一个id，防止重复弹出
                id: 'LAY_layuipro',
                btn: ['取消', '确认'],
                btnAlign: 'c',
                //拖拽模式，0或者1
                moveType: false,
                btnAction: '.layui-layer-btn1',
                content: '<div class="navigation-body">' +
                '<h3 class="navigation-h2">添加应用导航</h3>'+
                '<div class="navigation-content">' +
                '<div class="navigation-title" style="margin: 20px 0">分类名称</div>' +
                '<div class="navigation-title-name inputText">' +
                '<input type="text" placeholder="分类名称" />'+
                '<i class="iconfont icon-shanchu" style="display: none"></i>'+
                '</div>'+
                '<div class="navigation-title-url inputText">' +
                '<input type="text" placeholder="链接地址" />'+
                '<i class="iconfont icon-shanchu" style="display: none"></i>'+
                '</div>'+
                '<div class="navigation-title-file">' +
                '<div class="layui-upload">'+
                '<button type="button" style="text-align: center;width: 120px;height: 120px;background: #fff;padding: 0;border: 1px solid #9b9b9b;box-sizing:border-box;" class="layui-btn" id="test1">' +
                '<img class="preview" src="http://localhost:8080/static/icon/add.png" alt="" style="width:100%; height:100%; " />'+
                '</button>'+
                '<span style="color:#00abf5;margin-left: 10px">120*120</span>'+
                '<div style="text-align: center;width: 120px;font-size: 14px;color: #9b9b9b;margin-top: 10px;">应用图标</div>'+
                '</div>'+
                '</div>'+
                '</div>' +
                '</div>',
                success: function(layero){
                  var navigationBody = layero.find('.navigation-body');
                  var navigationH2 = layero.find('.navigation-h2');
                  var inputText = layero.find('.inputText');
                  var inputTextInput = layero.find('.inputText>input[type="text"]');
                  var inputTextI = layero.find('.inputText>i');
                  var navigationTitleInput = layero.find('.inputText>input[type="text"]');
                  var layuiLayerBtn0 = layero.find('.layui-layer-btn0');
                  var layuiLayerBtn1 = layero.find('.layui-layer-btn1');
                  layero.css({
                    'top': '50%',
                    'marginTop': '-293px',
                    'height': '586px',
                    'left': (Math.ceil($(window).width()-layero.width())/2)+Math.ceil(layero.width()/2)+'px'
                  })
                  navigationBody.css({
                    'padding': '30px 20px',
                    'height': '420px'
                  });
                  navigationH2.css({
                    'textAlign': 'center',
                    'color': '#000000',
                    'fontSize': '16px'
                  });
                  inputText.css({
                    'width': '311px',
                    'position': 'relative',
                    'margin-bottom': '20px'
                  });
                  inputTextInput.css({
                    'width': '311px',
                    'height': '38px',
                    'padding': '0 8px',
                    'boxSizing': 'border-box'
                  });
                  inputTextI.css({
                    'position': 'absolute',
                    'right': '5px',
                    'lineHeight': '38px'
                  });
                  layuiLayerBtn0.css({
                    'width': '78px',
                    'height': '30px',
                    'border': 'none',
                    'backgroundColor': '#9b9b9b',
                    'color': '#fff'
                  })
                  layuiLayerBtn1.css({
                    'width': '78px',
                    'height': '30px',
                    'border': 'none',
                    'backgroundColor': '#00abf5',
                    'color': '#fff',
                    'marginLeft': '46px'
                  })
                  var texts= '';

                  navigationTitleInput.on('focus', function () {
                    texts=$(this).attr('placeholder')
                    $(this).attr('placeholder','')
                    $(this).siblings('i').css({
                      'display': ''
                    })
                  });

                  navigationTitleInput.on('blur', function () {
                    $(this).attr('placeholder',texts);
                    $(this).siblings('i').css({
                      'display': 'none'
                    })
                  });
                  layuiLayerBtn0.on('mouseover', function () {
                    layuiLayerBtn0.css({
                      'backgroundColor': '#00abf5'
                    })
                    layuiLayerBtn1.css({
                      'backgroundColor': '#9b9b9b'
                    })
                  });
                  layuiLayerBtn1.on('mouseover', function () {
                    layuiLayerBtn1.css({
                      'backgroundColor': '#00abf5'
                    })
                    layuiLayerBtn0.css({
                      'backgroundColor': '#9b9b9b'
                    })
                  });

                  layuiLayerBtn1.on('click', function () {
                    _.$http({
                      method: 'post',
                      url:'http://service.csb.zhongjitech.cn/VIEWAPI.ashx?ACTION=QYWD_ADDTEXT',
                      params: {
                        P1: {'MsgContent':'','title': 'leihong','URL': 'http://abcd.com','Tags':'qwer'},
                        P2: "link"
                      },
                      headers:{
                        "Authorization":"Yh6j9Xw3_nz6bq55ejZjHi5h2GA4RtI07GYPAOF8YTIxkTRlXH-YkmL8Y3sQmDAs"
                      }
                    }).then(function (res) {
                    },function (err) {
                      alert(err);
                    })
                  })

                  var uploadRes = upload.render({
                    elem: '#test1',
                    url: 'http://localhost:82/upload.php',
                    before (obj) {
                      obj.preview(function(index, file, result){
                        $('#test1>.preview').attr('src', result); //图片链接（base64）
                        $('#test1').append('<input class="iconHidden" type="hidden" value="'+result+'" />')
                       });
                    },
                    done (res) {
                      console.log(res)
                    }
                  })

                }
              });
            }
          };

        });
//        _.$http({
//          method: 'get',
//          url:'http://service.csb.zhongjitech.cn//VIEWAPI.ashx?Action=QYWD_COLLECTLIST&P1=link',
//          headers:{
//            "Authorization":"Yh6j9Xw3_nz6bq55ejZjHi5h2GA4RtI07GYPAOF8YTIxkTRlXH-YkmL8Y3sQmDAs"
//          }
//        }).then(function (res) {
//          _.Categorieslist= res.data['Result'];
//          console.log(_.Categorieslist)
//        })

      })
    },
    props: ['isEdit', 'items'],
    methods: {
      test ($event) {
        console.log('1')
      },
      alert (_,$event) {
        console.log($event)
        this.actives[this.notice] ? this.actives[this.notice].call(_, $event) : '';
      }
    }
  }
</script>
<style>
  .categories_list{
    min-height: 600px;
    height: 100%;
    overflow-y: scroll;
  }
  .categories_list::-webkit-scrollbar {
    display: none;
  }
  .categroy_title{
    border: none;
  }
  .categroy_title:after{
    content: ' ';
    border-bottom: 4px solid green;
    width: 100%;
    display: block;
  }
  .categroy_title:last-child:after{
    content: '';
    border-bottom: 4px solid #fff;
    display: block;
  }
  .categroy_title .categroy{
    padding: 0;
    height: 38px;
    line-height: 38px;
    position: relative;
    box-sizing: border-box;
    background: #fff;
  }
  .categroy span.categoryName{
    margin:0 8px 0 20px;
  }
  .categroy .icon-lajitong{
    position: absolute;
    right: 20px;
  }
  .navigation{
    min-width: 650px;
    padding: 0;
    line-height: 0;
    position: static;
    background: none;
  }
  .navigation .app_navigation{
    vertical-align: unset;
    line-height: 0;
    width: 25%;
    text-align: center;
    margin: 20px 0 25px 0;
    position: relative;
  }
  .app_navigation a{
    padding: 0;
  }
  .app_navigation .icon-shanchu{
    font-size: 24px;
    position: absolute;
    right: 50%;
    margin-right: -34.5px;
    top: 0;
  }
  .navigation .app_navigation img{
    display: block;
    margin: 0 auto;
  }
  .navigation .app_navigation span{
    display: block;
    margin-top:15px;
    color: #252525;
  }


</style>
