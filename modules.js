(function (angular) {

    var mode = window.location.hash.slice(1);

    var create = function (name) {
        if (mode === 'typical') {
            angular.module(name, [])
                .factory(name + 'Object1', function () {return {};});
        } else {
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
        }
    };

    var all = [];
    for (var i = 0; i < 100; i++) {
        all[i] = i.toString();
        create(all[i]);
    }

    var app = angular.module('app', all);

}(window.angular));
