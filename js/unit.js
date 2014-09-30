function Unit(name, hp, damage) {
	this.name = name;
	this.hp = hp;
	this.max_hp = hp;
	this.damage = damage;

	this.getName = function() {return this.name};
	this.getHp = function() {return this.hp};
	this.getMaxHp = function() {return this.max_hp};
	this.getDamage = function() {return this.damage};

	this.setName = function(value) {return this.name = value};
	this.setHp = function(value) {return this.hp = value};
	this.setMaxHp = function(value) {return this.max_hp = value};
	this.setDamage = function(value) {return this.damage = value};

	this.reduceHp = function(value) {
		return (this.hp - value > 0 ? this.hp -= value : this.hp = 0) //Проверка при уменьшении хп, если результат меньше нуля, то вместо этого хп меняется на ноль
	};
	this.addHp = function(value) {
		return (this.hp + value < this.max_hp ? this.hp += value : this.hp = this.max_hp) //Проверка при увеличении хп, если результат больше максимального хп, то вместо этого хп меняется на максимальное хп
	};

	this.strike = function(target) {
		target.reduceHp(this.getDamage());
		battle.passPriority();
	};

	this.getIconCode = function(custom_class) {
		var onclick = (custom_class == 'enemy' ? "battle.active.strike(battle.inactive)" : "");
		return '<div class="unit-icon '+custom_class+'"" onclick='+onclick+'>'+this.getName()+'<br>'+this.getHp()+'/'+this.getMaxHp()+'</div>';
	}

};

var knight = new Unit('Knight', 100, 10);
var berserk = new Unit('Berserk', 20, 50);