// Espera o HTML carregar completamente para então executar o script
document.addEventListener('DOMContentLoaded', function() {


    const pacotesRio = [
        { imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/d7/5c/0d/vista-do-morro-da-urca.jpg?w=900&h=500&s=1", nome: "Cristo e Pão de Açúcar", pessoas: "Para 2 pessoas", duracao: "4 dias e 3 noites", incluso: "Passagem aérea ida e volta, hospedagem com café da manhã, e tour guiado.", valor: "R$ 750 por pessoa", hotel: "Belmond Copacabana Palace" },
        { imagem: "https://upload.wikimedia.org/wikipedia/commons/6/62/Praia_de_Copacabana_-_Rio_de_Janeiro%2C_Brasil.jpg", nome: "Praia de Copacabana", pessoas: "Para 2 pessoas", duracao: "3 dias e 2 noites", incluso: "Hospedagem, passeios no Jardim Botânico e passeio de barco.", valor: "R$ 680 por pessoa", hotel: "Windsor Excelsior" },
        { imagem: "https://blog.paineirascorcovado.com.br/wp-content/uploads/2024/11/Cristo-Redentor-Por-do-sol-scaled.jpg", nome: "Rio Total", pessoas: "Para 4 pessoas", duracao: "5 dias e 4 noites", incluso: "Passagem aérea, hospedagem, transporte e tour guiado.", valor: "R$ 850 por pessoa", hotel: "Hotel Fasano Rio de Janeiro" }
    ];

const pacotesFoz = [
    { 
        imagem: "https://www.destino.foz.br/wp-content/uploads/2024/02/image.jpg", 
        nome: "Cataratas do Iguaçu", 
        pessoas: "Para 2 pessoas", 
        duracao: "4 dias e 3 noites", 
        incluso: "Passagem aérea ida e volta, hospedagem com café da manhã e ingresso para o Parque Nacional do Iguaçu.", 
        valor: "R$ 890 por pessoa", 
        hotel: "Recanto Cataratas Thermas Resort" 
    },
    { 
        imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/passagens-aereas-foz-do-iguacu-capa2019-05.jpg", 
        nome: "Pacote Aventura em Foz", 
        pessoas: "Para 2 pessoas", 
        duracao: "3 dias e 2 noites", 
        incluso: "Hospedagem, tour panorâmico pelas Cataratas, visita ao Marco das Três Fronteiras e passeio de barco Macuco Safari.", 
        valor: "R$ 760 por pessoa", 
        hotel: "Hotel Rafain Palace" 
    },
    { 
        imagem: "https://www.destino.foz.br/wp-content/uploads/2025/03/foz-do-iguacu-aerea.webp", 
        nome: "Foz Completo", 
        pessoas: "Para 4 pessoas", 
        duracao: "5 dias e 4 noites", 
        incluso: "Passagem aérea, hospedagem, transporte, visita à Itaipu Binacional e tour guiado pelas Cataratas.", 
        valor: "R$ 990 por pessoa", 
        hotel: "Bourbon Cataratas do Iguaçu Resort" 
    }
];


    const pacotesSp = [
    { 
        imagem: "https://www.eztec.com.br/wp-content/uploads/2025/01/108568-471-anos-de-sao-paulo-o-que-fazer-no-aniversario-da-capital-paulista-1-1024x671.jpg", 
        nome: "São Paulo Cultural - MASP ", 
        pessoas: "Para 2 pessoas", 
        duracao: "4 dias e 3 noites", 
        incluso: "Passagem aérea ida e volta, hospedagem com café da manhã, visitas ao MASP, Pinacoteca, e noite no bairro da Liberdade.", 
        valor: "R$ 920 por pessoa", 
        hotel: "Hotel Unique" 
    },
    { 
        imagem: "https://admin.mac.com.br/wp-content/uploads/2024/11/o-que-fazer-no-ibirapuera-guia-completo-das-melhores-atracoes-thumbnail.webp", 
        nome: "Parques e Modernidade - IBIRAPUERA", 
        pessoas: "Para 2 pessoas", 
        duracao: "3 dias e 2 noites", 
        incluso: "Hospedagem, passeio programado pelo Parque Ibirapuera, visita à Avenida Paulista e passeio de bike pela ciclovia.", 
        valor: "R$ 800 por pessoa", 
        hotel: "Estanplaza Paulista" 
    },
    { 
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JY5WCDFn8wHB0DbdQxNw8rFYV1uLuU9NkA&s", 
        nome: "Gastronomia & Compras - JK IGUATEMI", 
        pessoas: "Para 4 pessoas", 
        duracao: "5 dias e 4 noites", 
        incluso: "Passagem aérea, hospedagem, city tour gastronômico, visitas ao Mercado Municipal, os Jardins e tempo livre para compras na Rua Oscar Freire.", 
        valor: "R$ 850 por pessoa", 
        hotel: "Hotel Emiliano" 
    }
];


const pacotesSalvador = [
  {
    imagem: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTtTtd5Iz_ghxo8Zn9p2yqtxXgBzSLqa8baGFs7qFym-OKAtB9QvO8gHxjMcgOnHh9Ji12VUqs6HsP7ooXvk7LNK883a6Y5Uef1xJ2LzA",
    nome: "Pelourinho Histórico",
    pessoas: "Para 2 pessoas",
    duracao: "3 dias e 2 noites",
    incluso: "Passagem aérea, hospedagem com café da manhã, tour guiado pelo Pelourinho e Terreiro de Jesus, show de capoeira.",
    valor: "R$ 840 por pessoa",
    hotel: "Pousada do Boqueirão"
  },
  {
    imagem: "https://www.guiaviagensbrasil.com/blog/wp-content/uploads/2016/08/foto-praia-porto-da-barra-salvador-bahia-brasil-0456.jpg",
    nome: "Praias & Tranquilidade",
    pessoas: "Para 2 pessoas",
    duracao: "4 dias e 3 noites",
    incluso: "Passagem aérea, hospedagem, passeio à Praia do Porto da Barra, Farol da Barra e pôr do sol.",
    valor: "R$ 900 por pessoa",
    hotel: "Hotel Porto da Barra"
  },
  {
    imagem: "https://b3577058.smushcdn.com/3577058/wp-content/uploads/2022/09/GettyImages-539835430-scaled-720x511.jpg?lossy=1&strip=0&webp=1",
    nome: "Capitais do Litoral",
    pessoas: "Para 4 pessoas",
    duracao: "5 dias e 4 noites",
    incluso: "Passagem aérea, hospedagem, visita ao Farol da Barra e ao Convento de São Francisco, city tour panorâmico pela cidade.",
    valor: "R$ 950 por pessoa",
    hotel: "Vila Galé Salvador"
  }
];


  const pacotesFloripa = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZ_FnlJVozIrlvknyqeMRI81yBrL7DlFGLQ&s",
    nome: "Praia do Forte",
    pessoas: "Para 2 pessoas",
    duracao: "3 dias e 2 noites",
    incluso: "Passagem aérea, hospedagem com café da manhã e passeio pela Praia do Forte.",
    valor: "R$ 880 por pessoa",
    hotel: "Hotel Majestic"
  },
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS781x4ZiMZ1p-DS6G57a_jeSHWj7HPLGsTCQ&s",
    nome: "Centro Histórico & Cultura",
    pessoas: "Para 2 pessoas",
    duracao: "4 dias e 3 noites",
    incluso: "Passagem aérea, hospedagem, tour guiado pelo Centro Histórico e Mercado Público de Florianópolis.",
    valor: "R$ 940 por pessoa",
    hotel: "Pousada do Sandi"
  },
  {
    imagem: "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2019/11/Topo-floripa.jpg",
    nome: "Lagoa da Conceição & Natureza",
    pessoas: "Para 4 pessoas",
    duracao: "5 dias e 4 noites",
    incluso: "Passagem aérea, hospedagem, passeio de barco pela Lagoa da Conceição e visita à Praia Mole.",
    valor: "R$ 1.050 por pessoa",
    hotel: "Villas Jurerê Hotel Boutique"
  }
];

