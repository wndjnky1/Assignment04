// COMM644 - Assignment 4

/*// Create a namespace called Animal. Then, define two sub classes from the namespace, one called Cat and another called Dog. 
//
// STEP 1
//
var ANIMAL = ANIMAL || {}; 
ANIMAL.Dog = {}
ANIMAL.Cat = {}*/

//
// STEP 2
//
/*Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal notation and the Dog class should be created using constructor notation.*/

/*var Cat = {
   
};
   
var Dog = function () {
    
}*/
    
//
// STEP 3
// Directly underneath, create a new instance of the Dog class.  
/*
var myDog = new Dog();
*/

/*
 STEP 4
 Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.*/

/*var Animal = function () {
    window.console.log('The Animal has been created!');
}
var newAnimal = new Animal();*/

/*STEP 5
Now, change the above code so that it accepts a parameter and that value is what should be displayed in the console window. The message should be passed as an argument into the constructor at the moment that the Animal class is instantiated.*/

/*var Animal = function (isA) {
    this._isA = isA;
    window.console.log('The ' + this._isA +  ' has been created!');
}
var newAnimal = new Animal('elephant');   */

/*STEP 6
Start over and now create a new class using constructor notation called Animal. Define five properties within your class including type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in parameters into the function’s constructor, set the properties, and then pass in the actual arguments during the object’s instantiation.*/

/*var Animal = function (type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
    window.console.log('The ' + this._type + ' is a ' + this._breed + ' and is ' + this._color + ', ' + this._height + ' tall and ' + this._length + ' long.');
}
var newAnimal = new Animal('dog', 'boxer', 'brown', '28 inches', '30 inches');  */ 


/*STEP 7
Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.*/

/*
//Version 2 with property values
*/

/*var Animal = function (type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
  };

Animal.prototype.iAm = function() {
    window.console.log('this._type = ' + this._type + '\n' +  'this._breed = ' + this._breed  + '\n' +  'this._color =  ' + this._color  + '\n' +   'this._height = ' + this._height  + '\n' +   'this._length = ' + this._length)
};

var newAnimal1 = new Animal('dog', 'boxer', 'brown', '28 inches', '30 inches');   
var newAnimal2 = new Animal('cat', 'tabby', 'grey', '12 inches', '24 inches');

newAnimal1.iAm();
newAnimal2.iAm();

for(var property in newAnimal1.iAm()) {
    window.console.log(property);    
    }*/

////or......if the values of the properties weren't what you were looking for then....

/*
var Animal = function (type, breed, color, height, length) {
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
  };

var newAnimal1 = new Animal()
for(var property in newAnimal1) {
    window.console.log(property);    
    }
*/


/*STEP 8
Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.*/

/*var Animal = function (type,color) {
        this._type = type;
        this._color = color;
}
    
Animal.prototype.speak =  function () {
    if(this._type == 'dog') {
        window.console.log('The ' + this._color + ' dog is barking!'); 
    } else {(this._type == 'cat') 
        window.console.log('The ' + this._color + ' cat is meowing!'); 
   }

}
var newAnimal1 = new Animal('dog','brown');   
var newAnimal2 = new Animal('cat','grey');
newAnimal1.speak();
newAnimal2.speak();*/

/*STEP 9
Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”*/

/*var Animal = function (type, breed, color, height, length) {
        var type = type;
        var breed = breed;
        var color = color;
        var height = height;
        var length = length;
   
    var checkType = function(){
     
        window.console.log('The ' + type + ' has made a noise!');
         if (type == 'dog') {
            
           return 'dog'; 
       } else { 
           (type == 'cat') 
               
            return 'cat';   
        }
    }
        this.speak = function() {
             checkType();
     }         
}      

var newAnimal1 = new Animal('dog', 'boxer', 'brown', '28 inches', '30 inches'); 
var newAnimal2 = new Animal('cat', 'tabby', 'grey', '12 inches', '24 inches');
newAnimal1.speak();
newAnimal2.speak();*/

/*STEP 10
Create your own String method called findWords() that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of times that word was found in the paragraph.*/


var String = function(text, word) {
    this.text = text;
    this.word = word;
  }
     
String.prototype.findWord = function(text,word) {
          var numTimes = (this.text.split(this.word).length - 1);
              window.console.log('The word ' + "\'" + this.word + "\'" + ' was found ' + numTimes + ' time(s).'); 
}

var someString = new String('Flying a kite is like walking an elephant on a leash, it can easily decide to take you for a walk...this simple fact is not readily understood until one launches and flies a large power kite. Learning to kite is all about paying your dues.', 'kite');
someString.findWord();


/*STEP 11 THE RECIPE CARD
/*Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console */

/*var Recipe = function (title, servings, ingredients, directions){
    this.title = 'Bacon Wrapped Jalapeno Poppers';
    this.servings =  10;
    this.ingredients = ['- 10 jalapeno peppers', '- 1(8-ounce) package cream cheese', '- 10 slices Pecanwood Bacon, cut in half'],
    this.directions = ['Heat oven to 425deg F.', 'Halve each pepper lengthwise. Remove seeds and veins from peppers.', 'Stuff peppers with cream cheese and wrap with 1 slice of bacon.', 'Bake on baking sheet for 15 to 20 minutes or until bacon is crisp.']
  };  

Recipe.prototype.printRecipe = function() { 
    
    window.console.log(this.title + '\n' + 
                       'Serves: ' + this.servings + '\n' + 
                       'Ingredients: ' + '\n');

for (var i = 0; i < this.ingredients.length; i++) {
    window.console.log(this.ingredients[i]);
    };
    window.console.log('\n' + 'Directions: ' +  '\n');
for (var j = 0; j < this.directions.length; j++) {
       window.console.log(this.directions[j]);
       };
}  
var findMyRecipe = new Recipe();
findMyRecipe.printRecipe();*/

/*STEP 12 THE READING LIST*/
/*Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.*/

/*
var myBooks = [
      {title: 'Cometh the Hour',
       author: 'Jeffrey Archer',
       alreadyRead: false
      },
      {title: 'The Chase',
       author: 'Clive Cussler',
       alreadyRead: false
      },
      {title: 'The Wright Brothers',
       author: 'David McCullough',
       alreadyRead: false
      },
      {title: 'The Goldfinch',
       author: 'Donna Tartt',
       alreadyRead: true
      },
      {title: 'End of Watch',
      author: 'Steven King',
      alreadyRead: true
      }];

for (var i = 0; i < myBooks.length; i++) {
  var myBooks = myBooks[i];
  var myBooksInfo = myBooks.title + '" by ' + myBooks.author;
  if (myBooks.alreadyRead) {
        window.console.log('You already read "' + myBooksInfo);
  } else {
        window.console.log('You still need to read "' + myBooksInfo);
  }
}
*/


















