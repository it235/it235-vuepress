/*
if(top.location!==self.location){
	top.location.href=self.location.href;
}
if(document.location.host != "hliedu.com" 
	&& location.href.indexOf('http') >-1 
	&& location.href.indexOf('localhost')==-1){
	location.replace('https://book.hliedu.com/')
}
	*/
window.aCallFun = function(elem, args) {
  if(elem[0] && elem[0].src){
    var reg = /(http:\/\/|https:\/\/)(.*?)\/{1}(.*)/i;
    var url = elem[0].src || elem[0].getAttribute('src');
    var host = url.replace(reg,"$2");
    
    if(host.indexOf('baidu')>-1 || host.indexOf('weibo')>-1 || host.indexOf('sina')>-1|| host.indexOf('hliedu.com')>-1 || host.indexOf('http')===-1){
        return true;
    }else{
        return false;
    }
  }else if(elem[0].id && elem[0].id.indexOf('cproIframe')>-1){
    return false;
  }else{
    return true;
  }
}
window.f = Element.prototype.appendChild;
Element.prototype.appendChild = function() {
    var flag = window.aCallFun.call(this, arguments);
    if(flag === true){
        return window.f.apply(this, arguments);
    }else{
        // return window.f.apply(this, arguments);
    }
};


var _hrefs = "https://www.aliyun.com/minisite/goods?taskPkg=1111ydsrwb&pkgSid=11811&userCode=goqhbyn3";
function vueSidebarShow() {
	var windowWidth = document.body.clientWidth || window.innerWidth;
	if(windowWidth > 760){
	
		loadSidebar(_hrefs);
	}

}

function loadSidebar(hrefTxt) {	
	var sidebars = document.getElementsByClassName("sidebar");	var divNode = document.createElement("div");divNode.setAttribute("style" , "text-align: center; padding: 10px;");divNode.innerHTML = '<a href="' + hrefTxt + '" target="_blank"><img src="/img/sidebar_280140.png"></a>';
	console.log(sidebars)
	sidebars[0].insertBefore(divNode , sidebars[0].childNodes[0]);
	var e = document.getElementsByClassName("hide");if(e[1])e[1].remove();
}


setTimeout("vueSidebarShow()",1000)

