// SHORTHAND COMBINATION - SAME IDEA AS PREVIOUS

function Vehicle(colour, year, make) {
	this.colour = colour;
	this.year = year;
	this.make = make;
}

// Export all of the functionality of the prototype object as a single function
// Creating a method to the prototype each time is cumbersome
// This way is less verbose than the previous example
// N.B you must give the prototype a reference to the constructor
Vehicle.prototype = {

	constructor: Vehicle,

	toString: function() {
		return "toString - Colour: " + this.colour +
				" Year: " + this.year +
				" Make: " + this.make;
	},

	getColour: function() {
		return this.colour;
	},

	getYear: function() {
		return this.year;
	}
};