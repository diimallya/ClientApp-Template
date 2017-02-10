var ClientApp_route = angular.module('ClientApp.routes',['ngRoute']);


// configure our routes

ClientApp_route.config(function($routeProvider) {

    $routeProvider


        // route for the home page

        .when('/', {

            templateUrl : 'views/index.html',

            controller  : 'mainController'
            	

        })


        // route for the about page

        .when('/about', {

            templateUrl : 'pages/about.html',

            controller  : 'aboutController'

        })
        // route for login	
        .when('/login', {

            templateUrl : 'pages/login.html',

            controller  : 'loginController'

        })
        // route for partner creation
        .when('/manageclaim-create', {

            templateUrl : 'pages/manageclaim-create.html',

            controller  : 'manageclaimController-create'

        })
        
         // route for partner	retrieve
        .when('/manageclaim-retrieve', {

            templateUrl : 'pages/manageclaim-retrieve.html',

            controller  : 'manageclaimController-retrieve'

        })
        
         // route for partner	Update
        .when('/manageclaim-update', {

            templateUrl : 'pages/manageclaim-update.html',

            controller  : 'manageclaimController-update'

        })
        // route for partner	Delete
        .when('/manageclaim-delete', {

            templateUrl : 'pages/manageclaim-delete.html',

            controller  : 'manageclaimController-delete'

        })
        
        // route for the contact page

        .when('/contact', {

            templateUrl : 'pages/contact.html',

            controller  : 'contactController'

        })
        
        .otherwise({
        redirectTo: 'views/index.html'
        });

});