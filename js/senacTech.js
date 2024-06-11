import senacTech from '../json/senacTech.json' with {type: 'json'}

let desafios = []
desafios = senacTech
//console.table(desafios)

const desafiosSenacTech = document.getElementById('senac_tech')

const mostrarProjetos = (listaDesafios) => {
	listaDesafios.map(desafio => {
		desafiosSenacTech.innerHTML +=
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
