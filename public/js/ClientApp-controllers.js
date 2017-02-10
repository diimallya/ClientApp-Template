
var myAPIClientApp_controllers= angular.module('ClientApp.controllers', []);
	

// create the controller and inject Angular's $scope

myAPIClientApp_controllers.controller('mainController', function($scope) {

    // create a message to display in our view

    $scope.message = 'Home Page';

});


myAPIClientApp_controllers.controller('aboutController', function($scope) {

    $scope.message = 'Fill up the About Details here';

});


myAPIClientApp_controllers.controller('contactController', function($scope) {

    $scope.message = 'Fill up the Contact Details here.';

});

myAPIClientApp_controllers.controller('loginController', function($scope) {

    

});

myAPIClientApp_controllers.controller('manageclaimController-delete', function($scope,$window,$http,clientServices,utilityServices) {

	//Claim_datamodel is defined in a separate datamodel.js file 	
	  $scope.Claim = $window.init_Claim_datamodel;
	  $scope.inpEmailId='sample_email@xyz.com';
	  
	  
	  $scope.searchForDelete=function(){
		  
		  var varClaim = clientServices.retrieveClaim($scope.inpEmailId);  
		  varClaim.then(function (result) {
			  console.log( result);
			  var successResponseData = result.data;
			 
			  $scope.Claim = clientServices.populateClaimInfo(successResponseData);
			  document.getElementById("partnerDeleteResult").innerHTML = "Claim Info Found!!!!.. Pls Delete..";
          }, function(err) {
	    	 
	    	  console.log("4. Failed Response from API Call----->"+err);
	    	  document.getElementById("partnerDeleteResult").innerHTML = "Claim Info NOT FOUND!!!!";
	        
	         
	      }
		  
		  );
	  };
	  
	  $scope.deleteClaim=function(){
		  
		 // var composedDataInJSON= utilityServices.compose_ClaimJSONData($scope.Claim);
		  var varClaim = clientServices.deleteClaim($scope.inpEmailId);  
		  
		  varClaim.then(function (result) {
		        var successResponseData=result.data;
		        console.log(successResponseData);
		        document.getElementById("partnerDeleteResult").innerHTML = "Successfully Deleted the Claim!!!!";

		  }, function(err) {
	    	  console.log(err);
	    	  document.getElementById("partnerDeleteResult").innerHTML = "Oops! Claim Updation failed";
	      }
		  
		  );

	  };


	
});

myAPIClientApp_controllers.controller('manageclaimController-update', function($scope,$window,$http,clientServices,utilityServices) {
	//Claim_datamodel is defined in a separate datamodel.js file 	
	  $scope.Claim = $window.init_Claim_datamodel;
	  $scope.inpEmailId='sample_email@xyz.com';
	  
	  
	  $scope.searchForUpdate=function(){
		  
		  var varClaim = clientServices.retrieveClaim($scope.inpEmailId);  
		  varClaim.then(function (result) {
			  console.log( result);
			  var successResponseData = result.data;
			 
			  $scope.Claim = clientServices.populateClaimInfo(successResponseData);
			  document.getElementById("partnerUpdateResult").innerHTML = "Claim Info Found!!!!.. Pls Update..";
          }, function(err) {
	    	 
	    	  console.log("4. Failed Response from API Call----->"+err);
		      
	    	   data= utilityServices.formatResultForDisplay(false,$scope.Claim);
	    	
	    	  document.getElementById("partnerUpdateResult").innerHTML = data;
	        
	         
	      }
		  
		  );
	  };
	  
	  $scope.updateClaim=function(){
		  
		  var composedDataInJSON= utilityServices.compose_ClaimJSONData($scope.Claim);
		  var varClaim = clientServices.updateClaim(composedDataInJSON);  
		  
		  varClaim.then(function (result) {
		        var successResponseData=result.data;
		        console.log(successResponseData);
		        document.getElementById("partnerUpdateResult").innerHTML = "Successfully Updated the Claim!!!!";

		  }, function(err) {
	    	  console.log(err);
	    	  document.getElementById("partnerUpdateResult").innerHTML = "Oops! Claim Updation failed";
	      }
		  
		  );

	  };


});

myAPIClientApp_controllers.controller('manageclaimController-create', function($scope,$window,$http,clientServices,utilityServices) {
	//Claim_datamodel is defined in a separate datamodel.js file 	
	  $scope.Claim = $window.Claim_datamodel;
	  
	  $scope.createClaim=function(){
		  
		  var composedDataInJSON= utilityServices.compose_ClaimJSONData($scope.Claim);
		  var varClaim = clientServices.createClaim(composedDataInJSON);  
		  
		  varClaim.then(function (result) {
		        var successResponseData=result.data;
		        console.log(successResponseData);
		        document.getElementById("partnerCreateResult").innerHTML = "Successfully Created the Claim!!!!";

		  }, function(err) {
	    	  console.log(err);
	    	  document.getElementById("partnerCreateResult").innerHTML = "Oops! Claim creation failed";
	      }
		  
		  );

	  };


});

myAPIClientApp_controllers.controller('manageclaimController-retrieve', function($scope,$window,$http,clientServices,utilityServices) {
	
	//Claim_datamodel is defined in a separate datamodel.js file 	
	$scope.claim = $window.init_claim_datamodel;
	$scope.inpClaimId='C1';
	$scope.inpClaimantId='User1';
	
	$scope.searchClaim=function(){
		  
		  var varClaim = clientServices.retrieveClaim($scope.inpClaimId);  
		  
         
          
		  varClaim.then(function (result) {
			  console.log( result);
			  var successResponseData = result.data;
			  console.log("SuccessResponseData---------->"+JSON.stringify(successResponseData));
			 
			 // $scope.claim = ClaimServices.populateClaimInfo(successResponseData.result.message);
			  $scope.claim = JSON.parse(successResponseData.result.message);	
			  
			  console.log("$scope.claim--->"+JSON.stringify($scope.claim));
			  
			  console.log("$scope.claim[0].claimid---->"+$scope.claim.claimid);
			  
			   data= utilityServices.formatResultForDisplay(true,$scope.claim);
			  document.getElementById("claimRetrieveResult").innerHTML = data;
          }, function(err) {
	    	 
	    	  console.log("4. Failed Response from API Call----->"+err);
		      
	    	   data= utilityServices.formatResultForDisplay(false,$scope.claim);
	    	
	    	  document.getElementById("claimRetrieveResult").innerHTML = data;
	        
	         
	      }
		  
		  );



		  
	  };
	 
	  $scope.searchClaimByClaimant=function(){
		  
		  var varClaim = clientServices.retrieveClaimByClaimant($scope.inpClaimantId);
		  varClaim.then(function (result) {
			  console.log( result);
			  var successResponseData = result.data;
			  console.log("SuccessResponseData---------->"+JSON.stringify(successResponseData));
			 
			 
			  $scope.claims = JSON.parse(successResponseData.result.message);	
			  
			  console.log("$scope.claims--->"+JSON.stringify($scope.claims));
			  data= utilityServices.formatResultForDisplay_ByClaimant(true,$scope.claims);
			  
			  document.getElementById("claimRetrieveResult").innerHTML = data;
			  
		  	  }, function(err) {
	    	 
	    	  console.log("4. Failed Response from API Call----->"+err);
		      
	    	  data= utilityServices.formatResultForDisplay(false,$scope.claims);
	    	
	    	  document.getElementById("claimRetrieveResult").innerHTML = data;
	    	  
	         }
		  
		   
		);	  
	  };
	  
});


	

