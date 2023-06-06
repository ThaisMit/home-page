function changeMode() {
  body = document.getElementById('bodyStyle')
  mode = document.getElementById('modeNow')
  if (mode.value == 'light') {
    mode.value = 'dark'
    body.style.backgroundColor = '#1E1E1E'
    body.style.color = '#E3E3E3'
  } else {
    mode.value = 'light'
    body.style.backgroundColor = '#ffffff'
    body.style.color = '#141414'
  }
}

function changeImagePoetry() {
  var photos = [
    'image/img1.jpg',
    'image/img2.jpg',
    'image/img3.jpg',
    'image/img4.jpg',
    'image/img5.jpg'
  ]
  var sentences = [
    '"Ah, quem me dera ser poeta<br />Pra cantar em seu louvor<br />Belas canções, lindos poemas<br />Doces frases de amor."<br /><br /> - Tom Jobim',
    '"De quem é o olhar?<br />Que espreita pelos meus olhos?"<br /><br /> - Fernando Pessoa',
    '"A luz acha que viaja mais rápido que tudo, mas está errada. Não importa quão rápido a luz viaje,<br /> ela descobre que a escuridão sempre chega antes<br /> e está a sua espera."<br /><br /> - Terry Pratchett',
    '"Persona é a máscara usada pelo indivíduo<br /> em resposta às convenções e tradições sociais..."<br /><br /> - Carl Jung',
    '"Todos nós vamos morrer, que circo!<br /> Só isso deveria fazer com que amássemos uns aos outros,<br /> mas não faz."<br /><br /> - Charles Bukowski'
  ]
  document.getElementById('backImage').src =
    photos[Math.floor(Math.random() * 5)]
  document.getElementById('poetry').innerHTML =
    sentences[Math.floor(Math.random() * 5)]
}

setInterval(changeImagePoetry, 10000)
