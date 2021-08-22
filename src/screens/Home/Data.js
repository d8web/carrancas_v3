import IconWater from '../../../assets/icon_waterfall.png'
import HistoryIcon from '../../../assets/history.png'
import FaunaIcon from '../../../assets/fauna.png'
import GuiaIcon from '../../../assets/guia.png'
import PousadaIcon from '../../../assets/pousada.png'
import RestauranteIcon from '../../../assets/restaurante.png'
import CampingIcon from '../../../assets/camping.png'
import AgenciaIcon from '../../../assets/agencia.png'
import HospitalIcon from '../../../assets/hospital.png'

import Daniel from '../../../assets/daniel.png'
import Pessoa from '../../../assets/pessoa.png'


import VeuNoivaImage from '../../../assets/atrativos/veu_de_noiva.jpg'
import VeuNoivaImageTwo from '../../../assets/atrativos/veu_noiva_image.jpg'

import Indio from '../../../assets/atrativos/indio.jpg'
import Serrinha from '../../../assets/atrativos/serrinha.jpg'
import Fumaca from '../../../assets/atrativos/fumaca.jpg'
import Fumacinha from '../../../assets/atrativos/fumacinha.jpg'
import Zilda from '../../../assets/atrativos/zilda.jpg'
import Proa from '../../../assets/atrativos/proa.jpg'
import Guatambu from '../../../assets/atrativos/guatambu.jpg'
import Indios from '../../../assets/atrativos/indios.jpg'
import Borboletas from '../../../assets/atrativos/borboletas.jpg'
import Escorregador from '../../../assets/atrativos/escorregador_zilda.jpg'
import Pinturas from '../../../assets/atrativos/pinturas_rupestres.jpg'
import Anjos from '../../../assets/atrativos/anjos.jpg'
import Racha from '../../../assets/atrativos/racha_zilda.jpg'
import Oncas from '../../../assets/atrativos/oncas.jpg'
import Turco from '../../../assets/atrativos/turco.jpg'
import Esmeralda from '../../../assets/atrativos/esmeralda.jpg'
import Tresirmaos from '../../../assets/atrativos/tres_irmaos.jpg'
import Coracao from '../../../assets/atrativos/coracao.jpg'
import Sossego from '../../../assets/atrativos/poco_sossego.jpg'
import Moinho from '../../../assets/atrativos/moinho.jpg'
import Salomao from '../../../assets/atrativos/salomao.jpg'
import Perdicao from '../../../assets/atrativos/perdicao.jpg'
import Canoa from '../../../assets/atrativos/canoa.jpg'
import Pulo from '../../../assets/atrativos/poco_pulo.jpg'
import Tiraprosa from '../../../assets/atrativos/tira_prosa.jpg'
import Graomogol from '../../../assets/atrativos/grao_mogol.jpg'
import CruzAlmas from '../../../assets/atrativos/cruz_das_almas.jpg'
import Serra from '../../../assets/atrativos/serra_carrancas.jpg'
import MonteTeta from '../../../assets/atrativos/monte_teta.jpg'
import Broas from '../../../assets/atrativos/broas.jpg'
import Abanador from '../../../assets/atrativos/pico_abanador.jpg'
import Gruta from '../../../assets/atrativos/gruta_ponte.jpg'
import Encontro from '../../../assets/atrativos/encontro.jpg'
import Grande from '../../../assets/atrativos/grande_broas.jpg'
import Galinheiro from '../../../assets/atrativos/serra_do_galinheiro.jpg'
import Igreja from '../../../assets/atrativos/igreja.jpg'
import CachoeiraPulo from '../../../assets/atrativos/cachoeira_do_pulo.jpg'
import Perdizes from '../../../assets/atrativos/chapada_perdizes.jpg'
import Estacao from '../../../assets/atrativos/estacao.jpg'

export const Categorias = [
    {
        id: '1',
        title: 'Atrativos',
        icon: IconWater,
    },
    {
        id: '2',
        title: 'História',
        icon: HistoryIcon,
    },
    {
        id: '3',
        title: 'Fauna',
        icon: FaunaIcon,
    },
    {
        id: '4',
        title: 'Guias',
        icon: GuiaIcon,
    },
    {
        id: '5',
        title: 'Pousadas',
        icon: PousadaIcon,
    },
    {
        id: '6',
        title: 'Alimentação',
        icon: RestauranteIcon,
    },
    {
        id: '7',
        title: 'Campings',
        icon: CampingIcon,
    },
    {
        id: '8',
        title: 'Agências',
        icon: AgenciaIcon,
    },
    {
        id: '9',
        title: 'Farmácia e Hospital',
        icon: HospitalIcon,
    }
];

