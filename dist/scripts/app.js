(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
			.state('home', {
                url: '/rooms/:roomId',
				controller: 'CurrentRoomCtrl as $currentRoom',
                templateUrl: '/templates/home.html'
//				onEnter: $currentRoom.getRoomName($currentRoom.roomId);
            })
		
			.state('modal', {
				
				url: '/',
				contorller: 'ModalCtrl as modal',
				templateUrl: '/templates/modal.html'
			
			});
           
    }
    
    angular
         .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
         .config(config);
 })();



 