app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschettas',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Steak',
      description: 'Prime AAA+++ Steak, wood seared.',
      price: 201.95
    },
    {
      name: 'Lamb Chop',
      description: 'Fresh Himalayan Lamp Chop, charcoal grilled.',
      price: 315.95
    },
    {
      name: 'Goat Eyeballs',
      description: 'Cured goat eyeballs marinated in BBQ sauce.',
      price: 422.95
    }
  ]; 
  
  $scope.extras = [
    {
      name: 'French Fries',
      description: 'Hand cut french fries.',
      price: 11.95
    },
    {
      name: 'Popcorn',
      description: 'Big puffy, half caramel half chedder cheese.',
      price: 11.95
    },
    {
      name: 'Milk Chocolate Drinking Chocolate',
      description: 'Highest quality milk chocolate in liquid form.',
      price: 11.95
    }
  ]; 

}]);