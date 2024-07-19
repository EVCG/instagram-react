import { useState } from "react";

export default function Usuario(props) {
    const [nomeUsuario, setNomeUsuario] = useState(props.name)
    const [imagemPerfil, setImagemPerfil] = useState(props.image)

    function trocarNome() {
        const novoNome = prompt("Qual é o novo nome de usuário?")
        if (novoNome !== null && novoNome !== undefined && novoNome !== "") {
            setNomeUsuario(novoNome)
        }
    }

    function trocarImagem() {
        const novaFoto = prompt("Qual é o novo nome de usuário?")
        if (novaFoto !== null && novaFoto !== undefined && novaFoto !== "") {
            setImagemPerfil(novaFoto)
        }
    }

    return (
        <div className="usuario">
            <ion-icon name = "heart" className = "animated-heart"></ion-icon>
            <img onDoubleClick={trocarImagem} src={imagemPerfil} alt="imagem de perfil" data-test="profile-image" />
            <div className="texto">
                <span>
                    <strong data-test="name">{nomeUsuario}</strong>
                    <ion-icon onClick={trocarNome} name="pencil" data-test="edit-name"></ion-icon>
                </span>
            </div>
        </div>
    );
}