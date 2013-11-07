/*
 * Constructor
 * @link http://javascript.crockford.com/private.html
 * */
function Container(param){
	/*
	 * Public members
	 * */
	this.memeber = param;
	/*
	 * Private members
	 * */
	var secret = 3;
	var that = this;

	/*
	 * Private method
	 * */
	function dec() {
		if (secret > 0) {
			secret -= 1;
			return true;
		} else {
			return false;
		}
	}

	/*
	 * Privileged method
	 * */
	this.service = function(){
		return dec() ? that.memeber : null;
	};
}

/*
 * Public method
 * */
Container.prototype.stamp = function(string){
	return this.memeber + string;
};

/*
* Instantiate
* */
var myContainer = new Container('abc');