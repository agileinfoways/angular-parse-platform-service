# Use Parse JavaScript SDK with Angular
Angular service that facilitates usage of parse plateform services.

## How to use

**Include** latest version of **Parse JavaScript SDK** in your page.

```HTML
<script src="//www.parsecdn.com/js/parse-1.5.0.min.js"></script>
```

Open `parse-service.js` and **add your app keys**:

```javascript
var app_id = "YOUR_APP_ID";
var js_key = "YOUR_JAVASCRIPT_KEY";
```

**Inject** `ngParseModule` into your app:

```javascript
var app = angular.module('myApp', ['ngParseModule']);
```

**Use it in controller** like this:

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
