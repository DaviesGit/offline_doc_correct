chrome.webRequest.onBeforeRequest.addListener(
	function(data) {
		// alert(JSON.stringify(data));
		// console.log(data);
		// debugger;
		if ('http' === data.url.substr(0, 4)) {
			return {
				cancel: true
			};
		} else {
			return {
				cancel: false
			};
		}
	}, {
		urls: ["<all_urls>"], // Change this to a more specific pattern
	}, ["blocking"]
);