angular.module('app').controller("SearchController", function(){
	var viewModel = this;
    viewModel.title = 'Blablacar';
    
    viewModel.searchInputStart = '';
    viewModel.searchInputDestination = '';
    viewModel.searchInputDate = '';
    
    viewModel.trajets = [
		{
			depart : "Clermont-Ferrand",
			destination : "Paris",
			date : "2015-06-06",
			chauffeur : "Bobby F."
		},
		{
			depart : "Strasbourg",
			destination : "Nice",
			date : "2015-05-25",
			chauffeur : "Jackie M."
		},
		{
			depart : "Lyon",
			destination : "Brest",
			date : "2015-06-01",
			chauffeur : "Marie O. D."
		}
	];
	
	viewModel.ordersList = [
        {
            id: 1,
            title: 'Date Ascending',
            key: 'date',
            reverse: false
        },
        {
            id: 2,
            title: 'Date Descending',
            key: 'date',
            reverse: true
        }
    ];
    viewModel.order = viewModel.ordersList[0];
    
});




