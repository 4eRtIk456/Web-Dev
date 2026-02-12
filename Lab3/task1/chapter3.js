"use strict";


function hello(name) {
  let phrase = `Hello, ${name}!`;

  debugger;  // <-- the debugger stops here

  say(phrase);
};

for (let i = 0; i < 5; i++) {
  console.log("value,", i);
};

/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */

describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });

});
// describe("title", function() { ... })
// Какую функциональность мы описываем? В нашем случае мы описываем функцию pow, используемую для группировки «работников» — itблоков.

// it("use case description", function() { ... })
// В заголовке itмы в удобочитаемой форме описываем конкретный вариант использования, а второй аргумент — это функция, которая его проверяет.

// assert.equal(value1, value2)
// itЕсли реализация корректна, код внутри блока должен выполняться без ошибок.

// Функции assert.*используются для проверки того, powработает ли 
// функция должным образом. Здесь мы используем одну из них — 
// ` assert.equalfunction`, которая сравнивает аргументы и выдает ошибку, 
// если они не равны. Здесь она проверяет, pow(2, 3)равен ли результат функции 
// function` 8. Существуют и другие типы сравнений и проверок, которые 
// мы добавим позже.

describe("pow", function() {

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  // ... more tests to follow here, both describe and it can be added
});

describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});

describe("Raises x to power n", function() {
  it("5 in the power of 1 equals 5", function() {
    assert.equal(pow(5, 1), 5);
  });

  // Mocha will run only this block
  it.only("5 in the power of 2 equals 25", function() {
    assert.equal(pow(5, 2), 25);
  });

  it("5 in the power of 3 equals 125", function() {
    assert.equal(pow(5, 3), 125);
  });
});

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

// Полифилы
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}