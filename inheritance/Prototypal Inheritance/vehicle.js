// SUPERCLASS

function Vehicle(colour, year, make) {
	this.colour = colour;
	this.year = year;
	this.make = make;
}

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