import { useState } from "react";

export default function Posts() {

    const posts = [
        {
            id: 1,
            userName: "meowed",
            userImage: "assets/img/meowed.svg",
            contentImage: "assets/img/gato-telefone.svg",
            likedByImage: "assets/img/respondeai.svg",
            likedByText: "respondeai",
            initialLikesAmount: 101523,
        },
        {
            id: 2,
            userName: "barked",
            userImage: "assets/img/barked.svg",
            contentImage: "assets/img/dog.svg",
            likedByImage: "assets/img/adorable_animals.svg",
            likedByText: "adorable_animals",
            initialLikesAmount: 200541,
        }
    ];

    return (
        <div className="posts">
            {posts.map((p) => (
                <Post
                    key={p.id}
                    userName={p.userName}
                    userImage={p.userImage}
                    contentImage={p.contentImage}
                    likedByImage={p.likedByImage}
                    likedByText={p.likedByText}
                    initialLikesAmount={p.initialLikesAmount}
                />
            ))}
        </div>
    );
}

function Post(props) {
    const [salvo, setSalvo] = useState(false)
    const [curtido, setCurtido] = useState(false)
    const [numeroCutidas, setNumeroCurtidas] = useState(props.initialLikesAmount)
    const [animation, setAnimation] = useState(true)

    function curtir() {
        if (curtido) {
            setNumeroCurtidas(numeroCutidas - 1)
        } else {
            setNumeroCurtidas(numeroCutidas + 1)
        }
        setCurtido(!curtido)
    }

    function curtirPelaImagem() {
        if (!curtido) {
            setNumeroCurtidas(numeroCutidas + 1)
            setCurtido(true)
            
        }

        const animationTimeout = 500;
        setAnimation(false)

        setTimeout(()=>{
            setAnimation(true)
        },animationTimeout)


    }

    return (
        <div className="post" data-test="post">
            <div className="topo">
                <div className="usuario">
                    <img src={props.userImage} alt={props.userName} />
                    {props.userName}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <ion-icon name="heart" class={`animated-heart ${animation ? "invisivel" : "scalep-up"}`}></ion-icon>
                <img
                    onDoubleClick={curtirPelaImagem}
                    data-test="post-image"
                    src={props.contentImage}
                    alt="conteúdo do post"
                />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon
                            class={curtido ? "vermelho" : ""}
                            name={curtido ? "heart" : "heart-outline"}
                            data-test="like-post"
                            onClick={curtir}
                        />

                        <ion-icon name="chatbubble-outline" />
                        <ion-icon name="paper-plane-outline" />
                    </div>
                    <div>
                        <ion-icon
                            name={salvo ? "bookmark" : "bookmark-outline"}
                            data-test="save-post"
                            onClick={() => setSalvo(!salvo)}
                        />
                    </div>
                </div>

                <div className="curtidas">
                    <img src={props.likedByImage} alt={props.likedByText} />
                    <div className="texto">
                        Curtido por <strong>{props.likedByText}</strong> e <strong>outras <span data-test="likes-number">{numeroCutidas}</span> pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}