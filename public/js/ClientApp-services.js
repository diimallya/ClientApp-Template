var myAPIClientApp_services=angular.module('ClientApp.services', []);

myAPIClientApp_services.factory('clientServices', function($http,$window){
	
    return {
    	retrieveClaim: function (inpParam) {
      		 
    		  console.log("1. Input Param--->"+inpParam);
    		  
    	
    		  var apiConnect_Header_Details=$window.headers_for_LocalAPIConnect;
    		  
    		  var REST_URL= $window.blockChain_REST_URL;
    		  //var REST_URL = "https://91c8828550db4d26b36471dc629324a9-vp0.us.blockchain.ibm.com:5002/chaincode";
    		 
    		  var body = $window.blockChain_Query_getClaim_JSON;
    		  body.params.ctorMsg.args[0] = inpParam;
    		  
    		  console.log("2. Headers---------------->"+JSON.stringify(apiConnect_Header_Details));
    		  console.log("3. REST URL to be Invoked--->"+REST_URL);
    		  console.log("4. Body of the REST URL to be Invoked--->"+JSON.stringify(body));
    		  return $http(
    		    		{
    		    			
    		    			  method: 'POST',
    		    			  headers: apiConnect_Header_Details,
    		    			  url: REST_URL,
    		    			  data: body
    		    			}		
    		    // To ensure the promises (to make this call sync) I'm handling the Success and failure in controller
    		    );
    		  
    	  },
    	  
    	//Retrieve Claim by Claimant
    	  retrieveClaimByClaimant:function (inpParam) {
    		  console.log("1. Input Param--->"+inpParam);
    		  
    	    	
    		  var apiConnect_Header_Details=$window.headers_for_LocalAPIConnect;
    		  
    		  var REST_URL= $window.blockChain_REST_URL;
    		 
    		  var body = $window.blockChain_Query_getClaimByClaimant_JSON;
    		  
    		  body.params.ctorMsg.args[0] = inpParam;
    		  
    		  console.log("2. Headers---------------->"+JSON.stringify(apiConnect_Header_Details));
    		  console.log("3. REST URL to be Invoked--->"+REST_URL);
    		  console.log("4. Body of the REST URL to be Invoked--->"+JSON.stringify(body));
    		  return $http(
    		    		{
    		    			
    		    			  method: 'POST',
    		    			  headers: apiConnect_Header_Details,
    		    			  url: REST_URL,
    		    			  data: body
    		    			}		
    		    // To ensure the promises (to make this call sync) I'm handling the Success and failure in controller
    		    );
    		  
    	  },
    	  
  	  	//Create Claim Function
  	  	createClaim: function (argArray) {
  	   		 
    		 
    		  
    		  //Call the REST API to Create the Claim details
    		 
    		  var apiConnect_Header_Details=$window.headers_for_LocalAPIConnect
    		  
    		  var REST_URL= $window.blockChain_REST_URL;
    		  
    		  var body = $window.blockChain_Invoke_create_Claim_JSON;
    		  
    		  body.params.ctorMsg.args = argArray;
    		
    		  console.log("1. Headers--->"+JSON.stringify(apiConnect_Header_Details));
    		  console.log("2. REST URL to be Invoked--->"+REST_URL);    		  
    		  console.log("3. Arguments to the function---->" + argArray);
    		  console.log("4. JSON body--->"+JSON.stringify(body));
    		  
    		  return $http(
    		    		{
    		    			
    		    			  method: 'POST',
    		    			  headers: apiConnect_Header_Details,
    		    			  data:body,
    		    			  url: REST_URL
    		    			}		
    		    // To ensure the promises (to make this call sync) I'm handling the Success and failure in controller
    		    );
    		  
    	  },
  	  	
  	  	
  	  	//Update Claim Function
  	  	updateClaim: function (argArray) {
 	   		 
   		 
  		  
  		  //Call the REST API to Create the Claim details
  		 
  		  var apiConnect_Header_Details=$window.headers_for_LocalAPIConnect
  		  
  		  var REST_URL= $window.blockChain_REST_URL;
  		  
  		  var body = $window.blockChain_Invoke_update_Claim_JSON;
  		  
  		  body.params.ctorMsg.args = argArray;
  		
  		  console.log("1. Headers--->"+JSON.stringify(apiConnect_Header_Details));
  		  console.log("2. REST URL to be Invoked--->"+REST_URL);    		  
  		  console.log("3. Arguments to the function---->" + argArray);
  		  console.log("4. JSON body--->"+JSON.stringify(body));
  		  
  		  return $http(
  		    		{
  		    			
  		    			  method: 'POST',
  		    			  headers: apiConnect_Header_Details,
  		    			  data:body,
  		    			  url: REST_URL
  		    			}		
  		    // To ensure the promises (to make this call sync) I'm handling the Success and failure in controller
  		    );
  		  
  	  },
  	  	
  	  	
  	  	
  	  	//Update Claim Function
  	  	deleteClaim: function (inpParam) {
  	   		 
    		  console.log("1. Input Param--->"+inpParam);
    		  
    		  //Call the REST API to get the Claim details

    		  //var host='http://mybackendservices.mybluemix.net';
    		  var apiConnectDetails = $window.local_APIConnect_ConnectionDetails;
    		  var apiConnect_Header_Details=$window.headers_for_LocalAPIConnect
    		  
    		  var REST_URL=apiConnectDetails.host+":"+apiConnectDetails.port+apiConnectDetails.requestpath+ '/'+inpParam;
    		
    		  
    		  console.log("Delete Claim >>> REST URL >>>>>"+REST_URL);
    		  return $http(
    		    		{
    		    			
    		    			  method: 'DELETE',
    		    			  headers: apiConnect_Header_Details,
    		    			  url: REST_URL
    		    			}		
    		    // To ensure the promises (to make this call sync) I'm handling the Success and failure in controller
    		    );
    		  
    	  },
  	  	
  	  	// populateClaimInfo function
        populateClaimInfo: function (successResponseData) {
        	var claim=$window.init_claim_datamodel;
        	console.log("In populateClaimInfo----->"+successResponseData)
          claim[0].claimid=successResponseData.claimid;
  		  claim[0].claimdate=successResponseData.claimdate;
  		  claim[0].claimdescription=successResponseData.claimdescription;
  		  claim[0].claimantdetails=successResponseData.claimantdetails;
  		  claim[0].claimedamount=successResponseData.claimedamount;
  		  claim[0].approvedamount=successResponseData.approvedamount;
  		  claim[0].claimstate=successResponseData.claimstate;
  		  claim[0].actordetails=successResponseData.actordetails;
  		  
		  return claim[0];
		
	  }
    };

});



