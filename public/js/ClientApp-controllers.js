
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
	  $scope.claim = $window.init_claim_datamodel;
	  $scope.inpClaimId='C1';
	  
	  
	  $scope.searchForUpdate=function(){
		  
		  var varClaim = clientServices.retrieveClaim($scope.inpClaimId);  
		  varClaim.then(function (result) {
			  console.log( result);
			  var successResponseData = result.data;
			  
			  if(successResponseData.result == null ){
				  console.log("Claim not found!!");
				  document.getElementById("claimUpdateResult").innerHTML = "Claim Info Not Found!!!! Please try again with valid Claim Id..";
				  $scope.claim = null;
			  }
			  else{
				  $scope.claim = JSON.parse(successResponseData.result.message);
				  console.log("Claim--->"+JSON.stringify($scope.claim));
				  //$scope.Claim = clientServices.populateClaimInfo(successResponseData);
				  document.getElementById("claimUpdateResult").innerHTML = "Claim Info Found!!!!.. Pls Update..";
			  }			 
			 
			  
          }, function(err) {
	    	 
	    	  console.log("4. Failed Response from API Call----->"+err);
		      
	    	   data= utilityServices.formatResultForDisplay(false,$scope.Claim);
	    	
	    	  document.getElementById("claimUpdateResult").innerHTML = data;
	        
	         
	      }
		  
		  );
	  };
	  
	  $scope.updateClaim=function(){
		  
		  var composedDataInJSON= utilityServices.compose_ClaimJSONData($scope.claim);
		  var varClaim = clientServices.updateClaim(composedDataInJSON);  
		  
		  varClaim.then(function (result) {
		        var successResponseData=result.data;
		        console.log(successResponseData.result.status);
		        if(successResponseData.result.status = "OK"){
		        	document.getElementById("claimUpdateResult").innerHTML = "Successfully Created the Claim!!!!";
		        }
		        else
		        	document.getElementById("claimUpdateResult").innerHTML = "Claim status not OK!!!!";

		  }, function(err) {
	    	  console.log(err);
	    	  document.getElementById("claimUpdateResult").innerHTML = "Oops! Claim Updation failed";
	      }
		  
		  );

	  };


});

myAPIClientApp_controllers.controller('manageclaimController-create', function($scope,$window,$http,clientServices,utilityServices) {
	//Claim_datamodel is defined in a separate datamodel.js file 	
	  $scope.claim = $window.claim_datamodel;
	  
	  $scope.createClaim=function(){
		  
		  var composedDataInJSON= utilityServices.compose_ClaimJSONData($scope.claim);
		  var varClaim = clientServices.createClaim(composedDataInJSON);  
		  
		  
		  varClaim.then(function (result) {
		        var successResponseData=result.data;
		        console.log(successResponseData.result.status);
		        if(successResponseData.result.status = "OK"){
		        	document.getElementById("claimCreateResult").innerHTML = "Successfully Created the Claim!!!!";
		        }
		        else
		        	document.getElementById("claimCreateResult").innerHTML = "Claim status not OK!!!!";

		  }, function(err) {
	    	  console.log(err);
	    	  document.getElementById("claimCreateResult").innerHTML = "Oops! Claim creation failed";
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
			  //$scope.claim = JSON.parse(successResponseData.result.message);
			  

			  if(successResponseData.error != null ){
				  console.log("Claim not found!!");
				  document.getElementById("claimRetrieveResult").innerHTML = "Claim Info Not Found!!!! Please try again with valid Claim Id..";
				  $scope.claim = null;
			  }
			  else{
				  $scope.claim = JSON.parse(successResponseData.result.message);
				  console.log("Claim--->"+JSON.stringify($scope.claim));
				  //$scope.Claim = clientServices.populateClaimInfo(successResponseData);
				  //document.getElementById("claimUpdateResult").innerHTML = "Claim Info Found!!!!.. Pls Update..";
				  console.log("$scope.claim--->"+JSON.stringify($scope.claim));			  
				  	  
				  data= utilityServices.formatResultForDisplay(true,$scope.claim);
				  document.getElementById("claimRetrieveResult").innerHTML = data;
			  }			 
			 
			  
          }, function(err) {
	    	 
	    	  console.log("Claim Info Not Found!!!! Please try again with valid Claim Id.."+err);
		      
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


	

