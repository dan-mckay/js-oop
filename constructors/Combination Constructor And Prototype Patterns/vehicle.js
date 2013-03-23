// COMBINATION OF CONSTRUCTOR & PROTOTYPE

// This approach gives you an OOP style constructor
// and the bonus of sharing copies of the methods through the prototype

function Vehicle(colour, year, make) {
	this.colour = colour;
	this.year = year;
	this.make = make;
}

Vehicle.prototype.toString = function() {
	return "Colour: " + this.colour +
			" Year: " + this.year +
			" Make: " + this.make;
};

// You wouldn't normally create get/sets as the variables aren't private
// but they are here to illustrate the shortcomings of this approach in 
// comparison to the alternative prototype syntax highlighted in the next example

Vehicle.prototype.getColour = function() {
	return this.colour;
};

Vehicle.prototype.getYear = function() {
	return this.year;
};