app.controller('MainController', ['$scope', function($scope) {
	
	
	$scope.colors = {
			redValue: 255,
			blueValue: 255,
			greenValue: 255
		},
	$scope.increaseRed = function() {
		
		$scope.colors.redValue += 5;
		if($scope.colors.redValue > 255)
		{
			$scope.colors.redValue = 255;
		}
	};
	$scope.increaseBlue = function() {
		
		$scope.colors.blueValue += 5;
		if($scope.colors.blueValue > 255)
		{
			$scope.colors.blueValue = 255;
		}
	};
	$scope.increaseGreen = function() {
		
		$scope.colors.greenValue += 5;
		if($scope.colors.greenValue > 255)
		{
			$scope.colors.greenValue = 255;
		}
	};
	$scope.decreaseRed = function() {
		
		$scope.colors.redValue -= 5;
		if($scope.colors.redValue < 0){
			$scope.colors.redValue = 0;
		}
	};
	$scope.decreaseBlue = function() {
		
		$scope.colors.blueValue -= 5;
		if($scope.colors.blueValue < 0){
			$scope.colors.blueValue = 0;
		}
	};
	$scope.decreaseGreen = function() {
		
		$scope.colors.greenValue -= 5;
		if($scope.colors.greenValue < 0){
			$scope.colors.greenValue = 0;
		}
	};
	$scope.resetRed = function() {
		$scope.colors.redValue = 255;
	};
	$scope.resetBlue = function() {
		$scope.colors.blueValue = 255;
	};
	$scope.resetGreen = function() {
		$scope.colors.greenValue = 255;
	};
	$scope.resetAll = function() {
		$scope.colors.redValue = 255;
		$scope.colors.blueValue = 255;
		$scope.colors.greenValue = 255;
	};
}]);
