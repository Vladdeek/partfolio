// анимации при скроле
const title = document.querySelector('.title')

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			setTimeout(() => {
				title.style.opacity = '1'
				title.style.transform = 'scale(1)'
			}, 250) // задержка 500 миллисекунд
		} else {
			title.style.opacity = '0'
			title.style.transform = 'scale(0.25)'
		}
	})
})
observer.observe(title)
