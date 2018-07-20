var draw = document.getElementById('boy');
var ctx = draw.getContext('2d');

//Tête
  ctx.beginPath();
  ctx.fillStyle = '#976f0f';
  ctx.arc(200,120,40,0,Math.PI*2);
  ctx.fill();
//Bras droit
  ctx.beginPath();
  ctx.fillStyle = '#976f0f';
  ctx.moveTo(70,150);
  ctx.lineTo(330,150);
  ctx.quadraticCurveTo(350,165,330,180);
//Jambe droite
  ctx.lineTo(237,180);
  ctx.lineTo(237,340);
  ctx.quadraticCurveTo(220,348,207,340);
//Jambe gauche
  ctx.lineTo(207,290);
  ctx.quadraticCurveTo(200,280,195,290);
  ctx.lineTo(195,340);
  ctx.quadraticCurveTo(178,350,163,340);
//Bras gauche
  ctx.lineTo(163,180);
  ctx.lineTo(70,180);
  ctx.quadraticCurveTo(50,165,70,150);
  ctx.fill();
//Boutons
  ctx.beginPath();
  ctx.fillStyle = '#7a2976';
  ctx.arc(200,190,9,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = '#7a2976';
  ctx.arc(200,220,9,0,Math.PI*2);
  ctx.fill();
//Bouche
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.moveTo(185,133);
  ctx.quadraticCurveTo(200,138,215,133);
  ctx.quadraticCurveTo(200,148,185,133);
  ctx.stroke();
//Yeux
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(190,115,7,0,Math.PI*2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(210,115,7,0,Math.PI*2);
  ctx.fill();
//Sourcils
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(180,110);
  ctx.quadraticCurveTo(180,100,195,105);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.moveTo(205,105);
  ctx.quadraticCurveTo(220,100,215,105);
  ctx.stroke();
