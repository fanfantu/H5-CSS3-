window.onload=function(){
  var music=document.getElementById("music");
  var audio=document.getElementsByTagName("audio")[0];
  var page1=document.getElementById("page1");
  var page2=document.getElementById("page2");
  var page3=document.getElementById("page3");


  //当音乐播放完毕后，自动停止光盘旋转效果
  audio.addEventListener("ended",function(event){
    music.style.animationPlayState="paused"
  },false);
  //音乐图标，控制音乐播放效果
  music.addEventListener("touchstart",function(event){
      if(audio.paused){
        audio.play();
        //this.setAttribute("class","play");
        this.style.animationPlayState="running";
      }else{
        audio.pause();
        //this.setAttribute("class","");
        //兼容性有问题，安卓手机不兼容
        this.style.animationPlayState="paused";
      }
    },false);
  page1.addEventListener("touchstart",function(event){
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "block";
    page3.style.top="100%";

    setTimeout(function(){
      page2.setAttribute("class","page fadeOut");
      page3.setAttribute("class","page fadeIn");
    },5500)
  },false)
}