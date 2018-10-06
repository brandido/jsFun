const scope = {
  exerciseA() {
    let personA = 'Paul'
    let personB = 'Ben'
    let personC = 'Tom'
    // let person = 'CardiaB'
    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB

        
        if (personB.includes('B')) { 
          personB = person;
          personC = personB;
          // Log B: personC
        }
      }

      personC = personA;

      // Log C: personB
    }

    changePerson();

    // Log D: personC

    const result = [
      {'A': 'Ben'},
      {'B': 'CardiB'},
      {'C': 'CardiB'},
      {'D': 'Paul'}
    ];
    return result;

    // Annotation:
    // changePerson is invoked and goes into the if condition where it climbs the scope chain to find the 
    // declaration for personA, which is globally scoped and has a value of 'Paul'.  Because the condition evaluates to 
    // true, person A is assigned is assigned the string of 'CardiB'.  Note, that person is not declared here nor up the 
    // scope chain so it will default to being scoped at the global level.  The next line has beautifyPerson invoked that
    // brings us to the beautifyPerson function that contains the first console.log() ask
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A1: number - 75 functionally scoped

      function newNumber() {
        number = 64;

        // Log B2: number - 64 scoped w/in the numberFunction function
      }

      newNumber();

      // Log C3: number - 64 due to being changed from the newNumber function but scoped w/in the NumberFunction
    }

    numberFunction();

    // Log D: number - 30 - the global scope never had the value re-assigned

    const result = [
      {'A': 75}, 
      {'B': 64},
      {'C': 64},
      {'D': 30}
    ];
    return result;

    // Annotation:
    // On 
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A1: greeting - 'Yo' functional assignment remains 
      // due to the if condition having a block scoped variable declaraton with let 
      // (use of var would not have contained the assignment w/in the block)

      function newPhrase() {
        greeting = 'Hey';

        // Log B2: greeting - 'Hey' functional re-assignment w/in the greetingFunction function
      }

      newPhrase();

      // Log C3: greeting - 'Hey' due to the functional re-assignment (w/in greetingfunction) directly above
    }

    greetingFunction();

    // Log D4: greeting - 'Hello' - global scope of greeting assignment never changed

    const result = [
      {'A': 'Yo'},
      {'B': 'Hey'},
      {'C': 'Hey'},
      {'D': 'Hello'},
      ];
    return result;

    // Annotation:
    // Declaring the globally scoped varible of greeting and assigning it to the string of 'Hello'.
    // Move next to recognize the greetingFunction then on to the greetingFunction invocation.  
    // We then go into greetingFunction functionally declaring greeting and assigning it the value of 'Yo'.
    // The next line is a conditional that returns true because greeting is equal to 'Yo' therefore let greeting is 
    // is declared within the block scope to 'Howdy'.
    // The next console logs the functionally scoped greeting variable and returns 'Yo'
    // The next function (newPhrase) is recognized then called on line 103.  It then reassigns greeting at the functionaly scope on line 89 to 'Hey'

  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A1: greeting - 'hi' - if condition above is block scoped with let, therefor doesn't change value for greeting

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B2: greeting - 'welcome' - walks up the scope chain to re-assign greeting value at the functional level w/in greetingGenerator
      }

      newGreeting();

      // Log C3: greeting - 'welcome' - due to re-assignment directly above
    }

    greetingGenerator();

    // Log D4: greeting - 'Howdy' - global greeting remained the same value

    const result = [
        {'A': 'hi'},
        {'B': 'welcome'},
        {'C': 'welcome'},
        {'D': 'howdy'},
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A2: name - Nathaniel - which is the value reassigned w/in the sayName function due to the true if condition
        // the next if condition (while evaluating to true) is block scoped due to the declaration using let, therfor contained w/in that block
      }

      // Log B3: name - Nathaniel - due to the value being changed as described above
    }

    // Log C1: name - Brittany

    sayName();

    // Log D4: name - Brittany - value never changed at the globally scoped level

    const result = [
      {'C': 'Brittany'},
      {'A': 'Nathaniel'},
      {'B': 'Nathaniel'}, 
      {'D': 'Brittany'}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A1: dog - Spot - uses the global assignment directly above

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B2: dog - Spot still from original global scoped value, block scoped assignment
        // used let variable declaration so that value remains within the condition's block 

        dog = 'Biscuit';

        // Log C3: dog - Biscuit - global reassignment

      }

      rollOver();

      // Log D4: dog - Biscuit - global value of dog applies
    }

    petDog();

    // Log E5: dog - Biscuit - global value of dog still applies

    const result = [
      {'A': 'Spot'},
      {'B': 'Spot'},
      {'C': 'Biscuit'},
      {'D': 'Biscuit'},
      {'E': 'Biscuit'}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A1: fruit - mango - first condition  changes the value of fruit to mango at functional level because var is used, (not let/const)
          // fruit still logs as mango because the console.log is called before the block scope reassignment in the directly below
          const fruit = 'strawberry'; 
        }

        // Log B2: fruit - mango - functional value w/in eatFruit function applies due block scope containment of declaraton using const in previous if condition
      }

      // Log C3: fruit - mango - functional (not block) scope still appies
    }

    eatFruit()

    // Log D4: fruit - apple - globale value never changed

    const result = [
      {'A': 'mango'},
      {'B': 'mango'},
      {'C': 'mango'},
      {'D': 'apple'},
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A1: num - 4 - functional value applies

      if (num < 5) {
        const num = 9;
            // num = 9 - block scoped assignment due to use of const
        fn2(num)
            // fn2 reassigned num at global value (to 10) did not return new num val at this block level
        const newNum = num;

        // Log B4: newNum - 9 - block level declaration and assignment from const num = 9 block assignment two lines above
      }

      newNum = num;

      // Log C: newNum - 4 - num from first line in fn1 function
    }

    const fn2 = function(num){
      // Log D2: num - 9 - functional from fn1 if block value of num (9) passed in as argument to fn2

      num = num + 1;

      // Log E3: num - 10 - reassigned - globally
    }

    fn1();

    const result = [
      {'A': 4},
      {'D': 9},
      {'E': 10}
      {'B': 9},
      {'C': 4},
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A1: hunger - 75 - reassigned globally
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0; 
        // Log B2: hunger - 0 - functionally assigned w/in gorgeYourself
      }

      // Log C3: hunger - 75 - because does not have access to gorgeYourself hunger variable due to it being functionally scoped
    };

    eatSnack();

    hunger += 5;
    // Log D4: hunger - global reassignment from 75 to 80

    eatSnack();
    // Log E5: hunger - 55 - from 80 - 25 w/in eatShack

    const result = [
      {'A': 75},
      {'B': 0},
      {'C': 75},
      {'D': 80},
      {'E': 55}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A1: sandwich - 'ketchup sandwich' globally assigned

    const addChipotle = () => {
      // Log B3: toppings - undefined - due to the name being hoisted but not its value yet
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C4: sandwich - not a mediocre sandwich - because it met the if conditional and was reassigned globally
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D2: cheeseTopping - gouda - assigned with functionally scoping w/in addCheese

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
        // global declaraton and assignment of amandaBynes
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    // global assignment of cheeseTopping to 'kraft'
    addCheese();

    addChipotle();
    // Log E5: sandwich - not a mediocre sandwich
    // Log F6: amandaBynes - National Treasure 

    const result = [
      {'A': 'ketchup sandwich'},
      {'D': 'gouda'},
      {'B': 'undefined'},
      {'C': 'not a mediocre sandwich'},
      {'E': 'not a mediocre sandwich'},
      {'F': 'National Treasure'},
      ];
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
        if (num > 5) {
           num = 7;
        }
        // Log A1: num - 7 due to condition being true and reassigning globally,
    }

    foo();

    // Log B2: num - 7 - was globally reassigned in function foo

    const result = [
      {'A': 7},
      {'B': 7}
      ];
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;
      // global assignment to 90

      function addPoints() {
        const grade = 95;
          // functionally scoped variable declaration and assignment

        if (grade === 95) {
          let grade = 97;
          //block scoped variable declaration and assignment
        }

        // Log A1: grade - 95 - functional assignment from first line of code in losePoints function
      }

      addPoints();

      // Log B2: grade - 90 due to global reassignment on first line of addPoints function
    }

    losePoints();

    // Log C3: grade - 90 due also to global reassignment on first line of addPoints function

    const result = [
      {'A': 95},
      {'B': 90},
      {'C': 90},
      ];
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A1: num - global value of 5
      num = 6;
      // Log B2: num - reassignment of num to value of 6
    }

    function second() {
      // Log C3: num - global value of 6
      let num = 7;
    }

    first();
    second();

    // Log D4: num - global value of 6

    const result = [
      {'A': 5},
      {'B': 6},
      {'C': 6},
      {'D': 6},
      ];
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A1: instructor - still global value of Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B2: instructor - still globally scoped with value of Pam because not in if block 

      function rename() {
        instructor = 'Louisa';
        // Log C3: instructor - reassigned globally to the value of 'Louisa'
      }

      rename();

      // Log D4: instructor - Louisa, was globally reassigned in rename function above

    }

    // Log E5: instructor - global value of Louisa, again due to global reassignment in rename function

    changeInstructor();

    // Log F6: instructor - is Louisa due to global reassignment in rename invocaton

    const result = [
      {'A': 'Pam'},
      {'B': 'Pam'},
      {'C': 'Louisa'},
      {'D': 'Louisa'},
      {'E': 'Louisa'},
      {'F': 'Louisa'},

      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A2: shoe - flipflop(undefined) - due to global assignment - in class answer was undefined though - see notes below
      var shoe = 'boot';
      // functional declaration and assignment to boot value
    }

    // Log B1: shoe - flipflop - due to the global assignmet of value to shoe 
    putOnShoe();
    // Log C3: shoe

    const result = [
      {'B': 'flipflop'},
      {'A': 'undefined'},
      {'C': 'flipflop'}
      ];
    return result;

    // Annotation:
    // On line 469 we declare a global variable named shoe and assign it to flipflop
    // Then we declare a global function named putOnShoe, but skip down to line 469 because
    // it hasn't been invoked yet. On line 488 we log the value of shoe, which is 'flipflop' at
    // this point in time.  The we go ahead and invoke our putOnShoe function, and when we try
    // to log shoe within our function, we get undefined because our shoe declaration on line 473
    // is hoisted to the top of that function scope. Once we've finished executing putOnShoe, we
    // go back down t line 478 and log shoe agin which will give us flipflop.
  }
}

module.exports = scope;