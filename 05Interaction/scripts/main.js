
var position = 0;
var rocket = document.getElementById('bullet');

function move(){
	boolean=false;
	rocket.object3D.position.y +=  position;
	rocket.object3D.position.z -=  position;

	if (rocket.object3D.position.y>=30){
		rocket.object3D.position.y=30;
		rocket.object3D.position.z=-30;
	}
	else console.log(rocket.object3D.position);
}

setInterval(move, 16);


rocket.addEventListener('mouseenter', function(){
	boolean=true;
	position = 0.08;
	console.log('mouse enter');
});

rocket.addEventListener('mouseleave', function(){
	boolean=true;
	position = 0.08;
	console.log('mouse leave');
});
