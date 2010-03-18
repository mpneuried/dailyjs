Benchmark = {
  results: [],

  addResult: function(start, end) {
    this.results.push(end - start);
  },

  displayResults: function() {
    var total   = 0,
        seconds = 0,
        i       = 0;
    for (i = 0; i < this.results.length; i++) {
      total += this.results[i];
    }
    seconds = total / 1000;
    return 'Elapsed time: ' + total + 'ms (' + seconds + ' seconds)';
  },

  run: function(times, callback) {
    this.results = [];
    for (var i = 0; i < times; i++) {
      var start = new Date(),
          end   = null;
      callback();
      end = new Date();
      this.addResult(start, end);
    }
    return this.displayResults();
  }
};

// Ignore the IE stats for this one
function eachNative(enumerable, callback, context) {
  if (Array.prototype.forEach && enumerable.forEach === Array.prototype.forEach) {
    enumerable.forEach(callback, context);
  }
}

function eachNumerical(enumerable, callback, context) {
  for (var i = 0, l = enumerable.length; i < l; i++) callback.call(enumerable, enumerable[i], i, enumerable);
}

function eachForIn(enumerable, callback, context) {
  for (var key in enumerable) {
    if (Object.prototype.hasOwnProperty.call(enumerable, key)) callback.call(context, enumerable[key], key, enumerable);
  }
}

function runBenchmarks() {
  var times = 100000,
      tests = [eachNative, eachNumerical, eachForIn],
      names = ['eachNative', 'eachNumerical', 'eachForIn'];

  for (var i = 0; i < tests.length; i++) {
    benchmark = Benchmark.run(times, function() {
      var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      tests[i](a, (function(number) {
        number + 1;
      }));
    });

    displayResults('Run with ' + names[i] + ':');
    displayResults(benchmark);
  }
}

// If there's no window, set things up for rhino/node
if (typeof window === 'undefined') {
  // For node
  if (typeof require != 'undefined') {
    sys = require('sys');
    displayResults = sys.puts;
  } else {
    displayResults = print;
  }
  runBenchmarks();
} else {
  displayResults = function(result) {
    var element = document.getElementById('results');
    element.innerHTML = element.innerHTML + '<p>' + result + '</p>';
  }
}
