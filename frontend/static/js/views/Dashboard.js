import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super()
        this.setTitle('Dashboard')
    }

    async getHtml() {
        return `
            <h1>Welcom back, Dom</h1>
            <p>
                Lorem ipsum
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>
            </p>
        `
    }
}