fixDocs = {
	config:{
		fixFileDirectory:'file:////MDN'
	},
	optimize: function() {
		var tagA = document.getElementsByTagName('a');
		var tagImg = document.getElementsByTagName('img');
		var tagLink = document.getElementsByTagName('link');
		var n, href, len = tagA.length;
		for (n = 0; n < len; ++n) {
			href = tagA[n].href;
			if ('file:///' === href.substr(0,8)) {
				tagA[n].href = href.substr(0,10) + href.substr(10).replace(/</g, '_')
															.replace(/>/g, '_')
															.replace(/:/g, '_')
															.replace(/%3F/g, '_');
					
					if ('/' === href.slice(href.length-1)) {
						tagA[n].href += 'index.html';
					} else if (1===href.lastIndexOf('#')-href.lastIndexOf('/')) {
						tagA[n].href=href.slice(0,href.lastIndexOf('/')+1)+'index.html'+href.slice(href.lastIndexOf('#'));
					}
			}
		}
		len = tagImg.length;
		for (n = 0; n < len; ++n) {
			href = tagImg[n].src;
			if ('file:///' === href.substr(0,8)) {
				tagImg[n].src = href.substr(0,10) + href.substr(10).replace(/</g, '_')
															.replace(/>/g, '_')
															.replace(/:/g, '_')
															.replace(/%3F/g, '_');
					
			}else{
				tagImg[n].src ='';
			}
		}

		//fix style sheet
		len = tagLink.length;
		for (n = 0; n < len; ++n) {
			href = tagLink[n].href;
			if ('https://' === href.substr(0,8)) {
				if (-1<href.search('mdn.32e0115351e7.css')){
					tagLink[n].href=fixDocs.config.fixFileDirectory+'/static/build/styles/mdn.9e17a09fbd06.css';
				} else if (-1<href.search('wiki.22984ab74297.css')){
					tagLink[n].href=fixDocs.config.fixFileDirectory+'/static/build/styles/wiki.6be7bc97be9a.css';
				}else{
					tagLink[n].href='';
				}
			}
		}

	}
};

(function() {
	fixDocs.optimize();
	})();