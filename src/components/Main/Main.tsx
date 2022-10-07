import "../../styles/main.css";
import Banner from "../../assets/craft-beer.jpg"; //image banner
import About from "../../assets/beer.png"; //image woman beer
import BackgroundAbout from "../../assets/pexels-photo.jpeg"; // image background main

export function Main() {
  return (
    <main>
      <section className="banner">
        <img width="100%" max-height="50vh" src={Banner} alt="Banner Image" />
      </section>
      <h2>CERVEJA ARTESANAL NO BRASIL</h2>
      <section className="section">
        <div className="image">
          <img src={About} alt="image woman beer" />
        </div>
        <div className="text">
          <h3>Breve História</h3>
          <p>
            De acordo com relatos históricos, a cerveja chegou no Brasil na
            época da colonização, mas devido a influência portuguesa, o vinho
            ainda era a bebida mais consumida.
          </p>
          <p>
            Até 1870, com a abertura dos portos beneficiando exclusivamente a
            Inglaterra, a cerveja consumida no Brasil era de origem britânica.
            Já a partir da metade do século, com a vinda dos imigrantes, a
            preferência passou a ser pela cerveja alemã.
          </p>
          <p>
            A produção de cerveja artesanal no Brasil começou tímida. Em 1830 os
            imigrantes começaram a produzir cerveja artesanal, mas apenas para o
            consumo da família.
          </p>
          <p>
            A cerveja artesanal no Brasil ganhou força no final do século XIX,
            quando o aumento dos impostos inviabilizou a importação da bebida. A
            partir de então, a bebida bastante consumida no país, passou a ser
            produzida em proporções maiores, empregando funcionários e crescendo
            cada vez mais.
          </p>
          <p>
            A competitividade de mercado e busca do consumidor pelo melhor
            preço, forçou a produção de cervejas com menor custo. Isso fez com
            que as grandes indústrias cervejeiras adotassem ingredientes de
            menor custo, influenciando fortemente no gosto da bebida, tornando a
            produção em grande escala e em grandes fábricas, deixando em baixa
            as peculiaridades da cerveja artesanal.
          </p>
          <p>
            A elevação da cerveja artesanal no Brasil foi retomada em 1995, com
            o surgimento da primeira microcervejaria nacional, a gaúcha Dado
            Bier, em um momento em que o Brasil vivia um cenário cervejeiro
            completamente diferente de hoje.
          </p>
        </div>
      </section>
    </main>
  );
}
