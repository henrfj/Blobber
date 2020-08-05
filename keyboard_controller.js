/*
	This manages keyboard inputs from the user.
	By calling the function update() the controls may be synced with some interval.
	Usage example:
		kc = new KeyboardControl();
		kc.listenerObject = window;

		function timedLoop(){
			kc.update();
		}
		setInterval(timedLoop, 1000/this.fps)
*/

class KeyboardControl {
	keys = [];
	
	keyCodeLog = [];
	
	keyDownCallBacks = [];
	keyUpCallBacks = [];
	
	pipe;
	number1;
	number2;
	number3;
	number4;
	number5;
	number6;
	number7;
	number8;
	number9;
	number0;
	plus;
	backslash;
	backspace;
	q;
	w;
	e;
	r;
	t;
	y;
	u;
	i;
	o;
	p;
	a;
	s;
	d;
	f;
	g;
	h;
	j;
	k;
	l;
	z;
	x;
	c;
	v;
	b;
	n;
	m;
	ctrl;
	shift;
	space;
	up;
	down;
	right;
	left;
	numpadPlus;
	numpadMinus;
	esc;
	enter;
	comma;
	period;
	constructor () {
		this.keys;
		
		this.keyCodeLog;
		
		this.keyDownCallBacks;
		this.keyUpCallBacks;
		
		this.pipe = new Key(220);
		this.keys.push(this.pipe);
		this.number1 = new Key(49);
		this.keys.push(this.number1);
		this.number2 = new Key(50);
		this.keys.push(this.number2);
		this.number3 = new Key(51);
		this.keys.push(this.number3);
		this.number4 = new Key(52);
		this.keys.push(this.number4);
		this.number5 = new Key(53);
		this.keys.push(this.number5);
		this.number6 = new Key(54);
		this.keys.push(this.number6);
		this.number7 = new Key(55);
		this.keys.push(this.number7);
		this.number8 = new Key(56);
		this.keys.push(this.number8);
		this.number9 = new Key(57);
		this.keys.push(this.number9);
		this.number0 = new Key(48);
		this.keys.push(this.number0);
		this.plus = new Key(187);
		this.keys.push(this.plus);
		this.backslash = new Key(219);
		this.keys.push(this.backslash);
		this.backspace = new Key(8);
		this.keys.push(this.backspace);
		this.q = new Key(81);
		this.keys.push(this.q);
		this.w = new Key(87);
		this.keys.push(this.w);
		this.e = new Key(69);
		this.keys.push(this.e);
		this.r = new Key(82);
		this.keys.push(this.r);
		this.t = new Key(84);
		this.keys.push(this.t);
		this.y = new Key(89);
		this.keys.push(this.y);
		this.u = new Key(85);
		this.keys.push(this.u);
		this.i = new Key(73);
		this.keys.push(this.i);
		this.o = new Key(79);
		this.keys.push(this.o);
		this.p = new Key(80);
		this.keys.push(this.p);
		this.a = new Key(65);
		this.keys.push(this.a);
		this.s = new Key(83);
		this.keys.push(this.s);
		this.d = new Key(68);
		this.keys.push(this.d);
		this.f = new Key(70);
		this.keys.push(this.f);
		this.g = new Key(71);
		this.keys.push(this.g);
		this.h = new Key(72);
		this.keys.push(this.h);
		this.j = new Key(74);
		this.keys.push(this.j);
		this.k = new Key(75);
		this.keys.push(this.k);
		this.l = new Key(76);
		this.keys.push(this.l);
		this.z = new Key(90);
		this.keys.push(this.z);
		this.x = new Key(88);
		this.keys.push(this.x);
		this.c = new Key(67);
		this.keys.push(this.c);
		this.v = new Key(86);
		this.keys.push(this.v);
		this.b = new Key(66);
		this.keys.push(this.b);
		this.n = new Key(78);
		this.keys.push(this.n);
		this.m = new Key(77);
		this.keys.push(this.m);
		this.ctrl = new Key(17);
		this.keys.push(this.ctrl);
		this.shift = new Key(16);
		this.keys.push(this.shift);
		this.space = new Key(32);
		this.keys.push(this.space);
		this.up = new Key(38);
		this.keys.push(this.up);
		this.down = new Key(40);
		this.keys.push(this.down);
		this.right = new Key(39);
		this.keys.push(this.right);
		this.left = new Key(37);
		this.keys.push(this.left);
		this.numpadPlus = new Key(107);
		this.keys.push(this.numpadPlus);
		this.numpadMinus = new Key(109);
		this.keys.push(this.numpadMinus);
		this.esc = new Key(27);
		this.keys.push(this.esc);
		this.enter = new Key(13);
		this.keys.push(this.enter);
		this.comma = new Key(188);
		this.keys.push(this.comma);
		this.period = new Key(190);
		this.keys.push(this.period);
	}
	set listenerObject (listenerObject) {
		listenerObject.addEventListener("keydown", this.keyDown.bind(this));
		listenerObject.addEventListener("keyup", this.keyUp.bind(this));
	}
	addKeyUpEventListener (callback){
		this.keyDownCallBacks.push(callback);
	}
	addEventListener (callback){
		this.keyUpCallBacks.push(callback);
	}
	keyDown (event){
	
		var found = false;
		for(var i=0; i<this.keys.length; i++){
			if(this.keys[i].keyCode == event.keyCode){
				this.keys[i].isDown = true;
				this.keys[i].timeDown = 0;
				found = true;
				break;
			}
		}
		this.keyCodeLog.push(event.keyCode);
		for(var i=0; i<this.keyDownCallBacks.length; i++){
			this.keyDownCallBacks[i]();
		}
		
		if(found){
			event.preventDefault();
		}
	}
	keyUp (event){
	
		var found = false;
		for(var i=0; i<this.keys.length; i++){
			if(this.keys[i].keyCode == event.keyCode){
				this.keys[i].isDown = false;
				this.keys[i].timeUp = 0;
				found = true;
				break;
			}
		}
		for(var i=0; i<this.keyUpCallBacks.length; i++){
			this.keyUpCallBacks[i]();
		}
		
		if(found){
			event.preventDefault();
		}
	}
	reset (){
		for(var i=0; i<this.keys.length; i++){
			this.keys[i].isDown = false;
			this.keys[i].timeUp = 0;
			this.keys[i].timeDown = 0;
		}
	}
	update (){
		// This function can be used to time for how long a key has been held down or released.
		
		for(var i=0; i<this.keys.length; i++){
			if(this.keys[i].isDown){
				this.keys[i].timeDown++;
			}else{
				this.keys[i].timeUp++;
			}
		}
	}
	getKeyNames (){
		// usage: Press keys in order. Then call this function, and code for copy paste in constructor will be generated.
		
		var names = prompt("give key names. Example \"tab,q,w,e,r,t,y,u,i,o,p,enter,caps,a,s\"");
		names = names.split(",");
		
		var result = "";
		for(var i=0; i<Math.min(names.length, this.keyCodeLog.length); i++){
			result += "\tthis." + names[i] + " = new Key(" + this.keyCodeLog[i] + ");\n\tthis.keys.push(this." + names[i] + ");\n"
		}
		
		console.log(result);
	}
}
class Key {
	constructor (keyCode) {
		this.isDown = false;
		this.timeDown = 0;
		this.timeUp = 0;
		this.keyCode = keyCode;
	}
	isPushed () {
		return this.timeDown == 1 && (this.isDown || this.timeUp == 1);
	}
}