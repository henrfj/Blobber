class Vec{
	x;
	y;
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
	static add(v1, v2){
		return new Vec(v1.x + v2.x, v1.y + v2.y);
	}
	static sub(v1, v2){
		return new Vec(v1.x - v2.x, v1.y - v2.y);
	}
	static dot(v1, v2){
		return v1.x * v2.x + v1.y * v2.y;
	}
	mag(){
		return Math.sqrt(this.x*this.x + this.y*this.y);
	}

	static div(v1, divident){
		return new Vec(v1.x/divident, v1.y/divident);
	}

	
	static scale(v1, factor){
		return new Vec(v1.x*factor, v1.y*factor);
	}

}


// Static:
//	Vec.add(v1, v2);
// None static:
//  v1.add(v2);