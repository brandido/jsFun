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
      {'D':  'Paul'}
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

      // Log A: number - 75

      function newNumber() {
        number = 64;

        // Log B: number - 64
      }

      newNumber();

      // Log C: number - 64
    }

    numberFunction();

    // Log D: number - 30

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

      // Log A: greeting - 'Yo'

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting - 'Hey'
      }

      newPhrase();

      // Log C: greeting - 'Hey'
    }

    greetingFunction();

    // Log D: greeting - 'Hello'

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

      // Log A: greeting - 'hi'

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting - 'welcome'
      }

      newGreeting();

      // Log C: greeting - 'welcome'
    }

    greetingGenerator();

    // Log D: greeting - 'Howdy'

    const result = [
        {'A': 'hi'},
        {'B': 'welcome'},
        {'C': 'welcome'},
        {'D': 'Howdy'},
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

        // Log A: name - Nathaniel
      }

      // Log B: name - Nathaniel
    }

    // Log C: name - Brittany

    sayName();

    // Log D: name - Brittany

    const result = [
      {'A': 'Nathaniel'},
      {'B': 'Nathaniel'},
      {'C': 'Brittany'},
      {'D': 'Brittany'},
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() {
    var dog = 'Spot';

    function petDog() {
      // Log A: dog - Spot

      if (dog === 'Spot') {
        let dog = 'Fluffy';
      }

      function rollOver() {
        // Log B: dog - Spot

        dog = 'Biscuit';

        // Log C: dog - Biscuit - global

      }

      rollOver();

      // Log D: dog - Biscuit - global
    }

    petDog();

    // Log E: dog - Biscuit - global

    const result = [
      {'A': 'Spot'},
      {'B': 'Spot'},
      {'C': 'Biscuit'},
      {'D': 'Biscuit'},
      {'E', 'Biscuit'}
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
          // Log A: fruit - mango - functional because var, (not let/const)
          const fruit = 'strawberry'; 
        }

        // Log B: fruit - mango - functional
      }

      // Log C: fruit - mango - functional (not block)
    }

    eatFruit()

    // Log D: fruit - apple

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

      // Log A: num - 4 - functional

      if (num < 5) {
        const num = 9;
            // num = 9 - block
        fn2(num)
            // fn2 did not return new num val
        const newNum = num;

        // Log B: newNum - 9 - block
      }

      newNum = num;

      // Log C: newNum - 4 - num from first line in function
    }

    const fn2 = function(num){
      // Log D: num - 9 - functional from fn1 if block

      num = num + 1;

      // Log E: num - 10 - reassigned - globally
    }

    fn1();

    const result = [
      {'A': 4},
      {'BD': 9},
      {'CE': 4},
      {'DB': 9},
      {'EC': 10}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger - 75 - reassigned globally
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0; 
        // Log B: hunger - 0 - functionally assigned w/in gorgeYourself
      }

      // Log C: hunger - 75 - because does not have access to gorgeYourself hunger variable
    };

    eatSnack();

    hunger += 5;
    // Log D: hunger - global reassignment from 75 to 80

    eatSnack();
    // Log E: hunger - 55 - from 80 - 25 w/in eatShack

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

    // Log A: sandwich - 'ketchup sandwich' globally assigned

    const addChipotle = () => {
      // Log B: toppings - undefined - due to the name being hoisted but not its value yet
      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich - not a mediocre sandwich - because it met the if conditional and was reassigned globally
    }

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping - gouda - assigned with functionally scoping

      const shesTheManReference = () => {
        amandaBynes = "National Treasure"
      }

      shesTheManReference();
    }

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich - not a mediocre sandwich
    // Log F: amandaBynes - National Treasure

    const result = [
      {'A': 'ketchup sandwich'},
      {'B': 'undefined'},
      {'C': 'not a mediocre sandwich'},
      {'D': 'gouda'},
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
        // Log A: num - 7 due to condition being true and reassigning globally,
    }

    foo();

    // Log B: num - 7 - was globally reassigned in function foo

    const result = [
      {'A': 7},
      {'B', 7}
      ];
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade - 90 - global reassignment
      }

      addPoints();

      // Log B: grade
    }

    losePoints();

    // Log C: grade

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num - global value of 5
      num = 6;
      // Log B: num - reassignment of num to value of 6
    }

    function second() {
      // Log C: num - global value of 6
      let num = 7;
    }

    first();
    second();

    // Log D: num - global value of 6

    const result = [
      {'A': 5},
      {'A': 6},
      {'A': 6},
      {'A': 6},
      ];
      
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor - still global value of Pam

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor - still globally scoped with value of Pam because not in if block 

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor - reassigned globally to the value of 'Louisa'
      }

      rename();

      // Log D: instructor - Louisa, was globally reassigned in function above

    }

    // Log E: instructor - global value of Pam

    changeInstructor();

    // Log F: instructor - is Louisa due to global reassignment in rename invocaton

    const result = [
      {'B': 'flipflop'},
      {'A', 'undefined'},
      {'C', 'flipflop'}
      ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      console.log(shoe)
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = [
      {'B': 'flipflop'},
      {'A', 'undefined'},
      {'C', 'flipflop'}
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