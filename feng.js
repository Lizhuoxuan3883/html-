//斐波那契数列
function feibo(num){
	if(num == 0 || num ==1){
		return 1;
	}else{
	return feibo(num-1)+feibo(num-2);
	}
}

//递归（阶乘）
function jiecheng(num){
	if(num<=1){
		return 1;
	}else{
		return num*jiecheng(num-1);
	}
}

//产生[min,max]间的随机数
function int(min,max){
	return min+parseInt((max-min+1)*Math.random());
}

//产生N个随机数
function Int(num){
	var arr = [];
	for(var a= 0;a<num;a++){
	 arr.push(parseInt(Math.random()*10));
	}
	return arr.join("");
}


//判断年月日是否正确
function isyear(year){
	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}else{
		return false;
	}
}
function day(year,month,date){
		if(month<1 || month>12){
				return false;
			}
		if(date<1 || date>31){
				return false;
			}	
		if(month == 4 || month == 6 || month==9 || month==11){
				if(date == 31){
					return false;
					}
			}
		else if(month == 2){
				if(isyear(year)==true){
						if(date>29){
								return false;
							}
					}else{
						if(date>28){
								return false;
							}
						}
			}return true;
}

//冒泡排序
function maopao(arr){
	for(var i=0;i<arr.length-1;i++){
			for(var j=0;j<arr.length-1-i;j++){
				if(arr[j]>arr[j+1]){
					var temp = arr[j];
					arr[j] = arr[j+1];
					arr[j+1] = temp;
				}
			}
	}
}

//获取日期
function createMyTime(d) {
	var str = "";
	// getFullYear 获取完整的年份
	str += d.getFullYear();
	str += "年";
	str += (d.getMonth() + 1);
	str += "月";
	// getDate 是用于获取第几天
	str += d.getDate();
	str += "日";
	str += " ";
    // 拼接时间字符串
	str += d.getHours();
	str += ":";	
	str += d.getMinutes();
	str += ":";
	// 获取秒
	str += d.getSeconds();
	str += ".";
	// 获取毫秒
	str += d.getMilliseconds();
	return str;
}

//判断某年份是否为闰年
 function isRun(year){
 	if((year%4==0 && year%100!=0)||(year%400==0)){
		return true;
	}else{
		return false;
	}
 }
 //将日期格式化输出
 function dateFormatting(d){
 	var str = "";
	str += d.getFullYear();
	str +="-";
	str += (d.getMonth() + 1);
	str +="-";
	str += d.getDate();
	return str;
 }

 // 获得某个月份的天数
function getDaysByYearMonth(year,month){
	var d1 = new Date();
	d1.setFullYear(year);
	d1.setMonth(month-1);
	d1.setDate(1);
	
	var d2 = new Date();
	d2.setFullYear(year);
	d2.setMonth(month);
	d2.setDate(1);
	
	return parseInt((d2.getTime()-d1.getTime())/(24*3600*1000));
	
}
// 判断两个日期相差的天数
function between(endDate,nowDate){
	var date = (endDate.getTime())-(nowDate.getTime());
	date = date/1000;
	date = parseInt(date/3600);
	date = date/24;
	return date;	
}
//获得N天以后的日期
function afterDayBaseDate(d,num){
	return d.setTime(d.getTime()+num*24*3600*1000);
}
function afterDay(num){
	var d = new Date();
    var dNew =  afterDayBaseDate(d,num);
	return dNew;
}

//获取当前元素的上一个节点；
function getPreviusElem(oElem){
	oElem = oElem.PreviusSibling;
	while(oElem.nodeType !=1){
		oElem = oElem.PreviusSibling;
	}
}

// 作用： 获取当前 oElem 的下一个【元素】节点
 function getNext(oElem){
	oElem = oElem.nextSibling;
	while(oElem.nodeType!=1){
		oElem = oElem.nextSibling;
	}
	return oElem;
}                                                                                             


// 解决 IE 下不同获取同一 className

// 思路
// 1. 首先获取网页上所有的节点
// 2. 筛选节点中 class == className 的节点
// 3. 用数组存储满足条件的节点，并返回
function getEleClassName(a){
	var allNode = document.getElementsByTagName("*");
	var arr = [];
	for(var i = 0;i<allNode.length;i++){
		if(allNode[i].className ==a){
			arr.push(allNode[i]);
		}
	}
	return arr;
}

//产生一个随机颜色
function createColor(){
	var red = parseInt(Math.random()*256);
	var blue = parseInt(Math.random()*256);
	var green = parseInt(Math.random()*256);

	red = red.toString(16);
	blue = blue.toString(16);
	green = green.toString(16);

	if(red.length<2){
		red = "0"+red;
	}
	if(blue.length<2){
		blue = "0"+blue;
	}
	if(green.length<2){
		green = "0"+green;
	}
	var color = "#"+red+blue+green;
	return color;
}

