var rota = 'rota1';
var a = 1;
var b = 1;
var c = 1;

// texto e respostas
let respostas = document.querySelector('#resp');
let resp1 = document.querySelector('#resp1');
let resp2 = document.querySelector('#resp2');
let resp3 = document.querySelector('#resp3');
let fundo = document.querySelector('#fundo');
let dialogo = document.querySelector('#dialogo');
let config = document.querySelector('.config');
let opc = document.querySelector('.opc');
let but = document.querySelector('.button.one');
let but2 = document.querySelector('.button.two');
let but3 = document.querySelector('.button.three');
let but4 = document.querySelector('.button.four');
let tela = document.getElementById('tela');
let formProgresso = document.getElementById('formProgresso');
let nomeUsuarioInput = document.getElementById('nomeUsuario');
let progressoSalvoDiv = document.getElementById('progressoSalvo');
let hist = document.querySelector('#falaTela');


let selected = [];

// animação


let textoArray;
let letras;
let finish = false
letras = [];
let textvel = 30;
let time;
let timeouts = [];
let original = '';


const titulo = dialogo;
original = titulo.textContent;
typeWrite(titulo);


// 2x e menu

let active = false;
let twox = false;
let auto = false;
let savein = false;
let histo = false;



config.addEventListener('mousedown', () => {


    if (active == false) {
        opc.style.display = 'flex'
        active = true;
    } else {
        opc.style.display = 'none'
        active = false;
    }
})


but2.addEventListener('mousedown', () => {


    if (twox == false) {
        textvel = 30;
        twox = true;
        but2.style.background = '#4E0000'
    } else {
        textvel = 10;
        but2.style.background = '#9E0000'
        twox = false;
    }

   
})



// dialogos



fundo.addEventListener('mousedown', (event) => {
    if (event.button === 0 && window.getComputedStyle(tela).getPropertyValue('display') === 'none' && window.getComputedStyle(hist).getPropertyValue('display') === 'none') {
        fala();
        adicionarFala(dialogo.textContent);
    }
});




