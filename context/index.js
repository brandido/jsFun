const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    }

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');


    // What is the value of `this` when we call ship.fly()?
    const result = 'instance of SpaceProbe';
    return result;

    // Annotation:
    // looking at ship, it is a new instance of the SpaceProbe class
    // then moving to the SpaceProbe class constructor you can see the fly method
    // brings in the fly function (which can be confusing as the fly function is 
    // written with an arrow function would bind the this to the global window object
    // based on its current lexical position)
    // Howver, in this case, when ship.fly is called this is bound to the new instance from SpaceProbe
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation:
    // This defaults to the global window object since it is in a function
    // that is not on an object.
  },

  exerciseC() {
    const car = {
      make: "Tesla",
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById("btn");
    el.addEventListener("click", car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    const result = 'car';
    return result;

    // Annotation: 
    // When the user clicks on the el eventListener, they invoke the 
    // getInfo method on the car object.  You can therefor use the 
    // left of the dot rule which in this case would verify that
    // the car is what this would refer to.
  },

  exerciseD() {
    const dog = {
      breed: "Chihuahua",
      getBreed: function(){
        const innerFunction = function() {
        console.log(this.breed);
      };
    
      return innerFunction();
      }
    };


    // What is the value of `this` when we call dog.getBreed()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Because this is wrapped with a function in a function, when getBreed
    // method is invoked it can't
    // access the dog object and therefor has to default to the window
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    }


    // What is the value of `this` when we call fn()?
    const result = 'global window object';
    return result;

    // Annotation: 
    // Similar to exerciseB, This defaults to the global window object since it is in a function
    // that is not on an object.  It is an arrow function so this is determined
    // upon creation of the function
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // Storm is an instance object from the Hero class constructor.  
    // identifyHero is method on the Hero class so when it is invoked
    // on the storm instance this will point to the newly created object
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
    }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`)
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');


    // What is the value of `this` when we call monopoly.restart()?
    const result = 'instance of Game';
    return result;

    // Annotation: 
    // restart() is a method on the Game class constructor, it therefor
    // follows the Rule 3 - this refers to the newly created object
    // However, this could be locked into the function wrapper of the
    // callback on the setTimeout method so....similar to exerciseD, this
    // may be blocked from the new instance object (monopoly)
  },

  exerciseH() {
    const obj = {
      arrowFunction: null,
      method: function() {
        this.arrowFunction = () => { return this };
      }
    };

    obj.method();

    // What is the value of `this` when we call obj.arrowFunction()?
    const result = 'obj';
    return result;

    // Annotation: 
    // Without overthinking, this - if you obj.arrowFunction the left of 
    // the dot rule refers to this pointing to obj
    //  
  
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets)

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    const result = 'poets';
    return result;

    // Annotation: 
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
    // The second argument (which is optional) on a .map method states the Value to use as this when executing callback
    // Therefor, poets.map will return the poets obj on every iteration
  },

  exerciseJ() {
    $('#btn').on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'global window object';
    return result;

    // Annotation: 
    // As this is within a function not contained in a named object,
    // it will default to the window.  I am curious though it it might
    // actually refer to the DOM though, or maybe even the jQuery Object
    // which sits inbetween the JS and the DOM.
  }

};

module.exports = context;