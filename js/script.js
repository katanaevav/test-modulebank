var canvas0 = document.getElementById('fin-draw');
var ctx0 = canvas0.getContext('2d');
var circle02 = new Path2D();
ctx0.fillStyle = "rgba(0,0,0,0.1)";
circle02.arc(21, 21, 20,  0, 2 * Math.PI);
ctx0.fill(circle02);
var circle0 = new Path2D();
ctx0.fillStyle = "#81C624";
circle0.moveTo(10, 10);
circle0.arc(21, 21, 20,  1.5 * Math.PI, 1.3 * Math.PI);
ctx0.fill(circle0);
var circle01 = new Path2D();
ctx0.fillStyle = "#FFFFFF";
circle01.arc(21, 21, 18, 0, 2 * Math.PI);
ctx0.fill(circle01);
ctx0.fillStyle = "#000000";
ctx0.font = '16px Arial';
ctx0.textBaseline = 'hanging';
ctx0.fillText('88', 12, 16);

var canvas1 = document.getElementById('safe-draw');
var ctx1 = canvas1.getContext('2d');
var circle1 = new Path2D();
ctx1.fillStyle = "#81C624";
circle1.moveTo(10, 10);
circle1.arc(21, 21, 20, 0, 2 * Math.PI);
ctx1.fill(circle1);
var circle11 = new Path2D();
ctx1.fillStyle = "#FFFFFF";
circle11.moveTo(1, 1);
circle11.arc(21, 21, 18, 0, 2 * Math.PI);
ctx1.fill(circle11);
ctx1.fillStyle = "#000000";
ctx1.font = '16px Arial';
ctx1.textBaseline = 'hanging';
ctx1.fillText('100', 7, 16);

var canvas2 = document.getElementById('cred-draw');
var ctx2 = canvas2.getContext('2d');
var circle2 = new Path2D();
ctx2.fillStyle = "#81C624";
circle2.moveTo(10, 10);
circle2.arc(21, 21, 20, 0, 2 * Math.PI);
ctx2.fill(circle2);
ctx2.fillStyle = "#FFFFFF";
ctx2.font = '23px Arial';
ctx2.textBaseline = 'hanging';
ctx2.fillText('1', 14, 7);
ctx2.font = '8px Arial';
ctx2.fillText('Класс', 10, 27);