function PersonCtrl($scope) {

    console.log('ctrl-person ' + $scope.person.name);

    $scope.save = function() {
        var p = $scope.person;

        window.DB_persons[p.id] = p;
    }
}