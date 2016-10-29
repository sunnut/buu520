(function(){var b=window.BaiduHttps={_option:{}};var f=function(){if(d()){i()}else{c("http")}};function d(){var k=(navigator&&navigator.userAgent)?navigator.userAgent:"",j=new RegExp(/msie 6/i),l=j.test(k);return !l}function i(){h({url:"https://www.baidu.com/con",tn:"zhanzhang"})}function c(j){b._option.protocol=j;b._option.checked=true}function e(){return(new Date()).getTime().toString(16)}function h(l){var k=l.url?l.url:"https://www.baidu.com/con",j=document.createElement("script");j.onload=function(){};j.onerror=function(){c("http")};j.src=k+"?from="+l.tn;document.body.appendChild(j)}b.callbacks=function(j){if(typeof j==="object"){if(j.s==0){c("https")}else{c("http")}}};var a;b.useHttps=function(){if(this._option.timeout===true){f();this._option.timeout=false;this._option.time_checked=false;a=setTimeout(g,1000*120)};if(!this._option.time_checked){a=setTimeout(g,1000*120)}if(this._option.checked&&this._option.protocol=="https"){return {s:1,ssl_code:"ssl10_" + e()};}else{return {s:0,ssl_code:"ssl9_" + e()};}};function g(){b._option.time_checked=true;b._option.timeout=true}f()})();


/*
	代码使用说明
	1. 用户聚焦搜索框时，调用BaiduHttps.useHttps() ,目的是检测此时www.baidu.com是否存在https的长连接，保证用户在有搜索意图并发起搜索时，有良好的访问速度
	2. 用户发起搜索前，依然调用BaiduHttps.useHttps() ,获取https可用性的状态码
接口返回以下格式信息
	{s:0/1,ssl_code:"ssl10_sgf214fsdfw"}
	状态码说明：1[HTTPS可以使用，跳转https] 0[HTTPS不可以使用,不跳转https]
	3. 获取状态码后，根据状态码选择用http还是https跳转，并在跳转url中带上状态码参数：ssl_s=0/1&ssl_c={ssl_code}
	其中ssl_code为返回json的变量里的值
*/