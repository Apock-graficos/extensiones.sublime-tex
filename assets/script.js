// creamos la clase de nuestro componente
class welcomeComponent extends HTMLElement {
    constructor() {
        // super llama a la clase superior el cual es HTMLElement
        super();
    }
    // connectedCallback: se ejecutara al cargar el componente en el DOM
    connectedCallback() {
        // this hace referencia al propio elemento y con innerHTML creamos la estructura
        this.innerHTML = `
<style>
.welcome ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 15px;
    text-align: center;
    font-size: 1rem;
    position: fixed;
    bottom: 1rem;
    left: 1rem;
}
.welcome a {
    color: inherit;
    text-decoration: none;
}
.welcome div {
    font-size: 0.8rem;
}
</style>
<div class="welcome">
    <h6>APock graficos</h6>
    <ul>
        <li>
            <a target="_black" href="https://www.facebook.com/ApockGraficos/?ref=pages_you_manage">
                <i class="icon-facebook2"></i>
                <div>facebook</div>
            </a>
        </li>
        <li>
            <a target="_black" href="https://twitter.com/ApockGraficos">
            <i class="icon-twitter"></i>
            <div>twitter</div>
            </a>
        </li>
        <li>
            <a target="_black" href="https://www.instagram.com/apockgraficos/">
            <i class="icon-instagram"></i>
            <div>instagram</div>
            </a>
        </li>
        <li>
            <a target="_black" href="https://www.youtube.com/channel/UC15DkMZQ80aoW_Rqk4n2T_w">
            <i class="icon-youtube2"></i>
            <div>youtube</div>
            </a>
        </li>
    </ul>
</div>
        `;
    }
}

// definimos nuestro componente como web componente
// customElements.define: definira la calse como un compoente HTML
// el cual sera el nombre de la etiqueta
window.customElements.define("apock-welcome", welcomeComponent);