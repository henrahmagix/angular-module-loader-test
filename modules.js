(function (angular) {

    var createTypical = function (name) {
        angular.module(name, [])
            .factory(name + 'Object1', function () {return {};});
    };

    var createModular = function (name) {
        angular.module(name + 'Factory1', []).factory(name + 'Object1', function () {return {};});
        angular.module(name + 'Factory2', []).factory(name + 'Object2', function () {return {};});
        angular.module(name + 'Factory3', []).factory(name + 'Object3', function () {return {};});
        angular.module(name + 'Factory4', []).factory(name + 'Object4', function () {return {};});
        angular.module(name + 'Factory5', []).factory(name + 'Object5', function () {return {};});
        angular.module(name, [
            name + 'Factory1',
            name + 'Factory2',
            name + 'Factory3',
            name + 'Factory4',
            name + 'Factory5'
        ]);
    };

    var allTypical = [];
    var allModular = [];

    var LIMIT = 100;



    console.time('Typical');

    for (var i = 0; i < LIMIT; i++) {
        allTypical[i] = 'typical' + i.toString();
        createTypical(allTypical[i]);
    }
    angular.module('app-typical', allTypical);
    angular.bootstrap(document.getElementById('app-typical'), ['app-typical']);

    console.timeEnd('Typical');



    console.time('Modular');

    for (var i = 0; i < LIMIT; i++) {
        allModular[i] = 'modular' + i.toString();
        createModular(allModular[i]);
    }
    angular.module('app-modular', allModular);
    angular.bootstrap(document.getElementById('app-modular'), ['app-modular']);

    console.timeEnd('Modular');


}(window.angular));
