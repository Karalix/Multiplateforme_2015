angular.module('app').controller("SearchController", function(){
	var viewModel = this;
    viewModel.title = 'Blablacar';
    
    viewModel.searchInputStart = '';
    viewModel.searchInputDestination = '';
    viewModel.searchInputDate = '';
	
	viewModel.matchingTrajets = [];
    
    viewModel.trajets = [
		{
			depart : "Clermont-Ferrand",
			destination : "Paris",
			date : new Date("2015-06-06"),
			chauffeur : "Bobby F."
		},
		{
			depart : "Strasbourg",
			destination : "Nice",
			date : new Date("2015-05-25"),
			chauffeur : "Jackie M."
		},
		{
			depart : "Lyon",
			destination : "Brest",
			date : new Date("2015-06-01"),
			chauffeur : "Marie O. D."
		}
	];
	
	viewModel.ordersList = [
        {
            id: 1,
            title: 'Date ascendante',
            key: 'date',
            reverse: false
        },
        {
            id: 2,
            title: 'Date descendante',
            key: 'date',
            reverse: true
        }
    ];
    viewModel.order = viewModel.ordersList[0];
	
	viewModel.fillMatchingTrajets = function () {
		//On vide le tableau de résultats
		viewModel.matchingTrajets.length = 0 ;
		
		viewModel.trajets.forEach(function(trajet) {
			//On vérifie le départ
			var departMatched = false;
			var destinationMatched = false;
			
			if(trajet.depart.toUpperCase().indexOf(viewModel.searchInputStart.toUpperCase()) != -1) {
				departMatched = true ;
			}
			
			if(trajet.destination.toUpperCase().indexOf(viewModel.searchInputDestination.toUpperCase()) != -1) {
				destinationMatched = true ;
			}
			
			if(departMatched && destinationMatched) {
				viewModel.matchingTrajets.push(trajet);
				console.log("Matched !");
			}
			
		}, this);
		
		
	}    
});




