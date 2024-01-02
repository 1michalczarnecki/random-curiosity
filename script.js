// const randomFact = () => {
// 	const number = Math.floor(Math.random()* facts.length)

// 	funFact.textContent = facts[number]
// }

// randomFact()

const currentDay = document.querySelector('.current-day')
const funFuct = document.querySelector('.fun-fact')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Żeby wejść na Wieżę Eiffla trzeba pokonać aż 1710 stopni.'
]

const date = new Date()
currentDay.textContent = date.toLocaleString("pl", { weekday: "long" })

const randomFact = () => {
	const number = Math.floor(Math.random() * facts.length)

	funFuct.textContent = facts[number]
	
}

randomFact()





