angular.module('ngParseModule', []).service('ParseService', function(){
	//App keys
	var app_id = "YOUR_APP_ID";
	var js_key = "YOUR_JAVASCRIPT_KEY";

	Parse.initialize(app_id, js_key);
});