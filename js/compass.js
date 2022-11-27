import compass from '../json/compass.json' assert {type: 'json'}

let desafios = []
desafios = compass
console.table(desafios)

const desafiosCompass = document.getElementById('compass_uol')

const mostrarProjetos = (listaDesafios) => {
	listaDesafios.map(desafio => {
		desafiosCompass.innerHTML +=
			`
				<article id="CompassPrimeiro" class="card bg-light borda-cor-especial card-largura p-0 m-4 col-12 col-md-4">
					<img src="${desafio.imagem}" class="card-img-top card-posicao-imagem" alt="${desafio.alt}">
					<div class="card-body">
						<h5 class="card-title">${desafio.titulo}</h5>
						<p class="card-text">${desafio.texto}</p>
						<a href="${desafio.site}" target="_blank" class="btn btn-info botao-cor-especial">Visite o site</a>
						<a href="${desafio.repositorio}" target="_blank" class="btn btn-info botao-cor-especial">Repositório Git</a>
					</div>
				</article>
			`
	})

	const primeiro = document.getElementById('CompassPrimeiro')
	const ultimo = document.getElementById('CompassUltimo')
	primeiro.insertAdjacentElement('afterend', ultimo)
}

mostrarProjetos(desafios)
