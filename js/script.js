const th = 1

// Скрипт выполняется при загрузке страницы
window.addEventListener('DOMContentLoaded', event => {
	const text = document.querySelector('.large-name')
	const shadow1 = document.getElementById('shadow1')
	const shadow2 = document.getElementById('shadow2')
	const shadow3 = document.getElementById('shadow3')
	setTimeout(() => {
		setTimeout(() => {
			text.style.opacity = '1'
		}, 175)
		setTimeout(() => {
			shadow1.style.opacity = '0.75'
		}, 250)
		setTimeout(() => {
			shadow2.style.opacity = '0.5'
		}, 325)
		setTimeout(() => {
			shadow3.style.opacity = '0.25'
		}, 400)
	}, 250)
})

const animPoint1 = document.querySelector('.about')
const aboutTitle = document.querySelector('.about')
const image = document.querySelector('.img-container')
const rezume = document.querySelector('.rezume-container')

const anim1 = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				aboutTitle.style.opacity = '1'
				aboutTitle.style.transform = 'translateY(0px) scale(1)'
				setTimeout(() => {
					image.style.transform = 'translateX(0) translateY(0) scale(1)'
					image.style.opacity = '1'
					rezume.style.transform = 'translateX(0) translateY(0) scale(1)'
					rezume.style.opacity = '1'
				}, 250) // задержка 250 миллисекунд
				observer.unobserve(entry.target) // Прекращаем отслеживание после анимации
			}
		})
	},
	{ threshold: th }
)

anim1.observe(animPoint1)

const animPoint2 = document.querySelector('.skill')
const skillTitle = document.querySelector('.skill')
const skillCards = document.querySelectorAll('.skill-card')

const anim2 = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				skillTitle.style.opacity = '1'
				skillTitle.style.transform = 'translateY(0) scale(1)'
				setTimeout(() => {
					skillCards.forEach((card, index) => {
						setTimeout(() => {
							card.style.opacity = '1'
							card.style.transform = 'scale(1)'
						}, 50 * (index + 1)) // Увеличиваем задержку для каждой карточки
					})
				}, 250) // задержка 250 миллисекунд
				observer.unobserve(entry.target) // Прекращаем отслеживание после анимации
			}
		})
	},
	{ threshold: th }
)

anim2.observe(animPoint2)

const animPoint3 = document.querySelector('.project')
const projectTitle = document.querySelector('.project')
const projectCards = document.querySelectorAll('.project-card')

const anim3 = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				projectTitle.style.opacity = '1'
				projectTitle.style.transform = 'translateY(0) scale(1)'
				setTimeout(() => {
					projectCards.forEach((projectCard, index) => {
						setTimeout(() => {
							projectCard.style.opacity = '1'
							projectCard.style.transform = 'scale(1)'
						}, 50 * (index + 1)) // Увеличиваем задержку для каждой карточки
					})
				}, 250) // задержка 250 миллисекунд
				observer.unobserve(entry.target) // Прекращаем отслеживание после анимации
			}
		})
	},
	{ threshold: th }
)

anim3.observe(animPoint3)
