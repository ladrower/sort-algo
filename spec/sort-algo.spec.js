describe("Sort algo >", function() {
  var sort = require('./native');
  var numbers = require('./numbers');
  var sortAlgos = ['selection'];
  var sortCases = ['basic', 'single', 'empty', 'sorted', 'duplicates'];
  var expected = {};

  sortCases.forEach(function (caseName) {
      expected[caseName] = sort(numbers[caseName].slice());
  });

  sortAlgos.forEach(function (sortName) {
    describe(sortName + ' >', function () {
      var sorter = require('../src/' + sortName);
      sortCases.forEach(function (caseName) {
        it('sorts ' + caseName, function() {
          var actual = sorter(numbers[caseName].slice());
          expect(actual).toEqual(expected[caseName]);
        });
      });                 
    });
  });
});
