Battle = function(unit1, unit2){
	this.unit1 = unit1;
	this.unit2 = unit2;
	this.active = unit1;
	this.inactive = unit2;
	//this.active_player = unit1;
	//this.inactive_player = unit2;

	this.draw = function() {
		console.log('active - '+this.active.getName())
		console.log('inactive - '+this.inactive.getName())
		if(this.active == unit1) {
			var unit1_code = this.unit1.getIconCode('ally');
			var unit2_code = this.unit2.getIconCode('enemy');
		} else {
			var unit1_code = this.unit1.getIconCode('enemy');
			var unit2_code = this.unit2.getIconCode('ally');			
		};
		$(".battleground").html(unit1_code+unit2_code);
	};
	this.passPriority = function() {
		this.active = (this.active == this.unit1 ? this.unit2 : this.unit1);
		this.inactive = (this.active == this.unit1 ? this.unit2 : this.unit1);
		this.draw();
	}

};
battle = new Battle(knight, berserk);
battle.draw();