function fala() {


    if (rota == 'rota1' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {

        switch (a) {
            case 1:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Em um local tomado pela escuridão, John se vê imerso em pensamentos. \n *Está quieto* \n Pingo de água'

                a++;
                break
            case 2:
                fundo.style.background = "url('gota.jpg') no-repeat center / cover";
                dialogo.innerHTML = '*Frio* \n Pingo de água \n *Dor* '
                a++;
                break
            case 3:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Minha cabeça… Tá doendo…* \n Pingo de água \n *Onde estou?* Não sinto nada… Apenas essa maldita dor de cabeça* '
                a++;
                break
            case 4:
                
                dialogo.innerHTML = '*Kugh pare* \n Então a efêmera escuridão lentamente começa a tomar um tom carmesim.  \n *Vermelho?*'

                a++;
                break
            case 5:
                fundo.style.background = 'crimson';
                dialogo.innerHTML = 'Cada vez mais o carmesim se apossa da escuridão. \n *Esse vermelho… é lindo… mas doloroso… será que esse é o meu fim? Em meio a esse abismo tomado pela dor?*'
                a++;
                break
            case 6:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'Então John lentamente começa a abrir os olhos e recobrar a consciência, sua visão, ainda um pouco embaçada, recebe os primeiros raios de luz após a escuridão já decorrida'
                a++;
                break
            case 7:
              
                dialogo.innerHTML = '-Luz… Claridade… Dor…'
                a++;
                break
            case 8:
                fundo.style.background = 'url("cena1.jpg") no-repeat center / contain';
                dialogo.innerHTML = 'Então John recobra sua consciência embora ainda um pouco atordoado, ao abrir melhor seus olhos ele percebe que está deitado no chão, ele se vê em meio a sangue e uma estridente dor pelo corpo todo, mas principalmente na lateral esquerda de sua cabeça.'
                a++;
                break
            case 9:
                
                dialogo.innerHTML = 'Diante da dor e sangue John se obriga a acordar e leva sua mão ao local da sua dor de cabeça, e novamente, mais sangue carmesim, diante de tal situação, John que se vê tomado pelo medo e desespero, começa a falar.'
                a++;
                break
            case 10:
               
                dialogo.innerHTML = '-O-o quê é isso??? \n -Esse sangue é meu?? \n -Kugh! Doi!'

             a++;
                break
                case 11:
                fundo.style.background = 'url("cena2.jpg") no-repeat center / contain';
                dialogo.innerHTML = '-Por que isso tá acontecendo comigo? \n -Por que? \n -Doi! \n -se isso for uma brincadeira parem isso!'

             a++;
                break
                case 12:
                
                dialogo.innerHTML = 'Tomado pelo desespero e medo, John percebe que precisa se acalmar, e começa a respirar fundo, então ele ignora a dor, se senta e fecha os olhos, e então começa a contar…'

             a++;
                break
                case 13:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Um… dois… três…* \n *Sim, vamos nos acalmar, me desesperar nessa situação não me levará a nada…*?'

             a++;
                break
                case 14:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então um pouco mais calmo mas ainda hesitante, John primeiramente examina seu corpo, percebendo que o sangue já estava ali, e não havia mais nada saindo dele. Então John começa a olhar ao seu redor, percebendo um revólver em sua mão esquerda.'

             a++;
                break
                case 15:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-U-uma arma? Eu não tinha percebido isso ainda… mas penso nisso depois…'

             a++;
                break
                case 16:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'John começa a olhar ao redor. Um pequeno quarto com duas janelas e duas portas, um beliche no canto direito da parede na lateral de uma das portas, do outro lado uma mesa com dois lugares, uma espécie de fogão a lenha e armários, nas paredes existe uma espécie de lamparina que dá uma pequena iluminação ao quarto escuro, apenas banhado pela luz da lua que adentra pelas janelas e se mistura com o carmesim entranhado pelo cenário.'

             a++;
                break
                case 17:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Aonde eu estou? A última coisa que eu me lembro é de ter ido dormir no meu quarto depois de dar aula… essas arquitetura parece meio antiga, talvez da era vitoriana?'

             a++;
                break
                case 18:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então John ainda receoso com a situação percebe um espelho velho em frente ao beliche, então vai até ele para verificar o motivo da sua dor de cabeça, e então percebe algo. Um homem por volta dos seus 20 anos com algo entorno de 1,80 de altura, cabelos negros como a noite e olhos misturados com um tom de carmesim e violeta, sua pele é um pouco pálida além de estar um pouco magro. Vendo isso, Jhon exclama em descrença.'

             a++;
                break
                case 19:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Que? Quem é esse? O que é esse corpo e o que é essa casca na minha cabeça!?'

             a++;
                break
                case 20:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então o medo novamente começa a percorrer pelo corpo de John, que se encontra em um corpo diferente do seu, e com uma marca de tiro na cabeça que agora é apenas uma casca coberta pelo carmesim. Então John vai até a pia perto do fogão onde havia uma bacia com água, e então começa a jogar água em seu rosto tentando acordar deste pesadelo.'

             a++;
                break
                case 21:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-I-Isso só pode ser um sonho… certo?!? \n -Mas tudo bem, preciso ficar calmo, mesmo isso sendo um sonho não, ou eu não lembrando quem sou ou o que sou... '

             a++;
                break
                case 22:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então John se seca e vai novamente ao espelho, então começa a tocar seu rosto. \n -Isso deve ter uma resposta certo? Haha, certo? Sigh… vamos ver o que temos por aqui…'

             a++;
                break
                case 23:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então John olha para uma espécie de escrivaninha que possui alguns livros espalhados, uma carta, uma caneta feita com uma pena e o revólver que ele havia encontrado, ao lado da escrivaninha há uma estante de livros, que em sua maioria são livros acadêmicos. Checando os livros, um deles se parece com uma espécie de diário, então John decide começar a ler.'

             a++;
                break
                case 24:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Hm? Um diário… ótimo… isso deve me dar algumas informações, vamos ver o nome… Aoi Holloway? Esse deve ser o nome do dono desse corpo certo? Quer dizer… meu nome? Hm? Algumas páginas estão arrancadas?'

             a++;
                break
                case 25:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então John mergulha nas páginas remanescentes, percorrendo os vestígios de um diário repleto de rabiscos e murmúrios de um espírito atormentado.-Vamos ver, ele estudava história em uma universidade no lado leste da cidade, fazia trabalhos de meio período para se sustentar, aqui não tem nada sobre sua família… Oh o nome de alguém, Erick? Parece ser um amigo de faculdade? '

             a++;
                break
                case 26:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então após páginas e páginas e informações pífias perto do que ainda podia ser revelado, John se vê em uma página cheia de rabiscos e palavras de alguém à beira da insanidade, o deixando com uma expressão confusa.'

             a++;
                break
                case 27:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-O que são todos esses riscos? O caos está próximo? Deus está morto? Nada é real? Não acreditem nesses falsos deuses? Hm? Essa parte está escrita em outra língua, parece uma língua oriental, ou algo do tipo… vamos ver…. T-todos… "Todos retornarão ao abismo". O que supostamente era para isso significar? Ele era algum tipo de Niilista?'

             a++;
                break
                case 28:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então em meio a pensamentos confusos, ansiedade e medo, John começa a ligar os fatos, ele começa a juntar as palavras em seu diário, a cena anterior e a arma em sua frente.'

             a++;
                break
                case 29:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Hm… ele descobriu algo enquanto pesquisava para a faculdade? Pela situação monetária descrita no diário, e pelo o que posso ver ao redor, ele não teria dinheiro para comprar uma arma… também tem as páginas arrancadas tentando apagar algo… isso foi realmente… suicídio?'

             a++;
                break
                case 30:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então uma gota de sangue pinga sobre o diário, fazendo John voltar a realidade e avaliar a situação ao seu redor. \n -Ah, talvez eu devesse pensar enquanto limpo essa bagunça, se alguém visse essa situação… seria ruim, certo?'

             a++;
                break
                case 31:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'John então pega um pano, o molha na bacia e começa a limpar o sangue do local, enquanto pensa na situação que se encontra. Enquanto John limpava o sangue do local, sua mente continuava a girar em busca de respostas. Ele se esforçava para juntar os fragmentos de memória que ainda lhe restavam, mas cada tentativa parecia apenas afundá-lo ainda mais na incerteza.'

             a++;
                break
                case 32:
                    fundo.style.background = 'black';
                    dialogo.innerHTML = 'Com a limpeza concluída, John troca sua roupa e decide explorar o pequeno quarto em que se encontrava. Ele examinou os livros na estante, na esperança de encontrar mais pistas sobre sua identidade ou sobre o motivo de estar ali. Entre os livros acadêmicos, um volume chamou sua atenção: um antigo livro de ocultismo.'
    
                 a++;
                    break
                    case 33:
                        fundo.style.background = 'black';
                        dialogo.innerHTML = 'Curioso, John abriu o livro e folheou suas páginas desgastadas. Símbolos estranhos e rituais eram descritos detalhadamente. Embora não entendesse completamente o conteúdo, havia algo familiar naquelas palavras e desenhos. Uma sensação de déjà vu o invadiu.'
        
                     a++;
                        break
                        case 34:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Enquanto lia, uma passagem específica chamou sua atenção: "Aquele que se atreve a desvendar os segredos do além, deve estar preparado para enfrentar as consequências de seus atos. O equilíbrio é frágil, e a fronteira entre a luz e a escuridão é tênue. Aquele que desafia o véu do desconhecido corre o risco de ser consumido por ele."'

             a++;
                break
                case 35:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aquelas palavras ressoam na mente de John, ecoando em seu ser. Ele sentiu uma mistura de fascinação e apreensão. Seria possível que ele tivesse se envolvido em algo além de sua compreensão? E se fosse assim, como poderia desfazer o que quer que tenha acontecido?'

             a++;
                break
                case 36:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-sigh, eu não poderia ter renascido como filho de um nobre rico e então viver tranquilamente a minha vida? Enfim, pensar nisso agora não vai me levar a nada. \n Barulho de estômago roncando.'

             a++;
                break
                case 37:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Sem John perceber, o tímido sol começa a exibir seus primeiros raios solares, a fome faz John perceber que já havia amanhecido, então ele pega um relógio de bolso que estava em cima do diário, é um relógio prata com detalhes bem esculpidos.'

             a++;
                break
                case 38:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-é mesmo, a quanto tempo eu não como? Eu também perdi bastante sangue… hm… já são 6 da manhã, a hora aqui parece ser igual a da Terra… mas olhando assim, não parece ter nenhuma comida guardada aqui, provavelmente vou ter que ir comprar. '
                 


             a++;
                break
                case 39:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Agora, onde ele guarda o dinheiro?'
respostas.style.display = 'flex';
                resp3.innerHTML = 'Verificar estantes'
                resp2.innerHTML = 'Verificar a cama'
                resp1.innerHTML = 'Verificar a escrivaninha'
              
             a++;
                break
                case 40:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então John verifica entre as gavetas e a escrivaninha, até encontrar dentro de um saco feito de papel dentro de uma das gavetas, dentro haviam algumas moedas de cores distintas e três papéis que pareciam ser notas.'

             a++;
                break
                case 41:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Bom, não faço ideia de como funciona o dinheiro nesse mundo, então vou levar uma das notas, e duas moedas, uma dessas que parece ser de bronze e essa parecendo prata, deve ser o suficiente pra comprar alguns pães, mas… vai ficar tudo bem se eu sair?'

             a++;
                break
                case 42:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Tomado pela ansiedade e medo do desconhecido, John começa a se questionar se deve sair, afinal ao que tudo indica, não era para Aoi estar vivo, também havia a chance de algum conhecido reconhecer Aoi, essas eram possibilidades dentro das milhares passando em sua cabeça. Então ele olha para o revólver, o pega de cima da escrivaninha e o guarda em um dos bolsos.'

             a++;
                break
                case 43:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-*Vou levar isso apenas por precaução… vou pegar uma folha também.* murmura para si mesmo.'

             a++;
                break
                case 44:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Antes de sair, John se olha novamente no espelho, cobre a cicatriz que ainda lhe resta com seu cabelo, e se encara por alguns segundos tentando reunir coragem e forças para sair. \n -Vamos lá, agora você não é mais o professor John Smith que tinha uma vida tranquila na Terra, agora você é Aoi, um jovem esforçado que batalha para sobreviver, saindo daquela porta, John está morto, e apenas Aoi permanecerá neste mundo'

             a++;
                break
                case 45:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então, John dá dois tapinhas vigorosos em suas bochechas, infunde seu rosto com um sorriso inocente, mas apesar da aparência serena, sua alma permanece atormentada pelos enigmas que o cercam. Incerto do que o aguarda, mas certo do que busca, ele se compromete a desvendar sua verdadeira identidade, o local em que se encontra e a razão por trás de sua presença nesse território desconhecido. Então caminha até a porta e abre lentamente olhando o vazio e silencioso corredor do seu velho apartamento.'

             a++;
                break
                case 46:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Um, dois, três.* - Vamos lá!'

             a++;
                break
                case 47:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então Aoi sai e tranca a porta com sua chave, após isso guarda a chave em seu bolso enquanto olha para o corredor feito de madeira com mais 3 portas, antes de chegar a uma escada antiga, o local parece antigo, mas bem cuidado, os outros vizinhos parecem estar acordando para ir trabalhar, alguns até já parecem ter ido, descendo as escadas, novamente um corredor, mas dessa vez iluminado pelo sol sereno e, por sorte não encontra ninguém enquanto caminha até a saída.'

             a++;
                break
                case 48:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Oh, isso é bem diferente do que eu esperava…'

             a++;
                break
                case 49:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Enquanto Aoi sai de sua humilde moradia, seus olhos contemplam uma cidade envolta em uma atmosfera pitoresca. As ruas estreitas são adornadas por construções de estilo renascentista e vitoriano, cujas fachadas exibem detalhes elaborados e janelas adornadas. Os prédios erguem-se majestosamente ao céu, mesmo que alguns mostrem sinais de decadência e negligência. A rica paleta de cores das paredes desbotadas é iluminada pelos primeiros raios de sol que começam a surgir no horizonte, pintando a cidade com tons dourados e âmbar. Nas vielas de paralelepípedos, o cotidiano desperta lentamente, com o ruído dos comerciantes montando suas barracas e os primeiros passantes se movendo com determinação.'

             a++;
                break
                case 50:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi caminha pelas ruas da cidade desconhecida, absorvendo cada detalhe com olhos curiosos e maravilhados. As construções imponentes e a arquitetura peculiar o transportam para uma época distante, enquanto o sol nascente pinta o ambiente com tons cálidos e acolhedores. \n Seus passos o levam em direção a uma pequena padaria, onde o aroma convidativo de pão fresco preenche o ar. Ao adentrar o estabelecimento simples, ele é recebido por um padeiro de semblante amigável e cabelos grisalhos.'

             a++;
                break
                case 51:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Olá, jovem. Em que posso ajudá-lo? pergunta o padeiro com gentileza.'

             a++;
                break
                case 52:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi sente a necessidade de escolher as palavras cuidadosamente, ainda incerto sobre como interagir nesse mundo novo.  \n -Bom dia senhor! Pode me ver 5 pães por favor!.'

             a++;
                break
                case 53:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'O padeiro, de maneira acolhedora, seleciona alguns pães frescos e coloca-os cuidadosamente em um saco de papel. \n -Aqui está, meu jovem. Espero que goste. Diz ele, estendendo o pacote para Aoi \n Ao pegar o pão, uma sensação de alívio e gratidão toma conta de John. Apesar de todas as incertezas e desafios que enfrenta, ele encontrou um momento de conforto e satisfação em uma simples compra de pão.'

             a++;
                break
                case 54:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Quanto que isso fica senhor? Aoi fala com um pequeno sorriso. \n -2 Rois cada jovemzinho! \n Então Aoi vai até seu bolso e sente o cano frio de seu revólver junto as moedas,  ele pega a menor moeda que havia o número 10 e o rosto de alguém provavelmente importante para aquele local.'

             a++;
                break
                case 55:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Isso deve ser o suficiente certo? Pela coloração e tamanho parece ser um dime? Embora eu não acho que um pão custaria 2 cents* \n -Aqui, é isso certo? \n -Muito obrigado pela compra!'

             a++;
                break
                case 56:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-ah! Haha, obrigado pelo aviso, prometo que vou tomar mais cuidado! Boas vendas senhor! \n Aoi guarda a nota novamente, e começa a sair da loja, mantendo a mão no bolso que está o revólver.'

             a++;
                break
                case 57:
                    fundo.style.background = 'black';
                    dialogo.innerHTML = '*Então 10 daquelas moedas equivalem a uma nota dessas, a moeda maior deve ser de 50 Rois igual a o que ele falou, o sistema monetário é bem parecido com o dólar, apenas os preços que parecem ser bem diferentes, mas bom, eu não deveria ficar muito tempo parado em um local.*'
    
                 a++;
                break
                case 58:
                    fundo.style.background = 'black';
                    dialogo.innerHTML = 'Com um sorriso de agradecimento, Aoi se despede do padeiro e sai da padaria, então começa a vagar pelas ruas olhando os mercadores e artistas de rua na cidade, enquanto saboreia uma maçã que comprou em uma das bancadas.'
    
                 a++;
                break
                case 59:
                    fundo.style.background = 'black';
                    dialogo.innerHTML = '-bom, o que eu deveria fazer agora?'
                    respostas.style.display = 'flex';
                resp2.innerHTML = 'Voltar para casa.'
                resp1.innerHTML = 'Continuar andando.'
                resp3.innerHTML = 'Procurar uma Biblioteca.'
                b = 1;
    
                 a++;
                    break
                case 60:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Enquanto caminha pelas vielas dessa grande cidade, Aoi tenta assimilar as informações que conseguiu até agora, após notar as semelhanças que o local possui com a Terra, sua mente ficou mais clara embora ainda confusa com toda a mudança, e após refletir sobre sua situação, algo passa em sua cabeça, levando a sua mão ao seu machucado de forma involuntária.'

                 a++;
                break
                case 61:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Será que existem farmácias ou algo do tipo por aqui? Eu deveria comprar gazes, um pano ou algo do tipo, embora eu não devesse ficar andando muito por aí, se alguém me reconhecer seria um problema por enquanto.*  Aoi pensa enquanto analisa seus arredores'

             a++;
                break
                case 62:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Enquanto Aoi caminha pelas ruas da cidade, seus olhos curiosos captam os detalhes da arquitetura renascentista misturada com elementos vitorianos. Os edifícios altos e imponentes contrastam com as ruas estreitas e movimentadas, onde pessoas de diferentes classes sociais se apressam em suas rotinas diárias.'

             a++;
                break
                 case 63:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Seus passos o levam até uma pequena farmácia com uma placa de madeira desgastada. Aoi entra, sendo recebido pelo som de um sino tilintando acima da porta. No interior, o cheiro característico de ervas e medicamentos enche o ar. Aoi se aproxima do balcão, onde um senhor de idade, com cabelos grisalhos e um olhar sábio, o cumprimenta gentilmente.'

             a++;
                break
                 case 64:
                fundo.style.background = 'black';
                dialogo.innerHTML = '- Boa tarde, jovem. Em que posso ajudá-lo? - diz o senhor, com uma voz calma e acolhedora.'

             a++;
                break
                 case 65:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi examina os produtos na prateleira, procurando por gaze. Enquanto faz isso, uma garota de cerca de 13 anos, vestida com um avental branco, se aproxima do senhor, sussurrando algo em seu ouvido. Aoi percebe que ela deve ser uma aprendiz ou assistente na farmácia.'

             a++;
                break
                 case 66:
                fundo.style.background = 'black';
                dialogo.innerHTML = '- Você está procurando algo específico, senhor? - pergunta a garota, com um tom de curiosidade. \n Aoi volta sua atenção para ela, tentando assimilar todas as informações que consegue. Ele pondera por um momento antes de responder. \n - Sim, gostaria de comprar algumas gazes, por favor. Preciso cuidar de um ferimento.'

             a++;
                break
                 case 67:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'A garota sorri de maneira amigável e pega uma caixa de gaze, entregando-a a Aoi. \n - Aqui estão. Se precisar de algo mais, é só pedir! \n Aoi agradece com um aceno de cabeça, apreciando a hospitalidade dos moradores locais. Enquanto paga pelas gazes, ele tenta ligar os pontos em sua mente, captando os detalhes e informações que encontra.'

             a++;
                break
                 case 68:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Essa cidade tem um aspecto histórico, com elementos renascentistas e vitorianos. O senhor parece ser um médico aposentado e a garota, talvez uma aprendiz. Não é algo tão diferente da terra, tirando a idade dela.*'

             a++;
                break
                 case 69:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi despede-se do senhor e da garota, saindo da farmácia com cautela. Ele continua observando os transeuntes, tentando assimilar mais pistas sobre a sociedade em que se encontra. A cada interação e cada vislumbre da cidade, seu desejo de descobrir a verdade aumenta. \n *Preciso ser cauteloso, mas também devo buscar respostas. Essas pessoas podem ter conhecimento sobre meu passado, ou sobre quem eu sou neste mundo desconhecido.*'

             a++;
                break
                 case 70:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Com esses pensamentos fervilhando em sua mente, Aoi segue adiante, explorando a cidade em busca de mais pistas e respostas, enquanto mantém a gaze cuidadosamente guardada, um lembrete constante de sua jornada em busca de sua verdadeira identidade. \n Aoi então pega o relógio de bolso para olhar as horas, os ponteiros marcam nove da manhã, as ruas começam a ficar mais cheias, os olhares também aumentaram, fazendo o perigo ficar a espreita.'

             a++;
                break
                 case 71:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Talvez seja melhor eu voltar para casa por enquanto…* \n Então Aoi segue seu rumo para casa após comprar o que precisava, a chance de ser reconhecido pelos olhares perdidos, também aumentam o medo das descobertas de um passado perdido'

             a++;
                break
                 case 72:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'De volta ao corredor escuro do seu quarto, Aoi ainda hesitante por conta dos acontecimentos recentes, antes de abrir a maçaneta checa o papel que pegou de sua gaveta, e deixou preso na parte de cima da porta.'

             a++;
                break
                 case 73:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*O papel ainda está ali, então ninguém abriu a porta, se alguém tivesse mexido o papel teria caído, claro tem a chance da pessoa ter visto e colocado novamente, mas o papel está pela parte de fora, então colocar ele ali e estar dentro do quarto não é uma opção viável, bom talvez eu esteja meio paranóico?*'

             a++;
                break
                 case 74:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então Aoi verifica a trança da porta, ainda está fechada, o que o leva a destrancar a porta e entrar, aliviado por finalmente estar em casa, ele larga as coisas em cima da mesa e começa traçar seus próximos passos enquanto esquenta água no fogão a lenha, enquanto a água esquenta, Aoi passa a bandagem ao redor de sua cabeça, embora o machucado agora seja apenas uma casca.'

             a++;
                break
                 case 75:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Após enfaixar sua cabeça ele começa a explorar os outros livros de sua estante, em busca de algo útil como algum outro diário ou algum livro geográfico, mas o que ele encontra são apenas livros de misticismo e alguns livros infantis.'

             a++;
                break
                 case 76:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Livros infantis? Talvez Aoi morasse com mais alguém aqui? Afinal a cama é um beliche, talvez tenha algo nas outras páginas do diário? Eu deveria olhar com mais calma daqui a pouco. Mas vamos ver  esses livros um pouco*'

             a++;
                break
                 case 77:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Oh, esse parece ser algum tipo de livro de geografia? Acho que isso vai me ajudar um pouco, vamos ver… existem quatro continentes, eu pareço estar nesse aqui, segundo o livro… Re…A-lia? Realia, interessante… - Olhando melhor a contracapa do livro Aoi percebe um selo de devolução.*'

             a++;
                break
                 case 78:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Parece ser um livro de alguma biblioteca… parece que eu preciso devolver dia 10 de março, então faltam 2 dias, oh, parece ter o nome da cidade também…  cidade de erion? Do reino de Hectrion… parece ser a cidade que eu estou agora não é? Erion em, vamos ver o que mais… hm? O que é aquele livro?'

             a++;
                break
                 case 79:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então Aoi retoma sua atenção para um livro específico, parece um livro com alguns rituais escritos, é um livro negro com alguns círculos mágicos e runas, muito parecido com livros que podiam ser encontrados na Terra para pessoas que gostavam de ocultismo ou coisas do tipo. Então atiçado pela curiosidade Aoi começa a folhear o livro enquanto se senta em sua escrivaninha.'

             a++;
                break
                 case 80:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Parecem algum tipo de rituais ou magias, talvez seja de algum filme? Quer dizer, existem filmes neste mundo? A maioria aqui requer materiais caros ou difíceis de se encontrar, eu acho… dariam para serem usados em uma história, ficariam bons. Hmn, esse parece bem fácil.*'

             a++;
                break
                 case 81:
                fundo.style.background = 'black';
                dialogo.innerHTML = "Título do ritual: Samsara's Reclamation \n *Parece ser algo relacionado ao budismo? Se não me engano samsara tem algo a ver com origem, talvez isso me faça voltar ao meu mundo?!? Embora eu seja sético a essas coisas não custa tentar né?* Pensa John animado com a idéia."

             a++;
                break
                 case 82:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Vamos ver o que vou precisar, hm, são enigmas, interessante, por onde devo começar" - pensa John com um pouco de animação.*'

             a++;
                break
                 case 83:
                fundo.style.background = 'black';
                dialogo.innerHTML = '"Eu sou a prole radiante da aurora divina, O progenitor da força primordial em movimento, A água maternal que nutre a vida em seu seio, Sem minha presença, a existência é abreviada em tormento. Aos olhos de muitos, resplandeço com vida plena, Mas para alguns, minha essência se obscurece na incerteza."'

             a++;
                break
                case 84:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Interessante, o que pode ser esse objeto? - diz Jhon botando seu dedo no queixo pensativo.'
                   respostas.style.display = 'flex';
                resp1.innerHTML = 'Pão'
                resp2.innerHTML = 'Moeda'
                resp3.innerHTML = 'Eu mesmo'
                b = 9;
                c = 2;

             a++;
                break
                case 85:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Hm… Radiante Aurora divina provavelmente está se referindo ao sol, algo que nasça da água mas também a mantenha, e por último, a dualidade da existência não é? A dúvida entre a vida e a morte, hm… oh, plantas talvez? Elas se encaixam na descrição! - exclama John ainda pensativo'

             a++;
                break
                case 86:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Bem, o mais próximo de uma planta que tenho aqui, seria um pão… já que é feito de trigo, deve servir certo? - enquanto fala, John pega um dos pães que comprou e o deixa em seu lado.'

             a++;
                break
                case 87:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Bom, vamos ver o segundo item, provavelmente vai ser outro enigma, certo? Bem, eu não desgosto disso.'

             a++;
                break
                case 88:
                fundo.style.background = 'black';
                dialogo.innerHTML = '"Sou a encruzilhada onde a dualidade se encontra, O véu que separa o fim e a verdade em seu encanto, Desperto a alegria e a tristeza, dançando com a vida, Sou o temor ancestral que a humanidade aniquila. Diante de mim, um rio efêmero flui sem cessar, Escrevendo a história em suas águas, sem deixar de sonhar."'

             a++;
                break
                case 89:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Interessante, eu tenho alguns palpites, mas qual deles está correto?'
                respostas.style.display = 'flex';
                resp1.innerHTML = 'Revólver'
                resp2.innerHTML = 'Relógio'
                resp3.innerHTML = 'Livro'
                b = 10;
                c = 3;

             a++;
                break
                case 90:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Dualidade… hm talvez o revólver? Já que normalmente é usado para matar, então tem a dualidade entre a vida e a morte… temor ancestral em? Talvez o medo mais antigo da humanidade? Dizem que é o desconhecido… também precisa ser algo que flui…'
                

             a++;
                break
                case 91:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então de repente um shock percorre pela mente de Jhon \N -hm? Talvez… o tempo? Bom, o tempo também traz a morte, ele é algo desconhecido e misterioso, e sempre está fluindo como um rio de fato… será que é possível ser isso?'

             a++;
                break
                case 92:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-bom… acho que o tempo se encaixa bem na descrição, então vou usar esse relógio, o que usar além disso para representar o tempo não é?. - Fala Jhon enquanto pega o relógio prata de seu bolso e o coloca em sua frente no chão junto ao outro objeto. \N -Vamos ver o próximo.'

             a++;
                break
                case 93:
                fundo.style.background = 'black';
                dialogo.innerHTML = '"No horizonte além do vislumbre,Uma força que te faz seguir, Pode ser frágil ou poderosa, Pode te elevar ou te consumir. Aos descrentes um mistério, Aos crentes uma luz, Em tempos de incerteza, É nela que encontrarás a cruz. No coração dos homens reside, Uma chama que jamais se apaga, Mas cuidado, ó ser incauto, Pois a fé cega também te traga. Qual é essa palavra sagrada, Que move montanhas e corações, Mas que, se mal compreendida, Pode levar a tristes ilusões?"'

             a++;
                break
                case 94:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Esse parece ser algo que as pessoas acreditam? Talvez algo sagrado, o que posso usar pra representar isso? Vamos ver… '
                respostas.style.display = 'flex';
                resp1.innerHTML = 'Escapulário'
                resp2.innerHTML = 'Dinheiro'
                resp3.innerHTML = 'Sua Vida'
                b = 10;
                c = 3;

             a++;
                break
                case 95:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Bom como me parece algo a ver com "fé" provavelmente eu posso usar algo que seja "sagrado" não é? Exemplo uma bíblia ou um crucifixo, bom esse mundo parece ter bastante religiões, então deve ter algo pelo quarto certo?'

             a++;
                break
                case 96:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Jhon então se levanta e procura por algo pelo quarto, até encontrar um escapulário perto do travesseiro da parte de baixo do beliche, então ele volta para a posição que estava e se senta no chão novamente, então bota o escapulário no chão junto com outros itens e retorna aos passos descritos no livro.'

             a++;
                break
                case 97:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Vamos, hm? Ótimo! Parece ser o último item, embora isso estivesse divertido… acho que foi bom ocupar minha cabeça um pouco… enfim vamos fazer isso rápido!'

             a++;
                break
                case 98:
                fundo.style.background = 'black';
                dialogo.innerHTML = '"No silêncio dos abismos ocultos, Um vácuo sutil se faz presente, Nem sombras, nem rastros, nem vestígios, Um enigma envolto na ausência latente. Entre as partículas do infinito, Uma ausência se esconde no espaço, Sem nome, sem forma, sem substância, Um enigma sem traços. Na escuridão mais profunda, Na calmaria do vácuo sideral, Um mistério sutil se desvenda, Para aqueles que buscam decifrar o real. Que mistério obscuro é este, Que transcende o entendimento humano, Que desafia a própria existência, Um enigma além do plano?"'

             a++;
                break
                case 99:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Jhon leu atentamente o enigma, seus olhos percorrendo cada palavra com intensidade. Uma expressão de concentração se formou em seu rosto enquanto ele tentava desvendar o enigma do vazio e do nada. Após alguns instantes de reflexão, ele murmurou para si mesmo.'

             a++;
                break
                case 100:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-"O silêncio que ecoa nos abismos, um vácuo sutil que se esconde nos recantos do universo..". Seria o vazio? A ausência de sombras, rastros e vestígios, algo que não pode ser tangível... O nada? Uma existência que transcende a compreensão humana...'

             a++;
                break
                case 101:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi fechou os olhos por um momento, deixando a mente fluir em busca da resposta oculta no enigma. A sensação de incerteza o envolvia, mas ele estava determinado a decifrar o mistério. Com um suspiro, ele sussurrou:'

             a++;
                break
                case 102:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-"A essência do vazio, a essência do nada…" talvez seja... o Nada em si? A ausência de tudo, o vácuo que permeia o universo... Será essa a resposta?'

             a++;
                break
                case 103:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi abriu os olhos, esperando uma confirmação em seu íntimo. Porém, a incerteza persistia, e ele se deu conta de que o enigma era mais complexo do que parecia. Um sorriso leve se formou em seus lábios, desafiador.'

             a++;
                break
                case 104:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*O vazio e o nada... um enigma que desafia minha compreensão. Talvez a resposta esteja além das palavras, além das definições convencionais. Talvez… se eu não usar nada literalmente… quem saiba funcione?*'

             a++;
                break
                case 105:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Percebendo que não faltava mais nenhum item, Jhon passa a página do livro lentamente para acompanhar o resto das instruções, nesta página além de uma instrução meio confusa, há um círculo mágico com outros pequenos quatro círculos em suas pontas.'

             a++;
                break
                case 106:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Não me diga que… eu vou ter que desenhar isso…? Ehhh… não… por enquanto eu vou ignorar isso. Mas vamos ver, bom, segundo a imagem o pão fica a minha direita, o relógio nas minhas costas, o crucifixo a esquerda e o nada fica na minha frente.. acho que é isso, o que eu devo fazer agora.. "sente-se no epicentro, derrame uma gota de sangue e blá blá blá" tá, entendi eu acho.'

             a++;
                break
                case 107:
                fundo.style.background = 'black';
                dialogo.innerHTML = '"Sente-se no epicentro dos elementos, onde os quatro se encontram em harmonia. Entoando palavras arcanas, derrame um pingo escarlate sobre o solo profano. Que o sangue, veia da vida, se misture ao chão sagrado e invoque as forças ocultas que habitam nas sombras. O eco de suas palavras ressoará nas entranhas do universo, desvendando segredos há muito tempo esquecidos. Que o ritual se inicie e abra os portais para além do véu do desconhecido."'

             a++;
                break
                case 108:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então Jhon se senta com as pernas cruzadas no meio dos quatro objetos e começa a ficar um pouco pensativo.'

             a++;
                break
                case 109:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Bom, no livro pedia uma gota de sangue, não é? Hm, eu não acho que vá funcionar… mas tomara que eu não esteja me metendo em algum tipo de ritual estranho… eu apenas quero… voltar pra casa…*'

             a++;
                break
                case 110:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Jhon, ainda um pouco hesitante e com medo, sente um frio gélido percorre seu corpo dos pés a cabeça, antes de dar uma pequena mordida em seu polegar esperando que saia um pouco de sangue, e então… ele deixa a gota pingar sobre o chão de madeira um pouco desgastado, fazendo o carmesim se misturar com o opaco do chão e da noite, e o cheiro com um leve tom metálico toma conta do ambiente, mas então, ele percebe algo…'

             a++;
                break
                case 111:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-ah, o livro pedia para recitar algo, mas… não falava o que… bem, o que o livro espera que eu fale? Posso simplesmente falar qualquer coisa sombria e estranha? Bom, eu lembro de alguns livros que li no outro mundo, alguns de ficção, outros de misticismo, afinal eu sempre gostei de estudar… acho que vou tentar com alguma frase de algum deles.'

             a++;
                break
                case 112:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Em meio à névoa dos sonhos e além dos véus do tempo, eu invoco os segredos entrelaçados em cada rima. Corvo do vazio, mensageiro dos abismos, conduza-me através dos reinos além da existência.'

             a++;
                break
                case 113:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Com olhos de águia, vejo o oculto e o ocultado, que minhas palavras ecoem na dança cósmica. em línguas ancestrais e sussurros esquecidos, eu clamo por poder, sabedoria e visão além do limite.'

             a++;
                break
                case 114:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Que os antigos totems me guiem por trilhas obscuras, enquanto trago à tona verdades há muito perdidas. No fluxo dos símbolos e dos segredos revelados, eu mergulho no abismo e desvendo o desconhecido.'

             a++;
                break
                case 115:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Assim seja, sob as asas do mistério e da encruzilhada, eu embarco nesta jornada, com fé e coragem entrelaçadas. Que os caminhos se abram e a verdade se revele, em meu íntimo, o poder e o conhecimento se elevem'

             a++;
                break
                case 116:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então Jhon termina de recitar, mas continua concentrado por alguns segundos, esperando algo acontecer, e então… nada aconteceu, deixando apenas o barulho do silêncio e da leve brisa ecoar pela sala, Jhon mantém uma expressão séria, tentando esconder a vergonha que está sentindo após tentar algo tão irrealista.'

             a++;
                break
                case 117:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Sigh… o que mais eu esperava? Enfim, apenas perca de tempo em? Ainda sim, embora eu saiba que isso não iria funcionar… por que eu sinto essa angústia no meu peito…? Heh, acho que eu tinha pelo menos um pingo de esperança nisso em? Que homem hipócrita eu sou… - Jhon então olha para o teto e fecha os olhos tentando esconder a frustração e então sussurra - é mesmo possível voltar?'

             a++;
                break
                case 118:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Após ficar em silêncio por alguns segundos para tentar organizar seus pensamentos, Jhon olha pela janela e percebe o brilho sutil da lua entrar suavemente pela janela, fazendo o perceber que já estava de noite.'

             a++;
                break
                case 119:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-oh, já está tão tarde assim? Nem percebi o tempo passar, que horas são? -Diz Jhon enquanto pega o relógio nas suas costas para olhar as horas, então ele aperta o botão para abrir o relógio, mas o relógio não se abre - Hm? Quebrou? - então o ar começa a ficar gélido e a luz do luar e das lamparinas cada vez mais fina, o quarto começa a ficar escuro e as sombras começam a dançar pelas paredes- E-ei, o que é isso? -Diz Jhon um pouco assustado,apenas pensando que realmente não deveria ter mexido com aquilo,  então um círculo mágico negro idêntico ao do livro formado pelo sangue começa a brilhar, e então a escuridão engole Jhon que tenta se proteger com seus braços, mas some lentamente na escuridão.'

             a++;
                break
                case 120:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Oh, eu já senti isso antes… sim, eu morri de novo não é? Quem diria que existiria magia naquele mundo, teria sido divertido explorar um pouco enquanto procurava como voltar pra casa, ou por que eu fui parar lá.. mas bom, acho que é tarde demais eu presumo…*'

             a++;
                break
                case 121:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Aqui estou eu de novo, envolto pela escuridão, quem sabe eu apareça na terra de repente igual aconteceu antes? Ou talvez eu acorde desse pesadelo? Hahaha, isso seria bom em!*'

             a++;
                break
                case 122:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então após alguns segundos de silêncio uma pequena claridade começa a banhar as Pálpebras de Aoi, então ele sente e que está encostando em algo e começo a abrir os olhos lentamente, ainda um pouco hesitante, mas otimista com a situação, mas seu otimismo logo é apagado pela escuridão e neblina que ele se encontra, um local que não importa a direção se parece sem fim, um chão formado por uma espécie de água negra que reflete a sua expressão de surpresa mas também de frustração, ao seu redor é como a noite banhada pela luz da lua, além da etérea neblina negra espalhada por todo o local'

             a++;
                break
                case 123:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-bom, acho que tô começando a me acostumar com isso… mas aonde eu vim parar dessa vez?'

             a++;
                break
                case 124:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aoi suspira, tentando se adaptar à situação em que se encontra. Ele se levanta lentamente, sentindo o chão frio e úmido sob seus pés. A atmosfera opressiva e a escuridão quase palpável fazem com que ele se sinta desconfortável e inseguro.'

             a++;
                break
                case 125:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Decidido a encontrar uma saída dessa estranha dimensão, Aoi começa a caminhar cautelosamente pela névoa negra, estendendo os braços para sentir qualquer objeto ou parede que possa estar escondida na escuridão. Porém, não importa o quanto ele caminhe, tudo ao seu redor parece ser igualmente vazio e sombrio.'

             a++;
                break
                case 126:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-"Não há nada na vida que esteja ruim, que não possa piorar" naquele outro mundo pelo menos tinha algo… pelo visto esse é o meu destino mesmo, sozinho nesse vazio -Diz Aoi angustiado pela sua escolha -o que eu deveria fazer? Rezar para isso ser um sonho? Sentar e esperar? Sigh, poderia pelo menos ter uma cama aqui, certo?'

             a++;
                break
                case 127:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então de repente no meio da névoa surge uma cama, uma cama do mundo moderno, um grande coxão, uma cabeceira branca como mármore, travesseiros com fronhas cinzas e um cobertor branco, ao ver isso Aoi se sente complexo com o que está acontecendo bem a sua frente.'

             a++;
                break
                case 128:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-minha cama? Como isso veio parar aqui? Talvez eu esteja sonhando mesmo? Um sonho lúcido talvez? Deixa eu ver, eu quero um copo de água - ao dizer isso, um copo de água transparente aparece na mão de Aoi, deixando ele novamente intrigado com a situação.'

             a++;
                break
                case 129:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Então basta eu querer algo que isso irá aparece no meio da névoa? Isso é o meu cérebro tentando arrumar uma maneira de me consolar, ou me compensar pela cena anterior? Embora eu ainda esteja com a aparência do Aoi… -Diz Aoi olhando seu reflexo na água negra no chão.'

             a++;
                break
                case 130:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-bom se for apenas um sonho, não tenho o que fazer além de esperar… talvez eu devesse explorar esse lugar? Quem sabe eu encontre alguém, será que eu consigo voar? - Aoi se perde em pensamentos e perguntas sobre o local estranho até que algo toma conta de sua visão, uma luz branca ao longo da neblina.'

             a++;
                break
                case 131:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-hm? O que é aquilo? Mais alguma loucura da minha cabeça? Acho que não faz mal eu olhar mais de perto, certo? - Diz Aoi enquanto começa a caminhar lentamente em direção ao objeto com um sentimento de curiosidade e atração, a medida que ele se aproximava a luz começava a aumentar, se parecia com uma estrela sozinha no imenso céu negro.'

             a++;
                break
                case 132:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Se parece com uma estrela no céu, não sei o porquê… mas isso me atrai de alguma maneira, curiosidade? Esperança? Medo? Não faço ideia do porquê, mas essa luz me parece linda…* - então a medida que se aproxima, a luz aumenta, até de repente se expandir, e ser a única coisa no seu campo de visão, fazendo Aoi fecha instintivamente seus olhos para não ficar cego.'

             a++;
                break
                case 133:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-o que!??? Droga!'

             a++;
                break
                case 134:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Capital real de Hectrion, casa do Conde Ardenne.'

             a++;
                break
                case 135:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Lady Sophia, uma jovem nobre de 19 anos, estava em seu quarto, se preparando para dormir. Seu longo cabelo loiro estava solto e caía sobre seus ombros enquanto contemplava seu reflexo no espelho. Os olhos azuis brilhavam na luz suave do ambiente, iluminado pelas luzes mágicas  espalhadas pelo cômodo, seu vestido branco e rosa brilhava com a luz do luar que entrava pela grande janela a sua direita.'

             a++;
                break
                case 136:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'O quarto era amplo e luxuoso, com um toque vitoriano na decoração. As paredes eram cobertas com papel de parede floral branco e dourado, e a mobília era de madeira escura e ornamentos intrincados. Na cama de dossel, os lençóis de seda branca e almofadas macias convidavam Sophia para descansar.'

             a++;
                break
                case 137:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Enquanto ela se preparava, sua empregada, Mary, entrou no quarto e perguntou:'

             a++;
                break
                case 138:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Milady, está tudo bem? Posso ajudá-la em algo?'

             a++;
                break
                case 139:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Sophia sorriu gentilmente:'

             a++;
                break
                case 140:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Não, obrigada, Mary. Estou apenas me preparando para dormir.'

             a++;
                break
                 case 141:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'A garota segurava um colar que havia ganhado de seu pai mais cedo. Era um artefato antigo, com um pingente de pedra preciosa rodeado por detalhes em ouro. Ele havia lhe contado que o colar possuía propriedades protetoras e que ela deveria usá-lo sempre que possível.'

             a++;
                break
                 case 142:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Sophia colocou o colar em volta do pescoço e sentiu seu peso reconfortante. Ela olhou novamente para o espelho e suspirou:'

             a++;
                break
                 case 143:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Meu pai sempre foi supersticioso, mas é bom saber que ele se preocupa comigo. \n Mary sorriu e respondeu: \n -Sim, milady. O conde sempre teve o maior cuidado com sua segurança e bem-estar. \n -Sim… -Diz Sophia pensativa'

             a++;
                break
                 case 144:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Obrigado Mary, pode ir descansar agora vou me trocar. \n -Milady não irá precisar de ajuda? \n -ehh… quantos anos você acha que eu tenho? - Diz Sophia fazendo uma expressão que supostamente era para parecer irritada, embora para quem olhe de fora, pareça apenas uma garotinha fazendo birra…'

             a++;
                break
                 case 145:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-fufufu, vou me retirar então milady - diz Mary se curvando respeitosamente e saindo do quarto com um pequeno sorriso, deixando Sophia sozinha em seu quarto. \n Então após Mary sair do quarto, Sophia da um suspiro - Sigh, eu não sou mais uma criança… não se eu quiser mudar o mundo… -Diz Sophia pensativa enquanto olha o colar dourado em forma de olho, e exclama em um tom de desabafo.'

             a++;
                break
                 case 146:
                fundo.style.background = 'black';
                dialogo.innerHTML = ' -Mas para mudar o mundo eu preciso de poder certo? Eu acho que estou melhor que ontem… mas será que apenas isso é o suficiente para trazer a justiça pro mundo? Aqueles nobres todos corrompidos… todas as injustiças que acontecem nessa cidade… pessoas protestando nas ruas, enquanto os nobres estão brincando pelos corredores… bom preciso me trocar para dormir…'

             a++;
                break
                 case 147:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então quando Sophia está pronta para retirar seus apetrechos o colar começa a brilhar, e uma névoa começa a engolir o quarto. \n Sophia, surpresa com o repentino brilho do colar, arregala os olhos e recua alguns passos, observando a escuridão e a névoa que se forma e começa a envolver o quarto lentamente. Seus batimentos cardíacos aceleram, misturando-se com a sensação de excitação e apreensão que toma conta dela.'

             a++;
                break
                 case 148:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-O que está acontecendo? - murmura Sophia, com a voz embargada.'

             a++;
                break
                 case 149:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'A névoa continua a se espalhar, envolvendo-a cada vez mais. Ela tenta dar alguns passos para trás, mas seus pés parecem presos ao chão. Aos poucos, sua visão fica obscurecida pela escuridão, e ela sente como se estivesse sendo puxada para dentro de um portal desconhecido.'

             a++;
                break
                 case 150:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Isso não pode ser real... - sussurra Sophia, lutando contra a sensação de vertigem que a envolve.'

             a++;
                break
                 case 151:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'De repente, o ambiente à sua volta desaparece por completo, e Sophia se encontra imersa em um vácuo de escuridão. Seu corpo parece flutuar no espaço vazio, e ela não tem noção de tempo ou direção. Apenas a névoa misteriosa a envolve, acariciando sua pele como um toque etéreo.'

             a++;
                break
                 case 152:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Enquanto a confusão e o medo se misturam dentro dela, Sophia fecha os olhos e se concentra em respirar profundamente, tentando encontrar uma centelha de calma em meio ao desconhecido. E então, quando menos espera, uma sensação de leveza e paz a envolve.'

             a++;
                break
                 case 153:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Aos poucos, a escuridão começa a se dissipar, revelando um novo cenário à sua frente. Sophia abre os olhos e encontra-se em um mundo diferente, um lugar onírico e surreal, as únicas coisas que ela vê a sua frente é o chão feito de uma água negra, e uma névoa etérea que cobre todo o terreno.'

             a++;
                break
                 case 154:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Waaa... Onde eu estou? - diz Sophia, com um pouco de medo e confusa, mas ainda assim, um pouco maravilhada por conta da situação.'

             a++;
                break
                 case 155:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Okeanos, em alguma  ilha com muitos náufragos, fica perto do encontro do mar de Teros com o Golfo de Avalonia.'

             a++;
                break
                 case 156:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Barulho de passos criados por uma bota marrom,  ecoam pela caverna húmida, o eco é abafado pelo barulho da chuva torrencial que toma conta do ambiente. \n -Segundo o mapa, deveria ser por aqui. \n O homem alto e forte de cabelo marrom usando um coque continua a caminhar adentro da caverna escura, as pequenas poças refletem a sua aparência bárbara e dura, apenas iluminada por um pequeno ponto de luz vindo de um lampião em sua mão.'

             a++;
                break
                 case 157:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-deve estar por aqui… sei que isso não é da minha conta, afinal minha única missão é recuperar o artefato… me pergunto o que eles irão fazer com isso, eu escutei que ele era da era do descobrimento, enfim acho que estou chegando.'

             a++;
                break
                 case 158:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'O homem então começa a encontrar escrituras na parede, elas estão em uma língua antiga na qual ele não consegue reconhecer, alguns pilares começam a surgir e então uma grande pintura encravada em uma pedra surge, a pintura parece ter formas humanóides rastejando pelo chão, e se empilhando umas nas outras tentando pegar um objeto que está no céu, esse objeto está envolto por uma espécie de luz, e a correntes a sua volta. O homem olha por alguns segundos, mas logo após começa a checar o local, e encontra uma passagem secreta que dá em uma espécie de câmara.'

             a++;
                break
                 case 159:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Até que enfim… Finalmente encontrei algo, deve estar por aqui certo? - então ele avista uma caixa de aparência antiga, mas totalmente ornamentada e esculpida delicadamente, os detalhes são incríveis, mais bonitos do que qualquer obra de arte atual, ela estava no canto da parede da Câmara que foi escavada na caverna, dentro da sala não há nada além da caixa, tirando outros entalhes na parede, que embora o quarto seja feito apenas de pedra, passa uma sensação de beleza graças aos entalhes.'

             a++;
                break
                 case 160:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Essas esculturas são bem bonitas, principalmente nessa caixa, eu me pergunto que tipo de inspirações sairiam da escritora Sinclair ao ver isto? Vamos ver o que tem dentro. - diz o homem enquanto tira o pó tentando não danificar a caixa, a tranca parece ter se quebrado, permitindo o homem de abri-la facilmente, e lá está, uma orbe dourada que ainda mantém seu brilho mesmo após milhares de anos, ela transmite um brilho mágico que acalma a alma.'

             a++;
                break
                 case 161:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Deve ser isso certo? Agora que já consegui isso, eu deveria voltar, vai saber se esse lugar tem algum tipo de maldição ou algo do tipo, não tô afim de ficar aqui e testar… - o Homem rapidamente se retirar do quarto, mas antes de sair encara novamente as esculturas na parede, é como se o objeto estivesse chamando por ele.'

             a++;
                break
                 case 162:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Talvez seja outro artefato? Acho que o capitão não ligaria se eu olhasse mais um pouco…'

             a++;
                break
                 case 163:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Então ele começa a se aproximar mais da parede, era como se o objeto encravado no céu estivesse o chamando, então ele começa a Aproximar sua mão, a medida que isso acontece, a escultura começa a soltar um leve brilho negro, e a caverna começa a escurecer, e assim que ele finalmente encosta na parede, é engolido pela escuridão. \n Então o homem começa a lentamente abrir os olhos, de primeiro momento ele não vê nada além de névoa e escuridão, mas ao poucos ele começa a observar melhor a situação, e percebe que foi parar em um local coberto pela escuridão e por uma névoa etérea, o chão é coberto por uma água negra.'

             a++;
                break
                 case 164:
                fundo.style.background = 'black';
                dialogo.innerHTML = '*Onde diabos é esse lugar e como eu vim parar aqui? Será que eu morri? Bom, talvez agora eu reencontre minha esposa…* - mas seus pensamentos duram apenas por alguns segundos, quando percebe que não está sozinho, ele percebe a figura de uma mulher, que passa a imagem de uma figura nobre, seu rosto está coberto pela escuridão, então ele não pode dizer sua idade com clareza, mas seus cabelos dourados chamam a atenção, ela também parece estar um pouco confusa e com medo, o outro parece ser um homem jovem , seu rosto também está coberto pela escuridão, mas sua aura não pode ser escondida, aquele homem em sua frente, com certeza era o anfitrião daquele local.'

             a++;
                break
                 case 165:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Sophia então assustada mas também curiosa, percebe que não está sozinha após observar o local, ela consegue ver mais duas figuras, o primeiro é um homem alto e musculoso com roupas que parecem ser de um marinheiro, e passa a imagem de experiência marítima, ela não pode ver seu rosto pois está coberto pela escuridão. E a outra figura mais a frente, parece ser um homem jovem, seu rosto também está coberto pela névoa, mas passa um ar de misterioso, sua aura também parece englobar toda a escuridão naquele local, então, embora assustada, sua curiosidade falou mais alto, e a fez tomar a iniciativa, então ela se curva educadamente enquanto levanta o seu vestido como uma forma de saudação.'

             a++;
                break
                 case 166:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Boa noite caros cavalheiros, posso perguntar o motivo deste sublime encontro?'

             a++;
                break
                 case 167:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'O homem alto parecia tão confuso quanto ela, mas devolve a saudação - Boa noite senhorita, e senhor… os dois têm sua atenção voltada para o homem jovem, que claramente parece ser o anfitrião da inusitada situação, então ele responde.'

             a++;
                break
                 case 168:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Barulho de livro fechando'

             a++;
                break
                case 169:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Hmm, cansei de escrever por hoje...'

             a++;
                break
                 case 170:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Parece que vocês terão que esperar pelos proximos capitulos... querem alguns spoilers? bom, vamos ver por onde começo...'

             a++;
                break
                 case 171:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Em alguma floresta de Aion, pode se ouvir a voz calma e triste de uma mulher com cabelos rosas...'

             a++;
                break
                 case 172:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-por quanto tempo isso vai continuar... dentre o céu e o inferno onde diabos você se escondeu... mas eu juro que irei te achar, e retirar essa maldição, custe o que custar... ou até alguem finalmente matar este anjo caido...'

             a++;
                break
                 case 173:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Em algum lugar desconhecido...'

             a++;
                break
                 case 174:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Junte-se a nós, voce quer riquezas? talvez poder... ou proprio mundo? diz um homem misterioso acompanhado de um homem e uma mulher, uo homem ao contrario do que se pronuncia, é musculoso e alto, e a mulher possui longos cabelos. '

             a++;
                break
                 case 175:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Então o homem sentado no trono passando uma aura de superioridade responde - ... ...Cachorro imundo... eu ja tenho tudo que você tem a oferecer...'

             a++;
                break
                 case 176:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-cachorro?! exclama o homem - hmph, vamos ver quem é o cachorro aqui...'

             a++;
                break
                 case 177:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Após alguns segundos, os três se encontram no chão'

             a++;
                break
                 case 178:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'é tão notavel a nossa diferença... em frente a mim, a unica coisa que te resta é se curvar...'

             a++;
                break
                 case 179:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Bom agora eu cansei mesmo, adeus...'
                a = 0;
                c = 0;
                b = 0;

             a++;
                break
                 case 180:
                fundo.style.background = 'black';
                dialogo.innerHTML = ''

             a++;
                break
                 case 181:
                fundo.style.background = 'black';
                dialogo.innerHTML = ''

             a++;
                break
                 case 182:
                fundo.style.background = 'black';
                dialogo.innerHTML = ''

             a++;
                break
                 case 183:
                fundo.style.background = 'black';
                dialogo.innerHTML = ''

             a++;
                break


        }


    }

    if (rota === 'rota2' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {


        switch (b) {
              case 1:
                fundo.style.background = 'white';
                dialogo.innerHTML = '-Bom, vamos por aqui... nada então, talvez outro local?'
                a = 39
                rota = 'rota1'
                b++;
                break
                  case 2:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'Então John, mesmo ainda um pouco receoso com o que acabou de acontecer, começa a ler alguns livros da estante para tentar descobrir algo e esperar para ir comprar comida.'
                b++;
                break
            case 3:
                fundo.style.background = 'pink';
                dialogo.innerHTML = '-oh, então estavam aqui, bom não sei como funciona a situação monetária por aqui, então vou levar as que parecem valer menos e uma que parece com um dólar. \n John então vai em direção a porta após encontrar o dinheiro, e de repente tudo começa a escurecer, e John é tomado pelo frio e silêncio da noite.'

                b++;
                break
            case 4:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'Então John acorda assustado deitado na cama de Aoi. \n -Uhh! O que foi isso? (Respiração pesada) foi um pesadelo? Eu caí no sono? \n John então vai até a escrivaninha e abre o relógio para ver as horas, o que o deixa ainda mais confuso.'
                b++;
                break
            case 5:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-o que?  3 da manhã? Eu realmente cai no sono? E o que foi aquele pesadelo estranho? Talvez foi um aviso, ou algo do tipo? Hm… não né… deve ter sido apenas um pesadelo mesmo, acho que vou aproveitar para ler mais alguns livros então.'
                b++;
                break
            case 6:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'Então John, mesmo ainda um pouco receoso com o que acabou de acontecer, começa a ler alguns livros da estante para tentar descobrir algo e esperar para ir comprar comida.'
                b++;
                break
            case 7:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Hm… parece que nesse mundo existem 4 continentes, nós estamos no ano de 1689 d.c na era Taika… d.c? Oh, depois do Caos, parece ter sido um era repleta de guerras e conflitos travados pelas raças deste mundo… segundo esse outro livro existem gigantes, elfos e até deuses? Deuses em? Acho que não importa o mundo eles sempre existirão né? Embora não passem de mitologia, enfim…'
                
                b++;
                break
            case 8:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'John se perde em livros e pensamentos até que novamente o dia começa a amanhecer, mas então John começa a pensar um pouco antes de pegar o dinheiro e sair, relembrando a cena anterior e também a situação que se encontra,  fazendo seu corpo sentir pequenos calafrios.'
                rota = 'rota1'
                a = 41

                b++
                break
            case 9:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Talvez seja isso? Embora eu não ache que faça sentido… não custa tentar né.'
                b++;
                break
            case 10:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'Sem enrolar por que não escrevi essa parte, você morreu'
                rota = 'rota1'
                a = 83;
               
                break
            case 11:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'b9'
                b++;
                break
            case 12:
                fundo.style.background = 'black';
                dialogo.innerHTML = 'b10'

                a = 1;
                b = 1;
                c = 1;

                rota = 'rota1';
                break

        }
    }


    if (rota === 'rota3' && window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {


        switch (c) {
            case 1:
                fundo.style.background = 'pink';
                dialogo.innerHTML = 'bom, não estava aqui, vamos ver o proximo lugar'
                 rota = 'rota1'
                 a = 39;
                c++;
                break
            case 2:
                fundo.style.background = 'red';
                dialogo.innerHTML = 'não fiz! continua andando vai'
                a = 58;
                c++;
                break
            case 3:
                fundo.style.background = 'black';
                dialogo.innerHTML = '-Vida, movimento… talvez a resposta seja algum ser vivo? Mas bom… só tem eu nesse quarto, mas vale arriscar…'
                rota = 'rota1'
                a = 83;
                c++;
                break
            case 4:
                fundo.style.background = 'white';
                dialogo.innerHTML = 'Serio?'
                a = 1;
                b = 1;
                c = 1;

                rota = 'rota1';
                break

        }
    }

    animation();
    
    
}



// mudança de rota

resp1.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if(a === 40 && selected.indexOf(1) != 0 && selected.length === 2){
         rota = 'rota2'
         
         respostas.style.display = 'none';
         fala()
        selected = [];


    }else{
        rota = 'rota1'
        respostas.style.display = 'none';
        
        selected.push(1)
    }
    }
})