const pacotesGramado = [
  {
    imagem: "https://d15k2d11r6t6rl.cloudfront.net/pub/bfra/dadd8oqv/a7n/li2/fuc/O-que-fazer-em-Gramado.webp",
    nome: "Gramado Encantado",
    pessoas: "Para 2 pessoas",
    duracao: "3 dias e 2 noites",
    incluso: "Passagem aérea, hospedagem com café da manhã, tour guiado pelo Mini Mundo e Lago Negro.",
    valor: "R$ 950 por pessoa",
    hotel: "Hotel Ritta Höppner"
  },
  {
    imagem: "https://www.dicasdeviagem.com/wp-content/uploads/2019/06/pontos-turisticos-gramado-rs.jpg",
    nome: "Rota da Serra Gaúcha",
    pessoas: "Para 2 pessoas",
    duracao: "4 dias e 3 noites",
    incluso: "Passagem aérea, hospedagem, city tour por Gramado e Canela, visita ao Castelinho e Cascata do Caracol.",
    valor: "R$ 1.200 por pessoa",
    hotel: "Pousada Villa Bella"
  },
  {
    imagem: "https://www.viajenaviagem.com/wp-content/uploads/2016/06/canela-castelinho-16x9-1.jpg.webp",
    nome: "Aventura na Serra",
    pessoas: "Para 4 pessoas",
    duracao: "5 dias e 4 noites",
    incluso: "Passagem aérea, hospedagem, ingresso para o Snowland, visita ao Parque Terra Mágica Florybal e passeio de trem Maria Fumaça.",
    valor: "R$ 1.400 por pessoa",
    hotel: "Hotel Laghetto Stilo"
  }
];

