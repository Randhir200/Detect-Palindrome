// 2
// 6
// aabbcc
// 5
// aabcd

// output - Possible!
// Not Possible!

function runProgram(input) {
  input = input.trim().split('\n');
  var tc = +input[0];
  var line = 1;
  var bag = '';
  for (var i = 0; i < tc; i++) {
    var n = +input[line];
    line++;
    bag = input[line];
    line++;
  }
  var obj = {};
  for (var j = 0; j < bag.length; j++) {
    if (obj[bag[j]] == undefined) {
      obj[bag[j]] = 1;
    } else {
      obj[bag[j]]++;
    }
  }
  var count = 0;
  for (var e in obj) {
    if (obj[e] == 1) {
      count++;
    }
  }
  if (count > 1) {
    console.log('Not Possible');
  } else {
    console.log('Possible');
  }
}
if (process.env.USER === '') {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