resp2.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        rota = 'rota2'
        respostas.style.display = 'none';
        
         selected.push(2)
    }
})
resp3.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        rota = 'rota3'
        respostas.style.display = 'none';
        
         selected.push(3)
    }
})






// animação da fala e pular fala


function animation() {
    if (finish === true) {
        if (window.getComputedStyle(respostas).getPropertyValue('display') === 'none') {
            const titulo = dialogo;
            original = titulo.textContent;
            typeWrite(titulo);
            texto = dialogo.textContent;

            if (twox == false) {
                textvel = 30;
            } else {
                textvel = 10;
            }

        }
    } else {
        timeouts.forEach(time => clearTimeout(time));

        dialogo.innerHTML = original;

        finish = true;
        letras = [];
        
    }

}

// automatico

but.addEventListener('mousedown', (event) => {
    if (event.button === 0) {

        if (auto === false) {
            auto = true;
            automa()
            but.style.backgroundColor = "#4E0000"

        } else {
            auto = false
            but.style.backgroundColor = "#9E0000"
            clearInterval(intervaloAuto);
        }

        
    }
})


function automa() {

    intervaloAuto = setInterval(() => {
        if (window.getComputedStyle(respostas).getPropertyValue('display') === 'none' && finish === true) {
         adicionarFala(dialogo.textContent);
            fala()
        }
    }, 8000);
}


