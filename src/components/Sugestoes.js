export default function Sugestoes() {
    const suggestions = [
        { name: "bad.vibes.memes", image: "assets/img/bad.vibes.memes.svg", reason: "Segue você" },
        { name: "chibirdart", image: "assets/img/chibirdart.svg", reason: "Segue você" },
        { name: "razoesparaacreditar", image: "assets/img/razoesparaacreditar.svg", reason: "Novo no Instagram" },
        { name: "adorable_animals", image: "assets/img/adorable_animals.svg", reason: "Segue você" },
        { name: "smallcutecats", image: "assets/img/smallcutecats.svg", reason: "Segue você" }
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {suggestions.map((s) => <Sugestao key={s.name} name={s.name} reason={s.reason} image={s.image} />)}

        </div>
    );
}

function Sugestao(props) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={props.image} alt={props.name} />
                <div className="texto">
                    <div className="nome">{props.name}</div>
                    <div className="razao">{props.reason}</div>
                </div>
            </div>

            <div className="seguir">Seguir</div>
        </div>
    )
}