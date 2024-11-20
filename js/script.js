const animPoint1 = document.getElementById('about')
const aboutTitle = document.querySelector('.about')
const image = document.querySelector('.img-container')
const rezume = document.querySelector('.rezume-container')

const anim1 = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				aboutTitle.style.opacity = '1'
				aboutTitle.style.transform = 'translateY(0px) scale(1)'
				image.style.transform = 'translateX(0) translateY(0) scale(1)'
				image.style.opacity = '1'
				rezume.style.transform = 'translateX(0) translateY(0) scale(1)'
				rezume.style.opacity = '1'
			}, 250) // задержка 250 миллисекунд
			observer.unobserve(entry.target) // Прекращаем отслеживание после анимации
		}
	})
})

anim1.observe(animPoint1)

const animPoint2 = document.getElementById('skill')
const skillTitle = document.querySelector('.skill')
const skillCards = document.querySelectorAll('.skill-card')

const anim2 = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				skillTitle.style.opacity = '1'
				skillTitle.style.transform = 'translateY(0) scale(1)'
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
})

anim2.observe(animPoint2)

const animPoint3 = document.getElementById('project')
const projectTitle = document.querySelector('.project')
const projectCards = document.querySelectorAll('.project-card')

const anim3 = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				projectTitle.style.opacity = '1'
				projectTitle.style.transform = 'translateY(0) scale(1)'
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
})

anim3.observe(animPoint3)
