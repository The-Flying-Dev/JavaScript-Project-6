const api_val = config.key;
const title = ['comedy','action','drama','fantasy','horror','thriller','game','fight','fast','animation'];
const query = Math.floor(Math.random() *  title.length);
const choice = title[query];

fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=${choice}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": `${api_val}`
	}
})
.then(response =>  response.json())
.then(data => {
	const movieArray = data.d;

	movieArray.map((element) => {
		const name = element.l;
		const image = element.i.imageUrl;
		const content = `<li><img src="${image}"> <h2>${name}</h2></li>`
		document.querySelector('.content').innerHTML += content;
	})
})
.catch(err => {
	console.error(err);
});

let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1400,
    delay: (el, i) => 100 + 30 * i
  });

 