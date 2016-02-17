app.controller('MainController', ['$scope', function($scope) {
	
	$scope.colors = [
		{
			name: "Red Value",
			value: 255
		},
		{
			name: "Blue Value",
			value: 255
		},
		{
			name: "Green Value",
			value: 255
		
		}],
	$scope.increaseRed = function() {
		
		$scope.colors[0].value += 5;
		if($scope.colors[0].value > 255)
		{
			$scope.colors[0].value = 255;
		}
	};
	$scope.increaseBlue = function() {
		
		$scope.colors[1].value += 5;
		if($scope.colors[1].value > 255)
		{
			$scope.colors[1].value = 255;
		}
	};
	$scope.increaseGreen = function() {
		
		$scope.colors[2].value += 5;
		if($scope.colors[2].value > 255)
		{
			$scope.colors[2].value = 255;
		}
	};
	$scope.decreaseRed = function() {
		
		$scope.colors[0].value -= 5;
		if($scope.colors[0].value < 0){
			$scope.colors[0].value = 0;
		}
	};
	$scope.decreaseBlue = function() {
		
		$scope.colors[1].value -= 5;
		if($scope.colors[1].value < 0){
			$scope.colors[1].value = 0;
		}
	};
	$scope.decreaseGreen = function() {
		
		$scope.colors[2].value -= 5;
		if($scope.colors[2].value < 0){
			$scope.colors[2].value = 0;
		}
	};
	/*$scope.updateRed = function(value) {
		
		$scope.colors[0].value = value;
	};
	$scope.updateGreen = function(value) {
		
		$scope.colors[2].value = value;
	};
	$scope.updateBlue = function(value) {
		
		$scope.colors[1].value = value;
	};*/
}]);
