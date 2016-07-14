describe("Selection Sort", function() {
  var sort = require('./native');
  var numbers = require('./numbers');
  var selectionSort = require('./selection');

  it("sorts basic", function() {
    var data = numbers.basic;
    var actual = selectionSort(data.slice());
    var expected = sort(data.slice());
    expect(actual).toEqual(expected);
  });

  it("sorts single", function() {
    var data = numbers.single;
    var actual = selectionSort(data.slice());
    var expected = sort(data.slice());
    expect(actual).toEqual(expected);
  });

  it("sorts empty", function() {
    var data = numbers.empty;
    var actual = selectionSort(data.slice());
    var expected = sort(data.slice());
    expect(actual).toEqual(expected);
  });

  it("sorts sorted", function() {
    var data = numbers.sorted;
    var actual = selectionSort(data.slice());
    var expected = sort(data.slice());
    expect(actual).toEqual(expected);
  });

  it("sorts duplicates", function() {
    var data = numbers.duplicates;
    var actual = selectionSort(data.slice());
    var expected = sort(data.slice());
    expect(actual).toEqual(expected);
  });

});
