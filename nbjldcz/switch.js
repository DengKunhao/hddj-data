(function(u){

    let url = document.location.href;

	if( u.indexOf("iP")>-1 || u.indexOf("Android")>-1 ){ //手机端

		if(url.indexOf("/index") != -1){
			let newUrl = url.replace("/index", "/mindex");
			document.location.href = newUrl
		}else if(url.indexOf("/post_") != -1){
			let newUrl = url.replace("/post_", "/mpost_");
			document.location.href = newUrl
		}else if(url=="http://mmlz.maoming.gov.cn/" 
                || url=="http://mmlz.maoming.gov.cn"){
			document.location.href = "http://mmlz.maoming.gov.cn/mindex.html"
		}else if(url=="https://mmlz.maoming.gov.cn/" 
                || url=="https://mmlz.maoming.gov.cn"){
			document.location.href = "https://mmlz.maoming.gov.cn/mindex.html"
        }

    }else{ //PC端

		if(url.indexOf("/mindex") != -1){
			let newUrl = url.replace("/mindex", "/index");
			document.location.href = newUrl
		}else if(url.indexOf("/mpost_") != -1){
			let newUrl = url.replace("/mpost_", "/post_");
			document.location.href = newUrl
		}
        
    }
})(window.navigator.userAgent);