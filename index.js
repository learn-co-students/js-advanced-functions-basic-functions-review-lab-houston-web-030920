function saturdayFun(argument = "roller-skate") {
  return `This Saturday, I want to ${argument}!`;
}

let mondayWork = function (argument = "go to the office") {
  return `This Monday, I will ${argument}.`;
};

function wrapAdjective(style = "*") {
  return function (word = "special") {
    return `You are ${style}${word}${style}!`;
  };
}

const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

let actionApplyer = function (start, ray) {
  let a = start;

  for (let i = 0; i < ray.length; i++) {
    a = ray[i](a);
  }

  return a;
};
