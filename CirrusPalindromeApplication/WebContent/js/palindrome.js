	var app = angular.module('palindrome', ['ngRoute']);
	app.config(function($routeProvider) {
	    $routeProvider
	        // route to palindromefinder page
	        .when('/palindromefinder', {
	            templateUrl : 'palindromefinder.html',
	            controller  : 'first'
	        })
	        
	        .when('/aboutapplication', {
	            templateUrl : 'aboutapplication.html'
	        })
	        
	        
	        //default page
	        .otherwise({
	            redirectTo: '/myhomepage'
	        });
	});
	
	app.controller('first',function ($scope) 
	{
		
			$scope.num1 = "";
	    
	        $scope.num2 = "";
		
	        $scope.error = false;
	    
	        $scope.find = function(){
	    
	        var arr = [];
	        
	        var num1=parseInt($scope.num1);
	        
	        var num2=parseInt($scope.num2);
	        
	        for(var i=num1;i<=num2;i++){
	    	 
	    	if(ispalin(i)){
	    		
	    		arr.push(i);
	    		
	    	}
	    	
	}
    
	    function ispalin(m){
	    	
	    	return m.toString() == m.toString().split("").reverse().join("");
	    }
	    
	   if(arr.length!=0){
	    
	   $scope.res = Math.max.apply(Math,arr);    
	   
		}
	   else{
		   
		   $scope.error = true;
		   alert("No Palindrome Numbers in this range!!!");
	   }
	   
	        }
		
	});