export const Atrativos = [
    {
        id: '1',
        type: 'Cachoeira',
        title: 'Véu de Noiva',
        name: 'Véu de Noiva',
        image: VeuNoivaImage,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Parte do Complexo da Fumaça, a Véu de Noiva é formada pela junção de dois córregos, da Serra e do Café, afluentes do Ribeirão de Carrancas. Uma das cachoeiras mais altas do município - são 40m de queda d’água - tem poços pequenos, porém límpidos e belíssimos, com água cristalina e pura, que refresca só de olhar. No alto das quedas existem algumas piscinas naturais com um visual incrível das serras de Carrancas e um muro de pedras construído pelos antigos escravos da região. Imperdível.',
        location: 'Parque da Fumaça',
        vehicleRecomended: 'Qualquer Veículo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: VeuNoivaImage
            },
            {
                id: '2',
                url: VeuNoivaImageTwo
            },
            {
                id: '3',
                url: VeuNoivaImageTwo
            },
            {
                id: '4',
                url: VeuNoivaImage
            },
        ]
    },
    {
        id: '2',
        type: 'Pedra',
        title: 'Pedra do Índio',
        name: 'do Índio',
        image: Indio,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Fumaça',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Indio
            },
            {
                id: '2',
                url: Indio
            },
            {
                id: '3',
                url: Indio
            },
            {
                id: '4',
                url: Indio
            },
        ]
    },
    {
        id: '3',
        type: 'Cachoeira',
        title: 'Serrinha',
        name: 'da Serrinha',
        image: Serrinha,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Lugar especial, uma cachoeira perfeita para refrescar a caminhada. Para chegar é necessário seguir pela trilha de grau médio de dificuldade até chegar aos pés de uma queda d’água pequena, porém de uma força incrível e extremamente relaxante. Assim é o caminho para a cachoeira principal da Serrinha. Distante 7km do centro da cidade pela mesma estrada que leva à Cachoeira da Fumaça, no afluente chamado Jardim Botânico.',
        location: 'Parque da Fumaça',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Serrinha
            },
            {
                id: '2',
                url: Serrinha
            },
            {
                id: '3',
                url: Serrinha
            },
            {
                id: '4',
                url: Serrinha
            },
        ]
    },
    {
        id: '4',
        type: 'Cachoeira',
        title: 'Fumaça',
        name: 'da Fumaça',
        image: Fumaca,
        price: '0',
        mapa: 'https://www.google.com.br/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4834827,-44.6712769,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: true,
        description: 'Parada obrigatória para quem vem a Carrancas, o cartão postal de Carrancas fica pertinho da cidade, cerca de 5,8 quilômetros, e tem várias piscinas naturais ao seu redor. Parte de um complexo maior, que inclui ainda as cachoeiras do Fundo da Fumaça, Fumaça de Cima, Véu da Noiva e Luciano, a Fumaça encanta pela magnitude: sua queda principal tem mais de 15m de altura e sua largura a torna imponente. Seu nome vem da “fumaça” que se desprende de suas águas ao caírem forte nas pedras. Já teve papel importante no fornecimento de energia da cidade, era com a força de sua queda que a energia era gerada e assim podia ser distribuída na cidade e em alguns sítios e fazendas mais próximos.',
        location: 'Parque da Fumaça',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Fumaca
            },
            {
                id: '2',
                url: Fumaca
            },
            {
                id: '3',
                url: Fumaca
            },
            {
                id: '4',
                url: Fumaca
            },
        ]
    },
    {
        id: '5',
        type: 'Cachoeira',
        title: 'Fumacinha',
        name: 'da Fumacinha',
        image: Fumacinha,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: true,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Fumaça',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Fumacinha
            },
            {
                id: '2',
                url: Fumacinha
            },
            {
                id: '3',
                url: Fumacinha
            },
            {
                id: '4',
                url: Fumacinha
            },
        ]
    },
    {
        id: '6',
        type: 'Cachoeira',
        title: 'Zilda',
        name: 'da Zilda',
        image: Zilda,
        price: '25',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'A Cachoeira da Zilda se alcança através de algum esforço, recompensado imediatamente pela visão estonteante que se tem do alto das quedas – enxerga-se lá embaixo o poço perfeito para banho, ladeado por uma praia de areias brancas formadas pelas rochas de quartzito da região.',
        location: 'Serra do Moleque',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Zilda
            },
            {
                id: '2',
                url: Zilda
            },
            {
                id: '3',
                url: Zilda
            },
            {
                id: '4',
                url: Zilda
            },
        ]
    },
    {
        id: '7',
        type: 'Cachoeira',
        title: 'Proa',
        name: 'da Proa',
        image: Proa,
        price: '25',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Serra do Moleque',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Proa
            },
            {
                id: '2',
                url: Proa
            },
            {
                id: '3',
                url: Proa
            },
            {
                id: '4',
                url: Proa
            },
        ]
    },
    {
        id: '8',
        type: 'Cachoeira',
        title: 'Guatambu',
        name: 'do Guatambu',
        image: Guatambu,
        price: '25',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Serra do Moleque',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Guatambu
            },
            {
                id: '2',
                url: Guatambu
            },
            {
                id: '3',
                url: Guatambu
            },
            {
                id: '4',
                url: Guatambu
            },
        ]
    },
    {
        id: '9',
        type: 'Cachoeira',
        title: 'Índios',
        name: 'dos Índios',
        image: Indios,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Indios
            },
            {
                id: '2',
                url: Indios
            },
            {
                id: '3',
                url: Indios
            },
            {
                id: '4',
                url: Indios
            },
        ]
    },
    {
        id: '10',
        type: 'Cachoeira',
        title: 'Borboletas',
        name: 'das Borboletas',
        image: Borboletas,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Borboletas
            },
            {
                id: '2',
                url: Borboletas
            },
            {
                id: '3',
                url: Borboletas
            },
            {
                id: '4',
                url: Borboletas
            },
        ]
    },
    {
        id: '11',
        type: 'Escorregador',
        title: 'Escorregador',
        name: 'da Zilda',
        image: Escorregador,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Escorregador natural de aproximadamente seis metros, que fica logo no começo do Complexo da Zilda. Perfeito para quem quer se divertir bastante! A nascente é exclusiva para este atrativo, onde é possível passar horas divertidas e refrescantes. Distante 12km da cidade, o Escorregador fica a uma trilha de fácil acesso, dentro de uma propriedade que também possui uma pequena área para camping. A subida é pela trilha de pedras para chegar ao topo do escorregador e a descida é “ao gosto do freguês”!.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Escorregador
            },
            {
                id: '2',
                url: Escorregador
            },
            {
                id: '3',
                url: Escorregador
            },
            {
                id: '4',
                url: Escorregador
            },
        ]
    },
    {
        id: '12',
        type: 'Pinturas',
        title: 'Pinturas Rupestres',
        name: 'Rupestres',
        image: Pinturas,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Pinturas
            },
            {
                id: '2',
                url: Pinturas
            },
            {
                id: '3',
                url: Pinturas
            },
            {
                id: '4',
                url: Pinturas
            },
        ]
    },
    {
        id: '13',
        type: 'Cachoeira',
        title: 'Anjos',
        name: 'dos Anjos',
        image: Anjos,
        price: '20',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Anjos
            },
            {
                id: '2',
                url: Anjos
            },
            {
                id: '3',
                url: Anjos
            },
            {
                id: '4',
                url: Anjos
            },
        ]
    },
    {
        id: '14',
        type: 'Cânion',
        title: 'Racha da Zilda',
        name: 'Racha da Zilda',
        image: Racha,
        price: '20',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Mesmo que tente, você não conseguirá imaginar o que vai encontrar depois de passar por trilhas na mata, descer pequenas paredes de pedra e atravessar pelas águas até a escondida Racha da Zilda. De um lado, a Cachoeira dos Anjos, de outro, a pequena corredeira que sai da montanha e traz as águas da Racha. Dos dois lados, paredes de pedra e vegetação parecem proteger o local. Passeio para quem sabe nadar e bem, chegar na Racha não é tarefa tão fácil, é preciso atravessar um poço chamado Sonrisal, entrar no cânion que dá passagem para a racha e atravessá-la a nado contra a correnteza. E haja fôlego. Ao chegar no final da jornada, uma surpresa o espera, no meio da montanha, pronta para os aventureiros, como um troféu para quem conseguiu se superar.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Racha
            },
            {
                id: '2',
                url: Racha
            },
            {
                id: '3',
                url: Racha
            },
            {
                id: '4',
                url: Racha
            },
        ]
    },
    {
        id: '15',
        type: 'Cachoeira',
        title: 'Onças',
        name: 'das Onças',
        image: Oncas,
        price: '20',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Parque da Zilda',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Oncas
            },
            {
                id: '2',
                url: Oncas
            },
            {
                id: '3',
                url: Oncas
            },
            {
                id: '4',
                url: Oncas
            },
        ]
    },
    {
        id: '16',
        type: 'Cânion',
        title: 'Turco',
        name: 'do Turco',
        image: Turco,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo do Turco',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Turco
            },
            {
                id: '2',
                url: Turco
            },
            {
                id: '3',
                url: Turco
            },
            {
                id: '4',
                url: Turco
            },
        ]
    },
    {
        id: '17',
        type: 'Cachoeira',
        title: 'Esmeralda',
        name: 'da Esmeralda',
        image: Esmeralda,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Vargem Grande',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Esmeralda
            },
            {
                id: '2',
                url: Esmeralda
            },
            {
                id: '3',
                url: Esmeralda
            },
            {
                id: '4',
                url: Esmeralda
            },
        ]
    },
    {
        id: '18',
        type: 'Poço',
        title: 'Três Irmãos',
        name: 'Três irmãos',
        image: Tresirmaos,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Vargem Grande',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Tresirmaos
            },
            {
                id: '2',
                url: Tresirmaos
            },
            {
                id: '3',
                url: Tresirmaos
            },
            {
                id: '4',
                url: Tresirmaos
            },
        ]
    },
    {
        id: '19',
        type: 'Poço',
        title: 'Coração',
        name: 'do Coração',
        image: Coracao,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo da Toca',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Coracao
            },
            {
                id: '2',
                url: Coracao
            },
            {
                id: '3',
                url: Coracao
            },
            {
                id: '4',
                url: Coracao
            },
        ]
    },
    {
        id: '20',
        type: 'Poço',
        title: 'Sossego',
        name: 'do Sossego',
        image: Sossego,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo da Toca',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Sossego
            },
            {
                id: '2',
                url: Sossego
            },
            {
                id: '3',
                url: Sossego
            },
            {
                id: '4',
                url: Sossego
            },
        ]
    },
    {
        id: '21',
        type: 'Cachoeira',
        title: 'Moinho',
        name: 'do Moinho',
        image: Moinho,
        price: '5',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo da Ponte',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Moinho
            },
            {
                id: '2',
                url: Moinho
            },
            {
                id: '3',
                url: Moinho
            },
            {
                id: '4',
                url: Moinho
            },
        ]
    },
    {
        id: '22',
        type: 'Cachoeira',
        title: 'Salomão',
        name: 'do Salomão',
        image: Salomao,
        price: '5',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo da Ponte',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Salomao
            },
            {
                id: '2',
                url: Salomao
            },
            {
                id: '3',
                url: Salomao
            },
            {
                id: '4',
                url: Salomao
            },
        ]
    },
    {
        id: '23',
        type: 'Poço',
        title: 'Perdição',
        name: 'da Perdição',
        image: Perdicao,
        price: '5',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo da Ponte',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Perdicao
            },
            {
                id: '2',
                url: Perdicao
            },
            {
                id: '3',
                url: Perdicao
            },
            {
                id: '4',
                url: Perdicao
            },
        ]
    },
    {
        id: '24',
        type: 'Poço',
        title: 'Canoa',
        name: 'da Canoa',
        image: Canoa,
        price: '5',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Canoa
            },
            {
                id: '2',
                url: Canoa
            },
            {
                id: '3',
                url: Canoa
            },
            {
                id: '4',
                url: Canoa
            },
        ]
    },
    {
        id: '25',
        type: 'Poço',
        title: 'Poço do Pulo',
        name: 'do Pulo',
        image: Pulo,
        price: '5',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Pulo
            },
            {
                id: '2',
                url: Pulo
            },
            {
                id: '3',
                url: Pulo
            },
            {
                id: '4',
                url: Pulo
            },
        ]
    },
    {
        id: '26',
        type: 'Poço',
        title: 'Tira-Prosa',
        name: 'Tira-Prosa',
        image: Tiraprosa,
        price: '5',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        distancia: 'Complexo Tira Prosa',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Tiraprosa
            },
            {
                id: '2',
                url: Tiraprosa
            },
            {
                id: '3',
                url: Tiraprosa
            },
            {
                id: '4',
                url: Tiraprosa
            },
        ]
    },
    {
        id: '27',
        type: 'Cachoeira',
        title: 'Grão Mogol',
        name: 'do Grão Mogol',
        image: Graomogol,
        price: '15',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Um lugar inesquecível! Rodeado por muita natureza, o Complexo do Grão Mogol é formado por incontáveis poços e quedas d`água cristalinas correndo pelas rochas, um cenário de extrema beleza. Para ter acesso ao início da trilha é necessário antes pegar a chave da porteira em um ponto de fácil localização (existe placa sinalizando), antes de passar pela sede da fazenda antiga que leva o mesmo nome do Complexo. O lugar está abertos em dias de sol e fechado em dias de chuva. O horário de funcionamento é das 09:00 às 17:00 diariamente.',
        location: 'Fazenda XYZ',
        vehicleRecomended: 'Qualquer Véiculo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Graomogol
            },
            {
                id: '2',
                url: Graomogol
            },
            {
                id: '3',
                url: Graomogol
            },
            {
                id: '4',
                url: Graomogol
            },
        ]
    },
    {
        id: '28',
        type: 'Mirante',
        title: 'Cruz das Almas',
        name: 'Cruz das Almas',
        image: CruzAlmas,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Ao lado do Aeroporto',
        vehicleRecomended: 'Qualquer Veículo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: CruzAlmas
            },
            {
                id: '2',
                url: CruzAlmas
            },
            {
                id: '3',
                url: CruzAlmas
            },
            {
                id: '4',
                url: CruzAlmas
            },
        ]
    },
    {
        id: '29',
        type: 'Serra',
        title: 'Serra de Carrancas',
        name: 'de Carrancas',
        image: Serra,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Serra de Carrancas',
        vehicleRecomended: 'Qualquer Veículo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Serra
            },
            {
                id: '2',
                url: Serra
            },
            {
                id: '3',
                url: Serra
            },
            {
                id: '4',
                url: Serra
            },
        ]
    },
    {
        id: '30',
        type: 'Mirante',
        title: 'Monte Teta',
        name: 'Monte Teta',
        image: MonteTeta,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Serra de Carrancas',
        vehicleRecomended: 'Qualquer Veículo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: MonteTeta
            },
            {
                id: '2',
                url: MonteTeta
            },
            {
                id: '3',
                url: MonteTeta
            },
            {
                id: '4',
                url: MonteTeta
            },
        ]
    },
    {
        id: '31',
        type: 'Serra',
        title: 'Broas',
        name: 'das Broas',
        image: Broas,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Serra das Broas',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Broas
            },
            {
                id: '2',
                url: Broas
            },
            {
                id: '3',
                url: Broas
            },
            {
                id: '4',
                url: Broas
            },
        ]
    },
    {
        id: '32',
        type: 'Pico',
        title: 'Abanador',
        name: 'do Abanador',
        image: Abanador,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Pico do Abanador',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Abanador
            },
            {
                id: '2',
                url: Abanador
            },
            {
                id: '3',
                url: Abanador
            },
            {
                id: '4',
                url: Abanador
            },
        ]
    },
    {
        id: '33',
        type: 'Gruta',
        title: 'Gruta da Toca',
        name: 'da Toca',
        image: Gruta,
        price: '10',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo da Toca',
        vehicleRecomended: 'Qualquer Veículo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Gruta
            },
            {
                id: '2',
                url: Gruta
            },
            {
                id: '3',
                url: Gruta
            },
            {
                id: '4',
                url: Gruta
            },
        ]
    },
    {
        id: '34',
        type: 'Cachoeira',
        title: 'Encontro',
        name: 'do Encontro',
        image: Encontro,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Encontro
            },
            {
                id: '2',
                url: Encontro
            },
            {
                id: '3',
                url: Encontro
            },
            {
                id: '4',
                url: Encontro
            },
        ]
    },
    {
        id: '35',
        type: 'Cachoeira',
        title: 'Grande',
        name: 'Grande',
        image: Grande,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Nascentes do Capivari',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Grande
            },
            {
                id: '2',
                url: Grande
            },
            {
                id: '3',
                url: Grande
            },
            {
                id: '4',
                url: Grande
            },
        ]
    },
    {
        id: '36',
        type: 'Serra',
        title: 'Serra do Galinheiro',
        name: 'do Galinheiro',
        image: Galinheiro,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Galinheiro
            },
            {
                id: '2',
                url: Galinheiro
            },
            {
                id: '3',
                url: Galinheiro
            },
            {
                id: '4',
                url: Galinheiro
            },
        ]
    },
    {
        id: '37',
        type: 'Cachoeira',
        title: 'Pulo',
        name: 'do Pulo',
        image: CachoeiraPulo,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: CachoeiraPulo
            },
            {
                id: '2',
                url: CachoeiraPulo
            },
            {
                id: '3',
                url: CachoeiraPulo
            },
            {
                id: '4',
                url: CachoeiraPulo
            },
        ]
    },
    {
        id: '38',
        type: 'Chapada',
        title: 'Perdizes',
        name: 'das Perdizes',
        image: Perdizes,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Complexo Tira Prosa',
        vehicleRecomended: '4X4',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Perdizes
            },
            {
                id: '2',
                url: Perdizes
            },
            {
                id: '3',
                url: Perdizes
            },
            {
                id: '4',
                url: Perdizes
            },
        ]
    },
    {
        id: '39',
        type: 'Igreja',
        title: 'Igreja',
        name: 'de Carrancas',
        image: Igreja,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Centro',
        vehicleRecomended: 'Qualquer Veículo',
        guia: false,
        moreImages: [
            {
                id: '1',
                url: Igreja
            },
            {
                id: '2',
                url: Igreja
            },
            {
                id: '3',
                url: Igreja
            },
            {
                id: '4',
                url: Igreja
            },
        ]
    },
    {
        id: '40',
        type: 'Estação',
        title: 'Estação',
        name: 'de Carrancas',
        image: Estacao,
        price: '0',
        mapa: 'https://www.google.com/maps/dir/-21.4884462,-44.6422967/Cachoeira+da+Fuma%C3%A7a,+Carrancas+-+MG,+37245-000/@-21.4803763,-44.6609609,14.5z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9f94a021ad287d:0xb5527abf11a3db46!2m2!1d-44.6828673!2d-21.4725668!3e0',
        polluted: false,
        description: 'Uma das carrancas naturais que originou o nome da cidade, uma bélissima rocha com o formato esculpido pela própria natureza. A semelhança com um rosto ou uma carranca chama a atenção de quem passa pela área.',
        location: 'Estação de Carrancas',
        vehicleRecomended: 'Qualquer Veículo',
        guia: true,
        moreImages: [
            {
                id: '1',
                url: Estacao
            },
            {
                id: '2',
                url: Estacao
            },
            {
                id: '3',
                url: Estacao
            },
            {
                id: '4',
                url: Estacao
            },
        ]
    },
];

export const Guias = [
    {
        id: '1',
        name: 'Daniel',
        image: Daniel,
        phone: '+553598216583',
        routers: [
            {
                id: '1',
                name: 'Roteiro One',
                atrativos: [
                    {
                        id: '1',
                        name: 'Véu de Noiva'
                    },
                    {
                        id: '2',
                        name: 'Pedra do índio'
                    }
                ],
                price: 30
            },
            {
                id: '2',
                name: 'Roteiro Two',
                atrativos: [
                    {
                        id: '1',
                        name: 'Véu de Noiva'
                    },
                    {
                        id: '2',
                        name: 'Pedra do índio'
                    }
                ],
                price: 40
            }
        ]
    },
    {
        id: '2',
        name: 'Fulano',
        image: Pessoa,
        phone: '99 99999-9999',
        routers: [
            {
                id: '1',
                name: 'Roteiro One',
                atrativos: [
                    {
                        id: '1',
                        name: 'Véu de Noiva'
                    },
                    {
                        id: '2',
                        name: 'Pedra do índio'
                    }
                ],
                price: 35
            },
            {
                id: '2',
                name: 'Roteiro Two',
                atrativos: [
                    {
                        id: '1',
                        name: 'Véu de Noiva'
                    },
                    {
                        id: '2',
                        name: 'Pedra do índio'
                    }
                ],
                price: 20
            }
        ]
    }
];

export const Fauna = [
    {
        id: '1',
        name: 'Lobo guará',
        cientificName: 'Chrysocyon brachyurus',
        image: 'https://scontent-gru2-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/220209369_504281600683951_7520226666408476986_n.jpg?_nc_ht=scontent-gru2-1.cdninstagram.com&_nc_cat=107&_nc_ohc=zOZIzoPQJ3EAX9zr9mD&tn=S6hVE_gKFJwaA4OA&edm=AP_V10EBAAAA&ccb=7-4&oh=a39a26bb5252372d800f966c431dcf59&oe=61163566&_nc_sid=4f375e'
    },
    {
        id: '2',
        name: 'Tucano',
        cientificName: 'Ramphastidae',
        image: 'https://scontent-gru1-1.cdninstagram.com/v/t51.2885-15/e35/127056490_199350091676821_7022510404307902446_n.jpg?_nc_ht=scontent-gru1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=JkBys1-_ZiAAX9ix8US&edm=AP_V10EBAAAA&ccb=7-4&oh=28b7c713570025bddb38dfac3a559032&oe=61178382&_nc_sid=4f375e'
    },
    {
        id: '3',
        name: 'Siriema',
        cientificName: 'Cariamidae',
        image: 'https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/e35/118254763_301864407706145_5477475575349979909_n.jpg?_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=105&_nc_ohc=FFKBY0t4o04AX8DODMO&edm=AP_V10EBAAAA&ccb=7-4&oh=6f337fe02cfa7974da854b786d4d8de6&oe=611807B3&_nc_sid=4f375e'
    },
    {
        id: '4',
        name: 'Aranha Pescadora',
        cientificName: 'Dolomedes tenebrosus',
        image: 'https://3.bp.blogspot.com/-aAw1OaZyMl0/Ugo91Qi-x-I/AAAAAAAAJ24/B09wvQg5Kd0/s1600/Aranha_Junior2.JPG'
    },
    {
        id: '5',
        name: 'Onça-parda',
        cientificName: 'Puma concolor',
        image: 'https://www.infraestruturameioambiente.sp.gov.br/pesm/wp-content/uploads/2015/03/cougar-275946_1280.jpg'
    },
];

export const Pousadas = [
    {
        id: '1',
        name: 'Pousada Master',
        location: 'Serra',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Pousada+Al%C3%A9m+das+Formas+-+23+Rod.+MG+451,+s%2Fn+Zona+Rural,+Carrancas+-+MG,+37245-000/@-21.4792397,-44.6586324,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93913b6d91fb:0x755e5cf33f5d353d!2m2!1d-44.6506155!2d-21.470063!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
        restaurante: true
    },
    {
        id: '2',
        name: 'Pousada Main',
        location: 'Zona Rural',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Pousada+Al%C3%A9m+das+Formas+-+23+Rod.+MG+451,+s%2Fn+Zona+Rural,+Carrancas+-+MG,+37245-000/@-21.4792397,-44.6586324,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93913b6d91fb:0x755e5cf33f5d353d!2m2!1d-44.6506155!2d-21.470063!3e0',
        image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/49/e5/3a/pousada-carcara.jpg?w=900&h=-1&s=1',
        restaurante: false
    },
    {
        id: '3',
        name: 'Pousada Full',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Restaurante+Tempero+da+Nair+-+Comida+Caseira+-+R.+Nove+de+Abril,+30,+Carrancas+-+MG,+37245-000/@-21.4880987,-44.6443556,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f9474e820afdb:0xbfbbb6e6479e6f46!2m2!1d-44.6454398!2d-21.4880574!3e0',
        image: 'https://hweb-upload.s3.sa-east-1.amazonaws.com/5f29a143acb69427284b8700/cbf3ac66d7024240817c59cc2eeb2a3c.jpg',
        restaurante: true
    }
];

export const Alimentacao = [
    {
        id: '1',
        type: 'Comida Mineira',
        name: 'Restaurante Main',
        location: 'Serra',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Restaurante+Tempero+da+Nair+-+Comida+Caseira+-+R.+Nove+de+Abril,+30,+Carrancas+-+MG,+37245-000/@-21.4880987,-44.6443556,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f9474e820afdb:0xbfbbb6e6479e6f46!2m2!1d-44.6454398!2d-21.4880574!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
        delivery: true,
    },
    {
        id: '2',
        type: 'Padaria',
        name: 'Padaria Master',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Restaurante+Tempero+da+Nair+-+Comida+Caseira+-+R.+Nove+de+Abril,+30,+Carrancas+-+MG,+37245-000/@-21.4880987,-44.6443556,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f9474e820afdb:0xbfbbb6e6479e6f46!2m2!1d-44.6454398!2d-21.4880574!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
        image: 'https://vejasp.abril.com.br/wp-content/uploads/2021/03/fabrique-higienopolis.jpg',
        delivery: false,
    },
    {
        id: '3',
        type: 'Pizzaria',
        name: 'Pizzaria X',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Restaurante+Tempero+da+Nair+-+Comida+Caseira+-+R.+Nove+de+Abril,+30,+Carrancas+-+MG,+37245-000/@-21.4880987,-44.6443556,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f9474e820afdb:0xbfbbb6e6479e6f46!2m2!1d-44.6454398!2d-21.4880574!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujBWC-afSzCWiK4neWr1uk9E2erlk_SbSvw&usqp=CAU',
        delivery: false,
    },
    {
        id: '4',
        type: 'Comida Japonesa',
        name: 'Sushi Z',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Restaurante+Tempero+da+Nair+-+Comida+Caseira+-+R.+Nove+de+Abril,+30,+Carrancas+-+MG,+37245-000/@-21.4880987,-44.6443556,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f9474e820afdb:0xbfbbb6e6479e6f46!2m2!1d-44.6454398!2d-21.4880574!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
        image: 'https://blog.saipos.com/wp-content/uploads/2020/05/10-dicas-de-como-montar-um-restaurante-de-sushi-SAIPOS-sistema-para-restaurante-1.jpg',
        delivery: true,
    }
];

export const Campings = [
    {
        id: '1',
        name: 'Camping Main',
        location: 'Cachoeira',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Camping+Sossego+Do+Jeca+-+R.+Padre+Tol%C3%AAdo+Taques,+73+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4879551,-44.6435267,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f940a438b8943:0xbbe6a21cdc3120d2!2m2!1d-44.6404123!2d-21.4880262!3e0',
        image: 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/56405514_2391176967582137_6990096756419592192_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2SUyEhRgVAQAX8KYFeX&_nc_ht=scontent-gru1-2.xx&oh=19cfcfa44411731e46b80d4a158db504&oe=61421572',
    },
    {
        id: '2',
        name: 'Camping Master',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Hospital+S%C3%A3o+Vicente+de+Paulo+-+R.+Oito+de+Dezembro,+216+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4892148,-44.644273,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93e80298387f:0x8aaf557855291e97!2m2!1d-44.6452746!2d-21.4896852!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
    },
    {
        id: '3',
        name: 'Camping Main',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Hospital+S%C3%A3o+Vicente+de+Paulo+-+R.+Oito+de+Dezembro,+216+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4892148,-44.644273,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93e80298387f:0x8aaf557855291e97!2m2!1d-44.6452746!2d-21.4896852!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
    },
];

export const Agencias = [
    {
        id: '1',
        name: 'Agência Main',
        location: 'Cachoeira',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Camping+Sossego+Do+Jeca+-+R.+Padre+Tol%C3%AAdo+Taques,+73+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4879551,-44.6435267,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f940a438b8943:0xbbe6a21cdc3120d2!2m2!1d-44.6404123!2d-21.4880262!3e0',
        image: 'https://scontent-gru1-2.xx.fbcdn.net/v/t1.6435-9/56405514_2391176967582137_6990096756419592192_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=2SUyEhRgVAQAX8KYFeX&_nc_ht=scontent-gru1-2.xx&oh=19cfcfa44411731e46b80d4a158db504&oe=61421572',
    },
    {
        id: '2',
        name: 'Agência Z',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Hospital+S%C3%A3o+Vicente+de+Paulo+-+R.+Oito+de+Dezembro,+216+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4892148,-44.644273,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93e80298387f:0x8aaf557855291e97!2m2!1d-44.6452746!2d-21.4896852!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
    },
    {
        id: '3',
        name: 'Agência W',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Hospital+S%C3%A3o+Vicente+de+Paulo+-+R.+Oito+de+Dezembro,+216+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4892148,-44.644273,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93e80298387f:0x8aaf557855291e97!2m2!1d-44.6452746!2d-21.4896852!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
    },
];

export const HospitalAndPharmacy = [
    {
        id: '1',
        name: 'Hospital São Vicente',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Hospital+S%C3%A3o+Vicente+de+Paulo+-+R.+Oito+de+Dezembro,+216+-+Centro,+Carrancas+-+MG,+37245-000/@-21.4892148,-44.644273,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93e80298387f:0x8aaf557855291e97!2m2!1d-44.6452746!2d-21.4896852!3e0',
        image: 'https://4.bp.blogspot.com/-ri8pGlhVxcI/WIecOOpUtcI/AAAAAAAAzRk/gsUgl4dsX_sUG9JBIP-6fSv3ZnmXd0rwwCLcB/s1600/DIVULGACAO1.jpg',
    },
    {
        id: '2',
        name: 'Farmácia X',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Drogaria+Carrancas+-+R.+Oito+de+Dezembro,+78,+Carrancas+-+MG,+37245-000/@-21.4885754,-44.6437543,19z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93e80298387f:0x5a4591940a19f5b9!2m2!1d-44.6442424!2d-21.4888768!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
    },
    {
        id: '3',
        name: 'Farmácia Z',
        location: 'Centro',
        mapa: 'https://www.google.com/maps/dir/Igreja+Matriz+de+Carrancas,+Carrancas+-+MG/Pousada+Al%C3%A9m+das+Formas+-+23+Rod.+MG+451,+s%2Fn+Zona+Rural,+Carrancas+-+MG,+37245-000/@-21.4792397,-44.6586324,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x9f940afe9c35e9:0xb0de18ef72096e39!2m2!1d-44.6421737!2d-21.488223!1m5!1m1!1s0x9f93913b6d91fb:0x755e5cf33f5d353d!2m2!1d-44.6506155!2d-21.470063!3e0',
        image: 'https://servircomrequinte.francobachot.com.br/wp-content/uploads/2018/11/254602-mesas-e-cadeiras-para-restaurante-como-escolher-as-mais-indicadas-e1543433615490.jpg',
    },
];