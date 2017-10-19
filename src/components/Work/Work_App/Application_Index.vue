<template type="html">
  <div class="app_container">
      <div class="layui-nav app_title">
        <div class="layui-nav-item">全部应用</div>
        <div class="operation">
          <button class="layui-btn layui-btn-primary iconfont icon-bianji" v-on:click="edits">{{operationEdit}}</button>
          <button data-method="notice" data-type="auto" class="newAdd layui-btn layui-btn-primary  iconfont icon-xinzeng">新增类</button>
        </div>
      </div>
      <div class="category_container" style="background: #fff">
        <category-container :isEdit="isEditTrue" :items="lists"></category-container>
      </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import categoryContainer from './category_container'
  export default {
    data () {
      return {
        operationEdit: '编辑',
        lists: [],
        isEditTrue: false,
        text: ''
      }
    },
    created () {
      this.$nextTick(function () {
        var that=this;
        layui.use('layer', function(){ //独立版的layer无需执行这一句
          var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
          //触发事件
          var active = {
            notice: function(){
              //示范一个公告层
              layer.open({
                type: 1
                ,title: false //不显示标题栏
                ,closeBtn: false
                ,area: '355px;'
                ,shade: 0.5
                ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                ,btn: ['取消', '确认']
                ,btnAlign: 'c'
                ,content: '<div class="category-body">' +
                  '<div class="category-title">请输入应用分类名称</div>'+
                  '<div class="navigation-title-name inputText">' +
                    '<input class="category-name" type="text" placeholder="分类名称" />' +
                    '<i class="iconfont icon-shanchu"></i>'+
                  '</div>'+
                '</div>'
                ,success: function(layero){
                  var categoryBody = layero.find('.category-body');
                  var categoryTitle = layero.find('.category-title');
                  var inputText = layero.find('.inputText');
                  var categoryName = layero.find('.inputText>.category-name');
                  var categoryI = layero.find('.inputText>i');

                  var btn0 = layero.find('.layui-layer-btn0');
                  var btn1 = layero.find('.layui-layer-btn1');
                  layero.css({
                    'top': '50%',
                    'marginTop': '-100px',
                    'border-radius':'5px',
                    'background': '#fff',
                    'height': '200px',
                    //1349-355=   994/2  497+  355/2  178  497+178= 675
                    'left': (Math.ceil($(window).width()-layero.width())/2)+Math.ceil(layero.width()/2)+'px'
                  });
                  categoryBody.css({
                    'textAlign': 'center',
                    'padding': '20px',
                    'backgroundColor': '#fff',
                    'color': '#fff',
                    'fontWeight': 300
                  });
                  categoryTitle.css({
                    'color': '#252525',
                    'margin': '20px 0'
                  });
                  inputText.css({
                    'position': 'relative'
                  });
                  categoryName.css({
                    'width': '311px',
                    'outline': 0,
                    'height': '38px',
                    'padding': '0 8px',
                    'boxSizing': 'border-box'
                  });
                  categoryI.css({
                    'position': 'absolute',
                    'right': '10px',
                    'lineHeight': '38px',
                    'display': 'none',
                    'fontSize': '20px'
                  });
                  categoryName.on('focus', function () {
                    categoryName.attr('placeholder','');
                    categoryI.css({
                      'display': ''
                    })
                  })
                  categoryName.on('blur', function () {
                    if(categoryName.val() == '') {
                      categoryName.attr('placeholder','分类名称');
                      categoryI.css({
                        'display': 'none'
                      });
                    }else {
                      categoryI.hover(function () {
                        categoryI.css({
                          'color': '#00abf5'
                        })
                      },function () {
                        categoryI.css({
                          'color': ''
                        })
                      })
                      categoryI.on('click',function () {
                        categoryName.val('');
                      })
                    }
                  })
                  btn0.css({
                    'background':'#d2d2d2',
                    'color':'#fff',
                    'border': 'none',
                    'width': '78px',
                    'height':'30px'
                  });
                  btn1.css({
                    'background':'rgb(30, 159, 255)',
                    'color':'#fff',
                    'border':'none',
                    'width': '78px',
                    'height':'30px',
                    'marginLeft': '46px'
                  });
                  btn0.on('mouseover',function () {
                    btn0.css({
                      'background':'rgb(30, 159, 255)'
                    });
                    btn1.css({
                      'background':'#d2d2d2'
                    });
                  });
                  btn1.on('mouseover',function () {
                    btn1.css({
                      'background':'rgb(30, 159, 255)'
                    });
                    btn0.css({
                      'background':'#d2d2d2'
                    });
                  });
                  btn0.on('click',function () {
                    $('.newAdd').text('新增类');
                  })
                  btn1.on('click',function () {//预留新增类接口

                  })
                }
              });
            }
          };
          $('.newAdd').on('click', function(){
            console.log($('.newAdd'))
           if($('.newAdd').text()== '新增类') {
             $('.newAdd').text('添加类');
           }
            var othis = $(this), method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
          });
        });
//        that.$http({
//          method: 'get',
//          url: 'http://service.csb.zhongjitech.cn//VIEWAPI.ashx?Action=INIT_GETINDEXMENUNEW&P1=PCINDEX',
//          headers:{
//            "Authorization":"Yh6j9Xw3_nz6bq55ejZjHi5h2GA4RtI07GYPAOF8YTIxkTRlXH-YkmL8Y3sQmDAs"
//          }
//        }).then(function (res) {
//          that.lists=res.data['Result'];
//        })
        this.globalRender();
      });

    },
    props: ['selectType'],
    methods: {
      edits () {
        this.isEditTrue = !this.isEditTrue
        if(this.isEditTrue) {
          this.operationEdit = '确定';
        }else {
          this.operationEdit = '编辑';
        }
      },
      globalRender () {
        this.lists = JSON.parse(sessionStorage.getItem('doc'))
      }
    },
    components: {
      categoryContainer
    }
  }
</script>
<style>
  .app_container{
    width: 100%;
  }
  .app_title{
    width: 100%;
    padding: 0;
    text-align: center;
    background: #ffffff;
  }
  .app_title .layui-nav-item{
    height: 50px;
    line-height: 50px;
    position: relative;
    color: #252525;
    font-size: 16px;
    font-family: "Microsoft YaHei";
  }
  .operation{
    padding: 0;
    color: #9b9b9b;
    position: absolute;
    top: 0;
    right: 20px;
    line-height: 50px;
  }
  .operation button{
    font-size: 14px;
    padding: 0;
    border: none;
    height: 50px;
    line-height: 50px;
    box-sizing: border-box;
    vertical-align: unset;
    color: #9b9b9b;
  }
  .operation button:before{
    margin-right: 8px;
  }
</style>