const pacotesNoronha = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz6MmMbYWYLTPklgIC2Tu3c8wmWpyBh6GsfQ&s",
    nome: "Paraíso Natural",
    pessoas: "Para 2 pessoas",
    duracao: "4 dias e 3 noites",
    incluso: "Passagem aérea, hospedagem com café da manhã, passeio de barco pela Baía dos Golfinhos e caminhada histórica.",
    valor: "R$ 2.900 por pessoa",
    hotel: "Pousada do Vale"
  },
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhnJ9AY_D7bcc31r0d65neo9F8Sey2qXrEQ&s",
    nome: "Mergulho e Tradição",
    pessoas: "Para 2 pessoas",
    duracao: "5 dias e 4 noites",
    incluso: "Passagem aérea, hospedagem, 2 mergulhos autônomos, visita ao Parque Nacional Marinho e Ilha Tour 4x4.",
    valor: "R$ 3.000 por pessoa",
    hotel: "Pousada Zé Maria"
  },
  {
    imagem: "https://www.viajenaviagem.com/wp-content/uploads/2019/02/o-que-fazer-em-fernando-de-noronha-ilhatour.jpg",
    nome: "Aventura Completa",
    pessoas: "Para 4 pessoas",
    duracao: "7 dias e 6 noites",
    incluso: "Passagem aérea, hospedagem, 3 passeios inclusos, incluindo Ilha Tour 4x4 e passeio de barco.",
    valor: "R$ 4.800 por pessoa",
    hotel: "Pousada Teju-Açu"
  }
];

const pacotesCeara = [
  {
    imagem: "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/ba/0b/99.jpg",
    nome: "Paraíso das Dunas",
    pessoas: "Para 2 pessoas",
    duracao: "3 dias e 2 noites",
    incluso: "Passagem aérea, hospedagem com café da manhã, passeio de buggy pelas dunas e visita à Lagoa do Paraíso.",
    valor: "R$ 1.200 por pessoa",
    hotel: "Pousada Casa do Angelo"
  },
  {
    imagem: "https://www.viajenaviagem.com/wp-content/uploads/2015/11/jericoacoara-alchymist-club-1920x1080-1.jpg.webp",
    nome: "Luxo e Beleza",
    pessoas: "Para 2 pessoas",
    duracao: "4 dias e 3 noites",
    incluso: "Passagem aérea, hospedagem de luxo, jantar romântico à beira-mar e passeio privativo ao Farol de Jericoacoara.",
    valor: "R$ 2.800 por pessoa",
    hotel: "Alchymist Beach Hotel & Resort"
  },
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREiMnY98f0vl74TFoTxYd0O3eQA995TUzBUg&s",
    nome: "Aventura Completa",
    pessoas: "Para 4 pessoas",
    duracao: "5 dias e 4 noites",
    incluso: "Passagem aérea, hospedagem, passeios de buggy pelos litorais Leste e Oeste, incluindo visita à Pedra Furada e Lagoa Azul.",
    valor: "R$ 2.500 por pessoa",
    hotel: "Pousada do Serrote"
  }
];

