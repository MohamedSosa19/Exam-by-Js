var subject1=window.prompt('Please Enter subject1');
var subject2=window.prompt('Please Enter subject2');
var subject3=window.prompt('Please Enter subject3');
var subject4=window.prompt('Please Enter subject4');
var subject5=window.prompt('Please Enter subject5');

var sum=Number(subject1)+Number(subject2)+Number(subject3)+Number(subject4)+Number(subject5);
document.getElementById('result12').innerHTML='Average is : ' +  sum/5;