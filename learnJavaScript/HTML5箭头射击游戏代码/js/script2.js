"use strict";
var stage = {
    w:1280,
    h:720
};
var _pexcanvas = document.getElementById("canvas");
_pexcanvas.width = stage.w;
_pexcanvas.height = stage.h;
// 获得用来绘图的contex对象
var ctx = _pexcanvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(200,200);
ctx.stroke();

var pointer = {
    x:0,
    y:0
};

var scale = 1;
var portrait = true;
var loffset = 0;
var toffset = 0;
var mxpos = 0;
var mypos = 0;

function drawArrow(fromx, fromy, tox, toy,lw,hlen,color) {
    var dx = tox - fromx;
    var dy = toy - fromy;
    var angle = Math.atan2(dy, dx);
    ctx.fillStyle=color;  // 设置填充颜色
    ctx.strokeStyle=color;
    ctx.lineCap = "round";
    ctx.lineWidth = lw;
    ctx.beginPath();  // beginPath() 方法开始一条路径，或重置当前的路径。
    ctx.moveTo(fromx, fromy);  // 移动到指定坐标点
    ctx.lineTo(tox, toy);  // 从当前坐标点绘制到指定坐标点的直线
    ctx.stroke();  // 执行绘制

    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - hlen * Math.cos(angle - Math.PI / 6), toy - hlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(tox - hlen * Math.cos(angle)/2, toy - hlen * Math.sin(angle)/2);
    ctx.lineTo(tox - hlen * Math.cos(angle + Math.PI / 6), toy - hlen * Math.sin(angle + Math.PI / 6));
    // closePath的意思是关闭路径，不是结束路径，它只是将路径的终点与起点相连，不是开始一个新路径。
    ctx.closePath();  // closePath() 方法创建从当前点到开始点的路径。
    ctx.stroke();
    ctx.fill();
}

var colors = ['#1abc9c','#1abc9c','#3498db','#9b59b6','#34495e','#16a085','#27ae60','#2980b9','#8e44ad','#2c3e50','#f1c40f','#e67e22','#e74c3c','#95a5a6','#f39c12','#d35400','#c0392b','#bdc3c7','#7f8c8d'];

ctx.clearRect(0,0,stage.w,stage.h);  // 在给定矩形内清空一个矩形
for (var i =0;i<200;i++) {
    var angle = Math.random()*Math.PI*2;
    var length = Math.random()*250+50;
    var myx=360+Math.sin(angle)*length;
    var myy=360-Math.cos(angle)*length;
    drawArrow(myx,myy,myx+length/6*Math.sin(angle),myy-length/6*Math.cos(angle),length/30,length/30,'#c0392b');
}


