import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const HistoryText = styled.Text`
    font-size: 15px;
    font-family: 'Poppins_400Regular';
    color: #fff;
    margin-bottom: 30px;
    line-height: 26px;
`

const ScrollArea = styled.ScrollView`
    margin-top: 40px;
    height: 440px;
`

const History = () => {
    return (
        <ScrollArea showsVerticalScrollIndicator={false}>
            <HistoryText>
                Andar pelas ruas de Carrancas ou de bike pelas redondezas, que incluem fazendas históricas e marcos da Estrada Real é passeio obrigatório para quem vem aqui. A cidade foi fundada em meio ao ciclo do ouro e as viagens desde Parati trouxeram bandeirantes e as suas famílias, que fixaram moradia e criaram um povoado. Eram paulistas da capital e de Taubaté que por volta de 1720 encontraram-se às margens do Rio Grande em Minas Gerais.
            </HistoryText>
            <HistoryText>
                Apesar de grandes rivais na disputa pelas terras e pelo ouro, juntos se instalaram nas terras onde hoje está situado o município de Carrancas. Empolgados com o potencial fértil de suas terras e com a possibilidade de encontrar ouro em grande quantidade, decidiram conquistar o local iniciando um povoado com suas famílias, escravos e amigos. Em 1721 foi edificada uma capela em homenagem a Nossa Senhora da Conceição ficando então conhecido o lugar como Nossa Senhora do Rio Grande.
            </HistoryText>
            <HistoryText>
                Pouco a pouco o povoado ia crescendo com os paulistas e portugueses que chegavam interessados pelo ouro e pela agricultura que também se desenvolvia. Outro fator determinante para o seu crescimento, foi a elevação à freguesia em 1736 que aumentou bastante o número de habitantes do lugar.
            </HistoryText>
            <HistoryText>
                As escavações feitas pelos novos garimpeiros na serra mais próxima do lugar associadas a duas grandes rochas lá existentes, formavam para quem as via de longe, fisionomias semelhantes às de duas caras, por isso o nome de Carrancas. De lá para cá, muitos outros nomes surgiram, como, Nossa Senhora da Conceição das Carrancas, Carrancas de baixo, Carrancas de Cá e finalmente Carrancas. Por ironia, propriamente no município não fora encontrado ouro em quantidade economicamente viável mas sim na região bem próxima onde hoje estão localizados os municípios de São João del Rey , Tiradentes e Lavras.
            </HistoryText>
            <HistoryText>
                A febre do ouro passou e desde então Carrancas descansa em suas belas serras e cachoeiras deixando a tranqüilidade tomar conta de todos aqueles que a procuram em busca de paz, aventura e equilíbrio.Hoje, a cidade é considerada a TERRA DAS CACHOEIRAS. Sua beleza natural atrai visitantes de todo o país e do exterior.
                Pudera, além das trilhas, das quedas d’água e da vegetação abundante, Carrancas tem ainda a hospitalidade de sua gente, que se traduz em pousos variados, de pequenas pousadas a hotéis-fazenda que propiciam ao visitante a verdadeira vida do interior, com direito a ordenha e passeios a cavalo.
            </HistoryText>
            <HistoryText>
                Uma das mais importantes fontes de renda do município é a pecuária de corte e de leite, juntamente com a produção de cachaça, café, cana, eucalipto, milho, queijo, mandioca, feijão, arroz e artesanato.
                Outro ponto forte é a religiosidade: a fé do povo de Carrancas chama atenção, tanto que o carnaval de festa na cidade acontece duas semanas antes do oficial, o chamado CARNAVAL ANTECIPADO. Depois, enquanto o Brasil inteiro cai na folia, os homens de Carrancas se reúnem em retiro espiritual e a cidade é entregue à paz de quem procura descanso.
            </HistoryText>
            <HistoryText>
                Carrancas reúne, em um só lugar, tudo que o amante da natureza e da história de nossa gente pode querer, um lugar bucólico, em que o antigo e novo se misturam, emoldurados por mais de 110 atrações naturais, entre serras, grutas, poços e cachoeiras. A cada trilha, uma paisagem nova deságua aos olhos dos turistas que são sempre bem recebidos pelos moradores.
            </HistoryText>
            <HistoryText>
                A mesa sempre farta é apenas uma desculpa para o que o carranquense mais gosta de fazer, prosear, seja nos bares, nas ruas, nos próprios atrativos naturais ou em uma das 25 pousadas, hotéis e fazendas que servem de pouso para os visitantes. Carrancas atrai pela religiosidade, pela simplicidade e pela fartura de verde e o som das águas, que está em todos os lugares. Uma terra cheia de cultura popular e belezas naturais.
            </HistoryText>
        </ScrollArea>
    )
}

export default History