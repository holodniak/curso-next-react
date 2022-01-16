import Navegador from "../components/Navegador";
export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador destino="/estiloso" texto="estiloso" cor="red" />
      <Navegador destino="/jsx" texto="JSX" />
      <Navegador destino="/navegacao" texto="Navegação #01" cor="green" />
      <Navegador destino="/cliente/sp-2/123" texto="Navegação #02" cor="blue" />
      <Navegador destino="/estado" texto="componente com Estado" cor="pink" />
      <Navegador
        destino="/integracao"
        texto="Integração com API #01"
        cor="yellow"
      />
    </div>
  );
}
