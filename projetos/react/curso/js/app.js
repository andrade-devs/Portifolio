
const nome = "mauricio";

const elemento =
    <div className="header">
        <h1>Olá {nome}!</h1>
        <p>Parágrafo</p>
    </div>;

ReactDOM.render(
    elemento,
    document.querySelector("#root")
);

