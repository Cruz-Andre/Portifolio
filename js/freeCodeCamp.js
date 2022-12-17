import freeCodeCamp from '../json/freeCodeCamp.json' assert {type: 'json'}

let desafios = []
desafios = freeCodeCamp
//console.table(desafios)

const desafiosfreeCodeCamp = document.getElementById('freeCodeCamp')

const mostrarProjetos = (listaDesafios) => {
	listaDesafios.map(desafio => {
		desafiosfreeCodeCamp.innerHTML +=
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

	desafiosfreeCodeCamp.innerHTML +=
		`
			<article class="card bg-light borda-cor-especial card-largura p-0 m-4 col-12 col-md-4" aria-hidden="true">
				<img src="img/afazer.jpg" class="card-img-top card-posicao-imagem" alt="na fila para fazer">
				<div class="card-body">
					<h5 class="card-title">
						<span class="col-6">Na fila para fazer</span>
					</h5>
					<p class="card-text placeholder-glow">
						<span class="placeholder col-7"></span>
						<span class="placeholder col-4"></span>
						<span class="placeholder col-4"></span>
						<span class="placeholder col-6"></span>
						<span class="placeholder col-8"></span>
					</p>
					<a href="#" tabindex="-1" class="btn btn-info botao-cor-especial disabled placeholder col-6"></a>
				</div>
			</article>
    `
}

mostrarProjetos(desafios)
