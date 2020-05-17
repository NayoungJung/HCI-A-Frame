
var position = 0;
var rocket = document.getElementById('bullet');

function move(){
	boolean=false;
	rocket.object3D.position.y +=  position;
	rocket.object3D.position.z -=  position;
	else console.log(rocket.object3D.position);
}

setInterval(move, 16);


rocket.addEventListener('mouseenter', function(){
	boolean=true;
	position = 0.02;
	console.log('mouse enter');
});

rocket.addEventListener('mouseleave', function(){
	boolean=false;
	position = 0.02;
	console.slog('mouse leave');
});