// carregar progresso botão

but3.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if (savein === false) {
            savein = true
            tela.style.display = 'block';
            but3.style.backgroundColor = '#4E0000'
        } else {
            savein = false;
            tela.style.display = 'none';
            but3.style.backgroundColor = '#9E0000'
        }
    }
});

fundo.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if(window.getComputedStyle(tela).getPropertyValue('display') === 'block' && event.target === fundo){
            savein = false;
            tela.style.display = 'none';
            but3.style.backgroundColor = '#9E0000'
        }
    }
});


//animação


function typeWrite(elemento) {
    let texto = dialogo.textContent;
    textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {



        time = setTimeout(function () {
            elemento.innerHTML += letra;

            letras.push(letra)


            if (letras.length >= texto.length) {
                finish = true;
                letras = [];
            } else {
                finish = false;

            }


        }, textvel * i)

        timeouts.push(time);

    });

}

let nomeUsuario;
let usuarios = carregarUsuariosSalvos();

// Função para salvar o progresso no localStorage

formProgresso.addEventListener('submit', (event) => {
    event.preventDefault();
    nomeUsuario = nomeUsuarioInput.value;
    salvarProgresso(nomeUsuario, rota, a, b, c);


    progressoSalvoDiv.textContent = `Progresso salvo para o usuário ${nomeUsuario}`;

});




