//PROTOTYPE PATTERN

// You create an empty function so that you can access its prototype
// You can't access the prototype of an object, only of a function
// eg var myVehicle = new Object(); - can't get prototype

// Disadvantages - too verbose, check the html file to see how the objects are instantiated.
function Vehicle() {}

Vehicle.prototype.colour = "Yellow";
Vehicle.prototype.year = 1970;
Vehicle.prototype.make = "<unknown>";
Vehicle.prototype.toString = function() {
	return "toString - Colour: " + this.colour +
			" Year: " + this.year +
			" Make: " + this.make;
};