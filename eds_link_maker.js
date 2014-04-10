//
// Little bit of code that will Change any links displayed as text in dd tags to actual clickable links 
// Inline this in your EDS Config somewhere 
// 
// todo: auto append proxy for proxy related resources
//
var dtList = document.getElementsByTagName("dd");
for (var i = 0; i < dtList.length; ++i){
	var cs = dtList[i].innerText
	if (cs.startsWith("http"))
		{
		var link = document.createElement('dd');
		link.setAttribute('href',cs);
		link.innerHTML = '<a href="'+cs+'">'+cs+'</a>';
		dtList[i].replace(link);
		}
	}
	