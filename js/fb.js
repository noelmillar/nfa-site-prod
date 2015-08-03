$(document).ready(function() {
	window.facebook;

	setTimeout(function(){

		$.ajaxSetup({ cache: true });

		$.getScript('//connect.facebook.net/en_US/sdk.js', function(){
			window.facebook = FB;
			FB.init({
				appId: '1635391083372242',
				version: 'v2.4'
			});
		});
	}, 1000);
});