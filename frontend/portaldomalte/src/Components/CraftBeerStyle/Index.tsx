import styles from "./craftBeerStyles.module.css";
import Lager from "../../assets/stylesBeer/lager.png";
import Pilsen from "../../assets/stylesBeer/pilsen.png";
import Ipa from "../../assets/stylesBeer/ipa.png";
import Tripel from "../../assets/stylesBeer/tripel.png";
import Porter from "../../assets/stylesBeer/porter.png";
import Stout from "../../assets/stylesBeer/stout.png";
import Weizenbier from "../../assets/stylesBeer/weizenbier.png";
import { ComponentCraftStyle } from "../ComponentCraftStyle/ComponentCraftStyle";
import { Titles } from "../Titles/Index";

export function CraftBeerStyle() {
  return (
    <div className={styles.container}>
      <div className={styles.beerStyle}>
        <Titles title={"Saiba um pouco mais sobre os estilos mais vendidos"} />
        <div className={styles.component}>
          <ComponentCraftStyle
            image={Pilsen}
            title={"PILSEN"}
            description={
              "O estilo de cerveja artesanal Pilsen ou Pilsner surgiu na República Tcheca. Como características marcantes, a bebida apresenta aroma e sabor acentuados pelo lúpulo, além da cor dourada. Seu teor alcoólico varia entre 4,6% e 5% em média. As mais famosas são a cerveja de origem Pilsner Urquell <i> primeira Pilsen produzida</i> e a German Pilsner."
            }
          />
          <ComponentCraftStyle
            image={Lager}
            title={"LAGER"}
            description={
              "A cerveja Lager apresenta baixa fermentação, com ação do levedo em baixa temperatura. Trata-se do estilo favorito dos mestres cervejeiros alemães e tchecos, com graduação alcoólica que varia entre 4,7% e 5,5%. A Brooklyn Lager e a Bierland Vienna estão entre as cervejas mais conhecidas."
            }
          />
          <ComponentCraftStyle
            image={Ipa}
            title={"IPA"}
            description={
              "O estilo de cerveja artesanal Pilsen ou Pilsner surgiu na República Tcheca. Como características marcantes, a bebida apresenta aroma e sabor acentuados pelo lúpulo, além da cor dourada. Seu teor alcoólico varia entre 4,6% e 5% em média. As mais famosas são a cerveja de origem Pilsner Urquell <i> primeira Pilsen produzida</i> e a German Pilsner."
            }
          />
          <ComponentCraftStyle
            image={Tripel}
            title={"TRIPEL"}
            description={
              "Criada na Bélgica, no Mosteiro Trapista de Westmalle, a cerveja Tripel apresenta cor clara, sabor amargo cítrico e aroma frutado. Esse estilo de cerveja artesanal é bem carbonatado, o que lhe confere uma espuma bastante cremosa. Trata-se de uma cerveja forte, com malte acentuado e teor alcoólico em torno de 7,5% e 8,5%."
            }
          />
          <ComponentCraftStyle
            image={Porter}
            title={"PORTER"}
            description={
              "Criado na Inglaterra, o estilo Porter é um dos mais consumidos por ingleses e irlandeses. Sua cor escura vem da torra acentuada do malte, que também lhe proporciona aroma e sabor de café ou chocolate amargo. A cerveja Brown Porter apresenta menor teor alcoólico; já a Baltic Porter tem maior porcentagem de álcool."
            }
          />
          <ComponentCraftStyle
            image={Stout}
            title={"STOUT"}
            description={
              "A cerveja Stout é mais forte e escura que a Porter. Esse estilo apresenta aroma torrado e sabor amargo, que lembra café ou chocolate. Sua espuma é cremosa e pode ser clara ou amarronzada. A densidade, a coloração, o aroma, o sabor e o teor alcóolico podem variar conforme alguns fatores. Seu percentual de álcool chega a 8% em média."
            }
          />
          <ComponentCraftStyle
            image={Weizenbier}
            title={"WEIZENBIER"}
            description={
              "O estilo de cerveja Weizenbier, Weissbier ou Weiss surgiu na região Sul da Alemanha, mais especificamente na Baviera. O estilo apresenta 50% de malte de trigo (no mínimo). Sua cor é clara e opaca, com sabor e aroma frutados, lembrando banana e cravo. A bebida é refrescante, com teor alcóolico moderado (em torno de 5% a 6%)."
            }
          />
        </div>
      </div>
    </div>
  );
}
