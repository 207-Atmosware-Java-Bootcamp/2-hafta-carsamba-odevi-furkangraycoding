
var cumle=prompt(" bir cümle giriniz");
var degistirilmisCumle=String(prompt("bir cümle giriniz"));
document.write("sentence: "+cumle+"<br>");

document.write("char number: "+cumle.length+"<br>");

document.write("char number with deleted space: "+cumle.replace(" ","").length +"<br>");

document.write("all lower: "+cumle.toLowerCase()+"<br>");

document.write("all upper: "+cumle.toUpperCase()+"<br>");

document.write("first letter: "+cumle.charAt("0")+"<br>");

document.write("isStartWith Java  "+cumle.startsWith('java')+"<br>");

document.write("isEnded with ben js öğreniyorum" +cumle.endsWith('ben js öğreniyorum')+"<br>")

document.write("first four characters: "+cumle.substring(0,4)+"<br>")

document.write("Changed sentence: "+cumle.replace(cumle,degistirilmisCumle)+"<br>")