const pacotesBonito = [
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fQbOYGyaUVIX17xnoMbBpkAfhEQCOf1CSg&s",
    nome: "Flutuação no Rio Sucuri",
    pessoas: "Para 2 pessoas",
    duracao: "Dia inteiro",
    incluso: "Passagem aérea, hospedagem com café da manhã, flutuação no Rio Sucuri com guia local e barco de apoio.",
    valor: "R$ 1.200 por pessoa",
    hotel: "Pousada Olho D'Água"
  },
  {
    imagem: "https://bonitour.com.br/wp-content/uploads/2024/01/Tudo-sobre-a-flutuacao-no-Rio-Sucuri-em-BonitoMS-.webp",
    nome: "Aventura Subaquática",
    pessoas: "Para 2 pessoas",
    duracao: "3 dias e 2 noites",
    incluso: "Passagem aérea, hospedagem, flutuação no Rio Sucuri, visita à Gruta do Lago Azul e almoço regional.",
    valor: "R$ 1.800 por pessoa",
    hotel: "Hotel Marruá"
  },
  {
    imagem: "https://bonitoecotour.com/file/passeio/4/nascente-azul-flutuacao-bonito-ms_4.webp",
    nome: "Nascente Azul & Relax",
    pessoas: "Para 2 pessoas",
    duracao: "4 dias e 3 noites",
    incluso: "Passagem aérea, hospedagem, flutuação na Nascente Azul, day-use no balneário, visita ao Parque das Cachoeiras e almoço típico.",
    valor: "R$ 2.200 por pessoa",
    hotel: "Pousada Águas de Bonito"
  }
];

const pacotesChapada = [
  {
    imagem: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/10/chapada-diamantina.jpg",
    nome: "Chapada Diamantina Tradicional",
    pessoas: "Para 2 pessoas",
    duracao: "3 dias e 2 noites",
    incluso: "Passagem aérea, hospedagem com café da manhã, passeio ao Morro do Pai Inácio, Gruta da Lapa Doce e Poço Azul.",
    valor: "R$ 1.230 por pessoa",
    hotel: "Pousada do Capão"
  },
  {
    imagem: "https://www.chapadaadventure.com.br/wp-content/uploads/2020/06/chapada-diamantina-cachoeira-fumaca.jpg",
    nome: "Vale do Pati Aventura",
    pessoas: "Para 2 pessoas",
    duracao: "5 dias e 4 noites",
    incluso: "Passagem aérea, hospedagem em casas de nativos, trekking pelo Vale do Pati, visita à Cachoeira do Buracão e Poço do Diabo.",
    valor: "R$ 2.888 por pessoa",
    hotel: "Casa de Nativos"
  },
  {
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdcc88Kiuyffv71uE3b7WvgwO8ou6V3kf8w&s",
    nome: "Chapada Diamantina Completa",
    pessoas: "Para 4 pessoas",
    duracao: "8 dias e 7 noites",
    incluso: "Passagem aérea, hospedagem, transporte, ingressos e passeios ao Morro do Pai Inácio, Gruta da Lapa Doce, Poço Azul, Cachoeira do Buracão e Vale do Pati.",
    valor: "R$ 3.040 por pessoa",
    hotel: "Pousada do Capão"
  }
];


    function renderizarPacotes(arrayDePacotes, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error("Container não encontrado:", containerId);
            return;
        }
        container.innerHTML = '';
        arrayDePacotes.forEach(pacote => {
            const cardWrapper = document.createElement('div');
            cardWrapper.className = 'col-lg-4 col-md-6 mb-4';
            cardWrapper.innerHTML = `
                <div class="card h-100 shadow-sm custom-card">
                    <img src="${pacote.imagem}" class="card-img-top" alt="Imagem do pacote ${pacote.nome}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${pacote.nome}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${pacote.hotel}</h6>
                        <p class="card-text"><strong>Para:</strong> ${pacote.pessoas}</p>
                        <p class="card-text"><strong>Duração:</strong> ${pacote.duracao}</p>
                        <p class="card-text flex-grow-1"><strong>Incluso:</strong> ${pacote.incluso}</p>
                        <div class="mt-auto text-end">
                            <p class="card-text fs-5 fw-bold text-primary mb-2">${pacote.valor}</p>
                            <a href="#" class="btn btn-primary w-100">Ver detalhes</a>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(cardWrapper);
        });
    }

    // Mapeamento dos destinos para chamar a função de renderização
    const destinos = [
        { id: 'pacotes-rio', data: pacotesRio },
        { id: 'pacotes-foz', data: pacotesFoz },
        { id: 'pacotes-sp', data: pacotesSp },
        { id: 'pacotes-salvador', data: pacotesSalvador },
        { id: 'pacotes-floripa', data: pacotesFloripa },
        { id: 'pacotes-gramado', data: pacotesGramado },
        { id: 'pacotes-noronha', data: pacotesNoronha },
        { id: 'pacotes-ceara', data: pacotesCeara },
        { id: 'pacotes-bonito', data: pacotesBonito },
        { id: 'pacotes-chapada', data: pacotesChapada },
    ];

    // Executa a renderização para cada destino
    destinos.forEach(destino => renderizarPacotes(destino.data, destino.id));
});