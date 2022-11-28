let bolas= [];

function setup(){
	createCanvas(windowWidth, windowHeight);}

function draw() {
	for (let i = 0; i < bolas.length; i++){
		if (bolas[i].isAlife) {
			bolas[i].update();
			bolas[i].display();
		}
  
	}
}

function mouseClicked() {
	background('rgba(115,115,115)');
	for (let i= 0; i < 200; i++){
		let verde= new Liana(mouseX, mouseY);
		bolas.push(verde);
	}
	// print(bolas.length);
}

// -------------------------------
// ----------- Classes -----------
// -------------------------------

// ------ Random Walker -------------
class Liana{
	constructor(_mouseX, _mouseY){
		this.red= random(170, 255);
		this.green= random(120, 255);
		this.blue= random(120, 170);

		this.t= 0;
		this.tSpeed= random(0.3);
		this.noiseShift= random(3000);
		this.lifespan= int(random(20, 30));

		this.isAlife= true;

		this.pos= createVector(_mouseX, _mouseY);
		this.speed= createVector(random(-3, 3), random(-3, 3));
		this.diametro= random(20, 30);
		this.ultimabola= this.diametro/ 3;
		print('Hola: universo'+ this.lifespan + ' frames.');
	}
	update(_t){
		this.speed.rotate(
			map(noise(this.t + this.noiseShift), 0, 1, -0.1, 0.1)
		);

		this.pos.add(this.speed);
		this.t += this.tSpeed;

		this.lifespan--;
	}
	display() {
		stroke('rgba(3,3,3)');
		strokeWeight(3);
		fill(this.red, this.green, this.blue);
		ellipse(this.pos.x, this.pos.y, this.diametro, this.diametro);

		if (this.lifespan <= 0) {
			this.muriending();
		}
	}

	muriending() {
		this.diametro -= 0.3;
		if (this.diametro <= 0) {
			this.isAlife = false;
			print('vivimos en una simulacion ' + this.isAlife);
			ellipse(this.pos.x, this.pos.y, this.ultimabola, this.ultimabola);
		}
	}
}
