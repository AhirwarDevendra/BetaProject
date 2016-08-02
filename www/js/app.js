// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider,$sceDelegateProvider){
    
$stateProvider
  .state('gallery',{
    url:'/gallery',
    templateUrl:'templates/gallerydemo.html',
    controller:'MediaCtrl'
  })
   
    .state('sharing',{
    url:'/sharing',
    templateUrl:'templates/sharingdemo.html',
    controller:'ShareCtrl'
  })
    
  .state('chat',{
    url:'/chat',
    templateUrl:'templates/chatdemo.html',
    controller:'ChatCtrl'
})

$urlRouterProvider.otherwise('/sharing');
})

.controller('MediaCtrl', function($scope, $ionicModal) {
	$scope.allImages = [{
		'src' : 'http://dreamwood.in/images/team/Devendra.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/Swapnil.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/arun.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/Swapnil.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/Swapnil.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/Swapnil.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/Swapnil.jpg'
	}, {
		'src' : 'http://dreamwood.in/images/team/Swapnil.jpg'
	}];
 
	$scope.showImages = function(index) {
		$scope.activeSlide = index;
		$scope.showModal('templates/image-popover.html');
	}
 
	$scope.showModal = function(templateUrl) {
		$ionicModal.fromTemplateUrl(templateUrl, {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
			$scope.modal.show();
		});
	}
 
	// Close the modal
	$scope.closeModal = function() {
		$scope.modal.hide();
		$scope.modal.remove()
	};
    
    $scope.clipSrc = '../img/abc.mp4';
 
$scope.playVideo = function() {
	$scope.showModal('templates/video-popover.html');
}
})

.controller('ShareCtrl', function($scope, $ionicModal,$cordovaSocialSharing){
  
  if (window.StatusBar) {
            StatusBar.backgroundColorByHexString("#3E2723");
        }
    console.log("Sharing");
  
    $scope.shareApp = function()
    {
        console.log("click");
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
        /*window.plugins.socialsharing.share("Devendra");*/
      /*$cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");
      $cordovaSocialSharing.share("This is your message", "This is your subject", "www/imagefile.png", "https://www.thepolyglotdeveloper.com");*/
    }
  
    $scope.share1 = function()
    {
      console.log("sjnakkjsa");
      startApp.set({ /* params */
    "action": "ACTION_SEND",
    "package": "com.whatsapp",
    "type": "text/plain"
}, {
    "android.intent.extra.TEXT":"Text..."
}).start();
    }
})

.controller('ChatCtrl',function($scope,$ionicModal){
  
  
var $_Tawk_API={},$_Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5731b2a4c6045a5c6e8cf6b2/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

})