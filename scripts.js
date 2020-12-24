const souls = {
  "alixalyssa": 'https://drive.google.com/file/d/1B0ujrb4_5qsvdYBjAtayxDvK_9yZukgW/view?usp=sharing',
  "Arteaxm": '#',
  "Chaotic Jinx": '#',
  "Crackedlouv": '#',
  "Cristina": '#',
  "Dianna": '#',
  "Ethel": '#',
  "EvedoesArt": '#',
  "Fynora": '#',
  "Galaxci": '#',
  "Genysis": '#',
  "Indy": '#',
  "JdLfv": '#',
  "Kat": '#',
  "LuisaDraws": '#',
  "machixd": '#',
  "magnoliapoe": '#',
  "Mara": '#',
  "May": '#',
  "nellatianna": '#',
  "Nieve": '#',
  "Nightmarewolf": '#',
  "Novistrius": '#',
  "PyroGenesis": '#',
  "radiantclover": '#',
  "Rei": '#',
  "Richy": '#',
  "RiShia": '#',
  "Sabão": '#',
  "Saphira": '#',
  "Septenebris": '#',
  "Shememily": '#',
  "Sin": '#',
  "Sojka02": '#',
  "Sponi": '#',
  "Szmerykowo": '#',
  "Van": '#',
}

const elements = Object.keys(souls).map(function (soulName, index) {
  const link = document.createElement('a');
  link.classList.add('gift-wrapper');
  link.href = souls[soulName];
  link.innerHTML = '<div class="disco-wrapper"> <div class="gift"> <div class="soul-name">' + soulName + '</div> </div> </div>'

  const randomHue = Math.floor(Math.random() * 360);
  link.querySelector('.gift').style = 'filter: hue-rotate(' + randomHue + 'deg)';

  if (soulName.length <= 5) {
    link.classList.add('short') 
  } else if (soulName.length <= 8) { 
    link.classList.add('medium');
  } else {
    link.classList.add('long');
  }

  return link;
});

const gifts = document.querySelector(".gifts");

elements.forEach(function (element) {
  gifts.appendChild(element);
});
