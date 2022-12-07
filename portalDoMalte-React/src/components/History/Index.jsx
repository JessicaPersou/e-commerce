import styles from "./history.module.css";
import About from "../../assets/photoPages/beer.png";
import Tasting from "../../assets/photoPages/tasting.png";
import MyBeer from "../../assets/photoPages/barril.jpg";
import { Titles } from "../Titles/Index";

export function History() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Titles title={"Breve História da Cerveja"} />
        </div>
        <div className={styles.history}>
          <div className={styles.section}>
            <div>
              <img className={styles.bannerTxt} src={About} alt="" />
            </div>
            <div className={styles.txt}>
              <h3 className={styles.title}>NO MUNDO</h3>
              <br />
              <p>
                Para entender um pouco mais sobre essa bebida, que já foi
                considerada sagrada, e cativa as pessoas há tanto tempo. Os
                primeiros registros sobre a fabricação da cerveja artesanal A
                civilização Suméria que habitava a região da Mesopotâmia, hoje
                arredores de Irã, Iraque, Kuwait, Síria, Jordânia; foi
                responsável por enormes descobertas, entre elas a escrita
                cuneiforme, a roda, a domesticação animal e também a cerveja! Os
                registros datam de 6.000 a.c e seu conhecimento impacta até hoje
                na nossa vida, inclusive na cervejeira! Os arqueólogos
                encontraram registros de que a bebida era tão importante e
                valorizada que Ninkasi, que significa “a senhora que enche a
                boca”, se tornou a deusa da fabricação da cerveja e da própria
                cerveja, sendo sua imagem cultuada no meio do seu povo. O “Hino
                a Ninkasi” descreve um pouco sobre o processo de fabricação e
                início da história da cerveja.
              </p>
              <br />
              <h3>CURIOSIDADES</h3>
              <br />
              <p>
                Uma informação curiosa sobre a história da cerveja é que, na
                antiguidade, era muito mais seguro consumir cerveja do que água.
                A água não era tratada e sua qualidade nada confiável. Já a
                cerveja, por causa do álcool que inibia muitas de suas
                impurezas, era bem mais segura para se beber e, por isso, em
                algumas regiões, o consumo de cerveja era bem maior do que água,
                e a bebida tão valorizada que poderia servir como forma de
                pagamento.
              </p>
              <p>
                A importância da cerveja era tanta, que dentro da história da
                cerveja há relatos de pagamento aos arrendatários de escravos
                que trabalharam na construção das grandes pirâmides sob forma de
                cerveja! E que o Faraó Ramsés III ficou conhecido como o Faraó
                Cervejeiro, pois chegou a doar um milhão de litros de cerveja a
                um grupo de sacerdotes.
              </p>
            </div>
          </div>
          <div className={styles.msg}>
            <h2>VARIEDADE DE ESTILOS, INFINIDADE DE SABORES!</h2>
          </div>
          <div className={styles.section}>
            <div className={styles.txt}>
              <h3 className={styles.title}>A CHEGADA NO BRASIL</h3>
              <br />
              <p>
                De acordo com relatos históricos, a cerveja chegou no Brasil na
                época da colonização, mas devido a influência portuguesa, o
                vinho ainda era a bebida mais consumida.
              </p>
              <p>
                Até 1870, com a abertura dos portos beneficiando exclusivamente
                a Inglaterra, a cerveja consumida no Brasil era de origem
                britânica. Já a partir da metade do século, com a vinda dos
                imigrantes, a preferência passou a ser pela cerveja alemã.
              </p>
              <p>
                A produção de cerveja artesanal no Brasil começou tímida. Em
                1830 os imigrantes começaram a produzir cerveja artesanal, mas
                apenas para o consumo da família. A cerveja artesanal no Brasil
                ganhou força no final do século XIX, quando o aumento dos
                impostos inviabilizou a importação da bebida. A partir de então,
                a bebida bastante consumida no país, passou a ser produzida em
                proporções maiores, empregando funcionários e crescendo cada vez
                mais.
              </p>
              <p>
                A competitividade de mercado e busca do consumidor pelo melhor
                preço, forçou a produção de cervejas com menor custo. Isso fez
                com que as grandes indústrias cervejeiras adotassem ingredientes
                de menor custo, influenciando fortemente no gosto da bebida,
                tornando a produção em grande escala e em grandes fábricas,
                deixando em baixa as peculiaridades da cerveja artesanal.
              </p>
              <p>
                A elevação da cerveja artesanal no Brasil foi retomada em 1995,
                com o surgimento da primeira microcervejaria nacional, a gaúcha
                Dado Bier, em um momento em que o Brasil vivia um cenário
                cervejeiro completamente diferente de hoje.
              </p>
            </div>
            <div>
              <img className={styles.bannerTxt} src={Tasting} alt="" />
            </div>
          </div>
          <div className={styles.section}>
            <div>
              <img className={styles.bannerTxt} src={MyBeer} alt="" />
            </div>
            <div className={styles.txt}>
              <h3 className={styles.title}>SOBRE A PRODUÇÃO</h3>
              <br />
              <p>
                Os produtores de cerveja artesanal da antiguidade Durante a
                época do Império Romano e dentro dos limites do Império, a
                bebida mais consumida era o vinho, já que as características
                climáticas favorecem a plantação das uvas. Mas os povos que
                viviam ao norte, conhecidos como “bárbaros”, tinham como
                principal bebida a cerveja. Eram eles os Germanos, Vikings,
                Gauleses, Celtas, Godos entre outros.
              </p>
              <p>
                Os Germanos eram os principais produtores e consumidores de
                cervejas que hoje, generalizando, seriam as atuais Alemanha e
                República Tcheca, e que continuam com esse legado, sendo grandes
                produtores e consumidores de cervejas. Algumas formas de
                produção poderiam variar um pouco, e cada povo tinha a sua
                fórmula mágica de produzir a sua cerveja artesanal. Na história
                da cerveja tem até uma pá de madeira mágica dos vikings A
                história da cerveja dos Vikings também tem a cerveja como bebida
                predileta, e como tradição de família uma receita “secreta”.
              </p>
              <p>
                Eles utilizavam uma pá de madeira para produção de cerveja, pois
                acreditavam que nela estava o segredo de se produzir uma boa
                cerveja. Na verdade essa pá estava cheia de leveduras
                responsáveis pelo processo de fermentação da cerveja, mas como
                eles não tinham esse conhecimento, achavam a “mágica” da cerveja
                dar certo, só era possível se usassem aquela pá de madeira
                específica para a mistura no momento da fervura.
              </p>
              <p>
                A cerveja foi uma descoberta do acaso, e não uma invenção. Os
                homens descobriram que os cereais selvagens eram uma fonte de
                alimento muito rica, e antes de armazenar os grãos, eles
                cozinhavam e depois guardavam os grãos em potes com água, e
                algumas vezes acrescentavam frutos e mel, e foi assim surgiu a
                primeira cerveja. Os processos se modernizaram, e muito se sabe
                sobre todas as etapas da fabricação da cerveja artesanal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