function salvarProgresso(nomeUsuario, rota, a, b, c) {
    const usuariosSalvos = carregarUsuariosSalvos() || [];
    const dadosSalvos = {
        usuario: nomeUsuario,
        rotas: rota,
        rotaa: a,
        rotab: b,
        rotac: c
    };
    usuariosSalvos.push(dadosSalvos);
    localStorage.setItem('progressoJogo', JSON.stringify(usuariosSalvos));
}







// Função para carregar o progresso salvo do localStorage

function carregarProgresso(nomeUsuario) {
    const usuariosSalvos = carregarUsuariosSalvos();
    if (usuariosSalvos) {
        const usuarioEspecifico = usuariosSalvos.find(usuario => usuario.usuario === nomeUsuario);
        if (usuarioEspecifico) {
            const {
                usuario,
                rotas,
                rotaa,
                rotab,
                rotac
            } = usuarioEspecifico;
            // Faça o que for necessário com os dados do usuário específico
            rota = rotas;
            a = rotaa - 1;
            b = rotab;
            c = rotac;

        
        } else {
            console.log(`Usuário ${nomeUsuario} não encontrado.`);
        }
    } else {
        console.log('Nenhum progresso salvo encontrado.');
    }
}

progressoSalvoDiv.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        const nomeUsuario = event.target.textContent;
        carregarProgresso(nomeUsuario);
        fala();
    }
})



