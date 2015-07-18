# Use Parse JavaScript SDK with Angular
Angular service that facilitates usage of parse plateform services.

## How to use

Open `parse-service.js` and add your app keys:

```javascript
var app_id = "YOUR_APP_ID";
var js_key = "YOUR_JAVASCRIPT_KEY";
```

Inject `ngParseModule` into your app:

```javascript
var app = angular.module('myApp', ['ngParseModule']);
```

This is how use in controller like this:

```javascript
angular.module('myApp').controller('yourCtrl', function($scope, ParseService) {

	var Users = Parse.Object.extend("users");
	var query = new Parse.Query(Users);

	query.find({
		success: function(results) {
			
		},
		error: function(result) {

		}
	});
});
```

Thats it!
