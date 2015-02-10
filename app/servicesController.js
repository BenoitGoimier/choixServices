(function() {

	angular.module('servicesApp').controller('ServicesController', [ '$scope', function($scope){
		this.listeServices = [
			{
				name: 'Web Development',
				price: 300,
				active: true
			},{
				name: 'Design',
				price: 400,
				active: false
			},{
				name: 'Integration',
				price: 250,
				active: false
			},{
				name: 'Formation',
				price: 220,
				active: false
			}
		];

		this.total = function(){
			var totalCout = 0;

			for(var i = 0; i < this.listeServices.length; i++){
				if (this.listeServices[i].active) {
					totalCout += this.listeServices[i].price;
				}
			}

			return totalCout;
		};

		this.toggleActive = function(service){
			service.active = !service.active;
		};

		this.countActive = function(){
			var totalActive = 0;

			for(var i = 0; i < this.listeServices.length; i++){
				if (this.listeServices[i].active) {
					totalActive++;
				}
			}

			return totalActive;
		};
	}]);

})();
