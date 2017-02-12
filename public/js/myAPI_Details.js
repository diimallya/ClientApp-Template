  var local_APIConnect_ConnectionDetails = 
	                  { host: 'https://localhost',
	                	port:'4002',
	                	requestpath:'/api/partners'
	                  };
  
  var  headers_for_LocalAPIConnect= {'Content-Type': 'application/json',
		'Accept': 'application/json'};
 
  
  
  var blockChain_REST_URL = "https://91c8828550db4d26b36471dc629324a9-vp0.us.blockchain.ibm.com:5002/chaincode";
  
  var blockChain_Query_getClaim_JSON = {
		  "jsonrpc": "2.0",
		  "method": "query",
		  "params": {
		    "type": 1,
		    "chaincodeID": {
		      "name": "d6d9a06dc1397f2c0535babaa779bdb7601e88829f82d26dbe7cc09f2afb140a05bd68ce7d1b5213e30e63bacecb5d40729da49629c8053668e6b0e4ca9bf13e"
		    },
		    "ctorMsg": {
		      "function": "getClaim",
		      "args": [
		        ""
		      ]
		    },
		    "secureContext": "user_type1_0"
		  },
		  "id": 3
		}
  
  var blockChain_Query_getClaimByClaimant_JSON =  {
		  "jsonrpc": "2.0",
		  "method": "query",
		  "params": {
		    "type": 1,
		    "chaincodeID": {
		      "name": "d6d9a06dc1397f2c0535babaa779bdb7601e88829f82d26dbe7cc09f2afb140a05bd68ce7d1b5213e30e63bacecb5d40729da49629c8053668e6b0e4ca9bf13e"
		    },
		    "ctorMsg": {
		      "function": "getClaimByClaimant",
		      "args": [
		        ""
		      ]
		    },
		    "secureContext": "user_type1_0"
		  },
		  "id": 4
		}
  
  
  var blockChain_Invoke_create_Claim_JSON = {
		    "jsonrpc": "2.0",
		    "method": "invoke",
		    "params": {
		        "type": 1,
		        "chaincodeID": {
		            "name": "d6d9a06dc1397f2c0535babaa779bdb7601e88829f82d26dbe7cc09f2afb140a05bd68ce7d1b5213e30e63bacecb5d40729da49629c8053668e6b0e4ca9bf13e"
		        },
		        "ctorMsg": {
		            "function": "create_claim",
		            "args": [
		                ""
		            ]
		        },
		        "secureContext": "user_type1_0"
		    },
		    "id": 1
		}
  
  
  var blockChain_Invoke_update_Claim_JSON = {
		    "jsonrpc": "2.0",
		    "method": "invoke",
		    "params": {
		        "type": 1,
		        "chaincodeID": {
		            "name": "d6d9a06dc1397f2c0535babaa779bdb7601e88829f82d26dbe7cc09f2afb140a05bd68ce7d1b5213e30e63bacecb5d40729da49629c8053668e6b0e4ca9bf13e"
		        },
		        "ctorMsg": {
		            "function": "update_claim",
		            "args": [
		                ""
		            ]
		        },
		        "secureContext": "user_type1_0"
		    },
		    "id": 2
		}