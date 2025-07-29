const WE_IS_ANDROID = /Android/.test(navigator.userAgent);
const WE_IS_IPHONE = /iPhone/.test(navigator.userAgent) || /iPhone/.test(navigator.platform);
const WE_IS_IPAD = /iPad/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) && !window.MSStream;
const WE_IS_IPOD = /iPod/.test(navigator.userAgent);
const WE_IS_BLACKBERRY = /BlackBerry/.test(navigator.userAgent);
const WE_IS_WEBOS = /webOS/.test(navigator.userAgent);
const WE_URL_PC = "/websquare/websquare.html?w2xPath=/mainContainer.xml";
const WE_URL_MOBILE = "/websquare/websquare.html?w2xPath=/mainContainer_mobile.xml";

const WE_MAIN_URL = (WE_IS_ANDROID || WE_IS_IPHONE || WE_IS_IPAD || WE_IS_IPOD || WE_IS_BLACKBERRY) ? WE_URL_MOBILE : WE_URL_PC;
const WE_MAIN_URL_WITH_QUERY = WE_MAIN_URL + (location.search || "").replace("?","&");

const WE_UPDATE_URL = "/update.html" + location.search;

const WE_GET_SCHEDULE = async function () {
	let res = {};
	try {
		let _fetch = await fetch("/frame/data/inspection.json");
		res = await _fetch.json();
		
		if (!_fetch.ok) { 
			throw "inspection.json Error"; 
		}
	} catch (ex) {
		console.error(ex);
		return { "status": "EXCEPTION" }
	}
	
	return res;
};
