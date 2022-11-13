import "../Card/card.css";
import Beer from "../../assets/cup-beer.jpeg";

export function Card() {
  return (
    <section className="card">
      <h2>PRINCIPAIS ESTILOS DE CERVEJA ARTESANAL</h2>
      <div className="craft-style">
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>PILSEN</h3>
          <p>{/* Description */}
            O estilo de cerveja artesanal Pilsen ou Pilsner surgiu na República
            Tcheca. Como características marcantes, a bebida apresenta aroma e
            sabor acentuados pelo lúpulo, além da cor dourada. Seu teor
            alcoólico varia entre 4,6% e 5% em média. As mais famosas são a
            cerveja de origem Pilsner Urquell
            <i> primeira Pilsen produzida</i> e a German Pilsner.
          </p>
        </div>
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>LAGER</h3>
          <p>
            A cerveja Lager apresenta baixa fermentação, com ação do levedo em
            baixa temperatura. Trata-se do estilo favorito dos mestres
            cervejeiros alemães e tchecos, com graduação alcoólica que varia
            entre 4,7% e 5,5%. A Brooklyn Lager e a Bierland Vienna estão entre
            as cervejas mais conhecidas.
          </p>
        </div>
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>IPA</h3>
          <p>
            O estilo IPA ou India Pale Ale surgiu na Índia, com os soldados do
            exército britânico, que produziam cerveja com alta concentração de
            lúpulo. Por isso, esse estilo de cerveja apresenta sabor bem amargo,
            além do aroma frutado. Seu percentual alcoólico varia entre 5,5% e
            7,5%. Os estilos IPA mais consumidos do mundo são a American Pale
            Ale e a Imperial IPA.
          </p>
        </div>
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>TRIPEL</h3>
          <p>
            Criada na Bélgica, no Mosteiro Trapista de Westmalle, a cerveja
            Tripel apresenta cor clara, sabor amargo cítrico e aroma frutado.
            Esse estilo de cerveja artesanal é bem carbonatado, o que lhe
            confere uma espuma bastante cremosa. Trata-se de uma cerveja forte,
            com malte acentuado e teor alcoólico em torno de 7,5% e 8,5%.
          </p>
        </div>
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>PORTER</h3>
          <p>
            Criado na Inglaterra, o estilo Porter é um dos mais consumidos por
            ingleses e irlandeses. Sua cor escura vem da torra acentuada do
            malte, que também lhe proporciona aroma e sabor de café ou chocolate
            amargo. A cerveja Brown Porter apresenta menor teor alcoólico; já a
            Baltic Porter tem maior porcentagem de álcool.
          </p>
        </div>
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>STOUT</h3>
          <p>
            A cerveja Stout é mais forte e escura que a Porter. Esse estilo
            apresenta aroma torrado e sabor amargo, que lembra café ou
            chocolate. Sua espuma é cremosa e pode ser clara ou amarronzada. A
            densidade, a coloração, o aroma, o sabor e o teor alcóolico podem
            variar conforme alguns fatores. Seu percentual de álcool chega a 8%
            em média.
          </p>
        </div>
        <div className="box-style">
          <img src={Beer} alt="cup of beer" />
          <h3>WEIZENBIER</h3>
          <p>
            O estilo de cerveja Weizenbier, Weissbier ou Weiss surgiu na região
            Sul da Alemanha, mais especificamente na Baviera. O estilo apresenta
            50% de malte de trigo (no mínimo). Sua cor é clara e opaca, com
            sabor e aroma frutados, lembrando banana e cravo. A bebida é
            refrescante, com teor alcóolico moderado (em torno de 5% a 6%).
          </p>
        </div>
      </div>
    </section>
  );
}