//设置cookie
function setCookie(name,val,iDay){
	//方法一
	/*var odate = new Date();
	odate.setDate(odate.getDate()+iDay);
	var str = ""+name + "=" + val +"; expires =" + odate;
	document.cookie = str;
	return;*/
	//方法二
	var obj = new Date();

	// 得到10天后的日期
	obj.setDate( obj.getDate() + iDay );

	// "expires=" + obj
	// "expires=" + 日期对象
	// 【注意】 expires 前一定是 分号！
	// document.cookie = "user=jobs;expires=" + obj;
	document.cookie = "" + name + "=" + val + ";expires=" + obj;

}


// 获取 cookie 的值
function getCookie(searchName) {

	// 获取当前的cookie值
	var str = document.cookie;

	// 先分割字符串
	var arr = str.split("; ");

	for (var i = 0; i < arr.length; i++) {
		var arr2 = arr[i].split("=");

		var name = arr2[0];
		var val = arr2[1];

		if (name == searchName) {
			return val;
			//alert(val);
		}
	}

	// 如果找不到名字，那么返回空字符串
	return "";
}


// 删除 cookie
// 将时间设置成当前时间的值就可以了
function removeCookie(name) {

	// 设置 名字为 name 的cookie的过期时间为 10天前
	setCookie(name, "", -1);

	// document.cookie = "name=123;expires=" + obj;

}

function getPreviusElem(oElem){
	oElem = oElem.PreviusSibling;
	while(oElem.nodeType !=1){
		oElem = oElem.PreviusSibling;
	}
}

//去重
//ai = [1,2,3,4,4,5,6,7,8,8,8,8,9,9,9,9,9];
function quchong(a1){
	a1.sort(function(a,b){
		a = parseInt(a);
		b = parseInt(b);
		return a - b;
	});
	var arr = [];
	arr.push(a1[0]);
	for(var i = 1;i<a1.length;i++){
		if(a1[i] != a1[i-1]){
			arr.push(a1[i]);
		}
	}
	return arr;
}

//加密
//psw = 加密的内容;
//num = 加密长度;
function jiami(psw,num){
	var str = "";
	for(var i = 0 ;i<psw.length;i++){
		var code = psw.charCodeAt(i);
		code += num;
		var c = String.fromCharCode(code);
		str += c;
	}
	return str;
}

//解密
// 1. 取出 ascii 码
// 2. ascii 码 加密的逆过程
// 3. 还原字符
function jiemi(psw,num){
	var str = "";
	for (var i = 0; i <psw.length; i++){
		var code = psw.charCodeAt(i);
		code -= num;
		var c = String.fromCharCode(code);
		str += c;
	}
	return str;
}


// 传入"user=jobs; psw=123; age=18; "; 字符串
// 传入 要找的名字，将对应的值返回来
// 思路
// 1. 定义函数
// 2. 规定传入的参数
// 3. 看看有没有返回值
function getKeyValue(str, name) {
	var arr = str.split("; ");
	for (var i = 0; i < arr.length; i++) {
		// user=jobs
		var arr2 = arr[i].split("=");
		if (arr2[0] == name) {
			// 找到了
			return arr2[1];
		}
	}
	// 确保不管找不找得到都有返回值
	return "";
}

//常见正则
/*
检查邮政编码//共 6 位数字，第一位不能为 0
/^[1-9]\d{5}$/

检查文件压缩包  //xxx.zip\xxx.gz\xxx.rar
/^\w+\.(zip|gz|rar)$/   war3.zipgz

删除多余空格  //
str.replace(/\s+/,'');

删除首尾空格
str.replace(/^\s+/,'');
str.replace(/\s+$/,'');

电子邮件( xxxxx @ xxxx(.xxxx)+)
/^\w+@\w+(\.\w+)+$/

手机号
/^[1-3]\d{10}$/

身份证
/^\d{17}(\d|X)$/

日期  (xxxx-xx-xx| xxxx/xx/xx | xxxx.xx.xx)
/^\d{2}|\d{4}[-\/\.]\d{2}[-\/\.]\d{2}$/

只能输入中文
str.replace(/[^\u4e00-\u9fa5]/g,'');
账户名只能使用数字字母下划线，且数字不能开头，长度在6-15之间
/^[a-zA-Z_]\w{5,14}$/

验证IP
(xxx.)xxx.xxx.xxx|  
254.245.255.255
240.196.19.5

/^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)$/

将所有的bag、beg、big和bog改为bug
str.replace(/(bag|beg|big|bog)/g,'bug');


将所有方法foo(a,b,c)的实例改为foo(b,a,c)
str.replace(/foo\(([^,]+),([^,]+),([^,]+)\)/g,'foo($2,$1,$3)');
*/


//创建XHR对象（兼容IE6）
function createXHR(){
	if(window.XHRHttpRequest){
		return new XMLHttpReuqest();
	}else{
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}