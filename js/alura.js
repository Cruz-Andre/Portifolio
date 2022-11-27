import alura from '../json/alura.json' assert {type: 'json'}

let desafios = []
desafios = alura
console.table(desafios)

const desafiosAlura = document.getElementById('aluraRocket')

const mostrarProjetos = (listaDesafios) => {
	listaDesafios.map(desafio => {
		desafiosAlura.innerHTML +=
			`
				<article class="card bg-light borda-cor-especial card-largura p-0 m-4 col-12 col-md-4">
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
}

mostrarProjetos(desafios)