myAPIClientApp_services.service('utilityServices', function($http,$window){
	var claim = $window.init_claim_datamodel;
	
	this.formatResultForDisplay =function(inpStatus,inpClaim){
		 
			
		  console.log("In formatResultForDisplay--->"+JSON.stringify(inpClaim));
		  if(inpStatus){
			  
			  console.log('6. Inside Formatted Result-->  true' );
			  
			  //First prepare table dat from stateshistory array
			  var statesHistoryArray = inpClaim.stateshistory;
			  var strTableRows = '';
			  for(var i=0; i< statesHistoryArray.length; i++){
				  var stateHistory = statesHistoryArray[i];
				  var strTableRow = "<tr>"+
				  						"<td>" + stateHistory.claimstatus + "</td>" +
				  						"<td>" + stateHistory.claimstatuschanged + "</td>" +
				  						"<td>" + stateHistory.actorname + "</td>" +
				  						"<td>" + stateHistory.actiondescription + "</td>" +
				  					"</tr>"	;
				  strTableRows = strTableRows + strTableRow;
			  }	
				  
			  console.log("table rows-------->" +strTableRows);	
			  
			  var data=	"<label>Claim Id:</label> " + inpClaim.claimid  + '<br>'+
			  			"<label>Claim Date:</label> " + inpClaim.claimdate  +'<br>'+
			  			"<label>Claim Description:</label> " + inpClaim.claimdescription +'<br>'+
			  			"<label>Claimant Id:</label> " + inpClaim.claimantdetails.claimantid +'<br>'+
			  			"<label>Claimant Name:</label> " + inpClaim.claimantdetails.claimantname + '<br>'+
			  			"<label>Claimed Amount:</label> "+inpClaim.claimedamount + '<br>'+
			  			"<label>Approved Amount:</label> " + inpClaim.approvedamount + '<br>'+
			  			"<label>Claim Status:</label> " + inpClaim.claimstate.claimstatus + '<br>'+
			  			"<label>Claim Status Changed:</label> " + inpClaim.claimstate.claimstatuschanged + '<br>'+
			  			"<label>Actor Name:</label> " + inpClaim.actordetails.actorname + '<br>'+
			  			"<label>Actor Employee Id:</label> " + inpClaim.actordetails.actorempid + '<br>'+
			  			"<label>Actor Role:</label> " + inpClaim.actordetails.actorrole + '<br>'+
			  			"<label>Action Description:</label> " + inpClaim.actordetails.actiondescription+ '<br>'+
			  			"<label>States History:</label>" + '<br>' +
			  			"<table> " +
			  				"<tr>" +
		      					"<th>ClaimStatus &nbsp;&nbsp;</th>"+ 
		      					"<th>ClaimStatusChangedDate &nbsp;&nbsp;</th>" +
		      					"<th>ActorName &nbsp;&nbsp;</th>" +
		      					"<th>ActionDescription &nbsp;&nbsp;</th>" +
		      				"</tr>" +
		      				strTableRows +
			  			"</table>" ;
			  
			  console.log("Data for innerhtml--------->\n" + data );

		  }else{
			  console.log('6. Inside Formatted Result-->  false' );
			  var data=	"Oops!!! The Searched Claim is not found in our System!!!!!";

		  }
		  	return data;
		  
	  };
	  
	  //Format result for Search Claim by claimant id.. getClaimByClaimant
	  this.formatResultForDisplay_ByClaimant=function(inpStatus,inpClaims){
		  
		  var strTableRows = '';
		  
		  console.log("In formatResultForDisplay_ByClaimant--->"+JSON.stringify(inpClaims));
		  
		  if(inpStatus){
			  console.log('6. Inside Formatted Result-->  true' );
			  
			  var claims = inpClaims;
			  for(var i=0; i< claims.length; i++){
				  claim = claims[i];
				  var strTableRow = 
				"<tr>"+
					"<td>" + claim.claimid + "</td>" +
					"<td>" + claim.claimdate + "</td>" +
					"<td>" + claim.claimdescription + "</td>" +
					"<td>" + claim.claimantdetails.claimantid + "</td>" +
					"<td>" + claim.claimantdetails.claimantname + "</td>" +
					"<td>" + claim.claimedamount + "</td>" +
					"<td>" + claim.approvedamount + "</td>" +
					"<td>" + claim.claimstate.claimstatus + "</td>" +
					"<td>" + claim.claimstate.claimstatuschanged + "</td>" +
					"<td>" + claim.actordetails.actorname + "</td>" +
					"<td>" + claim.actordetails.actorempid + "</td>" +
					"<td>" + claim.actordetails.actorrole + "</td>" +
					"<td>" + claim.actordetails.actiondescription + "</td>" +
									
				"</tr>"	;
				  strTableRows = strTableRows + strTableRow;
				  
			  }
			  
			  var data = 
				  "<table> " +
	  				"<tr>" +
    					"<th>ClaimId &nbsp;</th>"+ 
    					"<th>ClaimDate &nbsp;</th>" +
    					"<th>ClaimDescription &nbsp;</th>" +
    					"<th>ClaimantId &nbsp;</th>" +
    					"<th>ClaimantName &nbsp;</th>" +
    					"<th>ClaimedAmount &nbsp;</th>" +
    					"<th>ApprovedAmount &nbsp;</th>" +
    					"<th>ClaimStatus &nbsp;</th>" +
    					"<th>ClaimStatusChangedDate &nbsp;</th>" +
    					"<th>ActorName &nbsp;</th>" +
    					"<th>ActorEmployeeId &nbsp;</th>" +
    					"<th>ActorRole &nbsp;</th>" +
    					"<th>ActionDescription &nbsp;</th>" +
    				"</tr>" +
    				strTableRows +
	  			"</table>" ;
			
			  
		  }else{
			  console.log('6. Inside Formatted Result-->  false' );
			  var data=	"Oops!!! The Searched Claim is not found in our System!!!!!";

		  }
		  	return data;
	  
	  
	  
	  };
	  
	 //Compose data as JSON for POST method 
	 this.compose_ClaimJSONData=function(claim){
		  var data=[ claim.claimid, claim.claimdate, claim.claimdescription, claim.claimantdetails.claimantid, claim.claimantdetails.claimantname, claim.claimedamount, claim.approvedamount, claim.claimstate.claimstatus, claim.claimstate.claimstatuschanged, claim.actordetails.actorname, claim.actordetails.actorempid, claim.actordetails.actorrole, claim.actordetails.actiondescription ];
		  console.log(data);
		  return data;
	  }; 
	
});


myAPIClientApp_services.service('BlankService', [function(){

}]);

