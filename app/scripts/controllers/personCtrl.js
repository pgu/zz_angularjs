function PersonCtrl($scope, MyService) {

    console.log('ctrl-person ' + $scope.person.name);

    $scope.save = function() {
        var p = $scope.person;

        window.DB_persons[p.id] = JSON.parse(JSON.stringify(p));
        localStorage['DB_persons'] = JSON.stringify(window.DB_persons);
    };

    $scope.j = MyService.getJouyous();
    $scope.o = MyService.getJouyouOthers();
    $scope.k = MyService.getKyouikus();
    $scope.k1 = MyService.getKyouikus1();


//    jouyous: 6 MyService.js:2145
//    jouyous by grades: 1 MyService.js:2152
//    kyouikus: 34 MyService.js:2159
//    ctrl-person new personCtrl.js:3
//    get jouyous: 25 MyService.js:2166
//    get others: 14 MyService.js:2174
//    get kyouikus: 11 MyService.js:2182
//    get k1: 1

//    jouyous: 6 MyService.js:2145
//    jouyous by grades: 2 MyService.js:2152
//    kyouikus: 47 MyService.js:2159
//    ctrl-person new personCtrl.js:3
//    get jouyous: 43 MyService.js:2166
//    get others: 24 MyService.js:2174
//    get kyouikus: 13 MyService.js:2182
//    get k1: 2 MyService.js:2190

}