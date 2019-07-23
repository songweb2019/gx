//当窗口的内容都加载完成之后才查找按钮绑定事件
//$(window).load(function(){...})
//$(window).on("load",function(){ ... }) == $(window).load(function(){...})
// $(document).ready(function(){ ... })  == $(function(){ ... })
$(function(){
  //DOM四步
   //1.查找触发事件的元素  
   //2.绑定事件处理函数
   //3.查找要修改的元素    
   //4.修改元素

     //点击事件
  //点击小图片显示大图片 
  $(".logoimg").click(function(){
    $(".hidelogo").show()
  })
  //点击大图片隐藏
  $(".lglogoimg").click(function(){
    $(".hidelogo").hide()
  })
})