function carregarUsuariosSalvos() {
    const usuariosSalvos = JSON.parse(localStorage.getItem('progressoJogo'));
    if (usuariosSalvos) {
        const usuariosNaoVazios = usuariosSalvos.filter(usuario => usuario && usuario.usuario);
        if (usuariosNaoVazios.length > 0) {
            return usuariosNaoVazios;
        } else {
            console.log('Nenhum progresso salvo encontrado.');
            return [];
        }
    } else {
        console.log('Nenhum progresso salvo encontrado.');
        return [];
    }
}

let usuariosCarregados = false;


but3.addEventListener('mousedown', (event) => {
    if (event.button === 0 && usuariosCarregados === false) {

        usuarios.forEach(usuario => {
            const nomeUsuario = usuario.usuario;
            const usuarioElemento = document.createElement('p');
            usuarioElemento.textContent = nomeUsuario;
            progressoSalvoDiv.appendChild(usuarioElemento);
            console.log(nomeUsuario);
            usuariosCarregados = true;
        })

    }
});


//historico de falas

but4.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if (histo === false) {
            histo = true
            hist.style.display = 'block';
            but4.style.backgroundColor = '#4E0000'
        } else {
            histo = false;
            hist.style.display = 'none';
            but4.style.backgroundColor = '#9E0000'
        }
    }
});

fundo.addEventListener('mousedown', (event) => {
    if (event.button === 0) {
        if(window.getComputedStyle(hist).getPropertyValue('display') === 'block' && event.target != hist){
            histo = false;
            hist.style.display = 'none';
            but4.style.backgroundColor = '#9E0000'
        }
    }
});

function adicionarFala(fala) {
    const falaElemento = document.createElement('p');
    falaElemento.textContent = fala;
    hist.appendChild(falaElemento);
  }