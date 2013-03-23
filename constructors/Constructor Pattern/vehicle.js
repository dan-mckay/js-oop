// CONSTRUCTOR PATTERN

// This is not ideal as each copy of the person object
// has its own copy of the toString method (performance issues)
function Vehicle(colour, year, make) {
	this.colour = colour;
	this.year = year;
	this.make = make;

	this.toString = function() {
		return "toString - Colour: " + this.colour +
				" Year: " + this.year +
				" Make: " + this.make;
	};
}