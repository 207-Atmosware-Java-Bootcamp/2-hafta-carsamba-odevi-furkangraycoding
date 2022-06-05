var num1=Number(prompt("sayi 1 giriniz"));
var num2=Number(prompt("sayi 2 giriniz"));
var min=Math.min(num1,num2);
var max = Math.max(num1,num2);
document.write("sayılar:"+num1+", "+num2+"<br/>");

document.write("Max: "+ min+"<br/>");

document.write("Min: "+ max+"<br/>");

document.write("sqrt of min: "+Math.sqrt(Math.abs(min))+"<br/>");

document.write("round to sqrt of min: "+Math.ceil(Math.sqrt(Math.abs(min)))+"<br/>")

document.write("abs of max: "+Math.abs(max)+"<br/>");

document.write("min power of max: "+Math.pow(Math.abs(max), Math.abs(min))+"<br/>");

