import Id from './Id';

export default class Image {
    #id
    #title
    #description
    #url

    /**
   * @param {string} title
   * @param {string} description
   */
    constructor({ title, description }) {
        this.#setTitle(title)
        this.#setDescription(description)
        this.#id = new Id()
    }

    #setTitle(title) {
        if (!title) throw new Error(`The title value is required`)
        if (typeof title !== 'string') throw new Error(`The datatype of title must be a string`)
        this.#title = title
    }

    #setDescription(description) {
        if (!description) throw new Error(`The description value is required`)
        if (typeof description !== 'string') throw new Error(`The datatype of description must be a string`)
        this.#description = description
    }

    /**
    * @param {string} url
    */
    set url(url) {
        if (!url) throw new Error(`The url value is required`)
        if (typeof url !== 'string') throw new Error(`The datatype of url must be a string`)
        this.#url = url
    }

    get id() { return this.#id }
    get title() { return this.#title }
    get description() { return this.#description }
    get url() { return this.#url }

    getImageData() {
        return Object.freeze({
            id: this.#id,
            title: this.#title,
            description: this.#description,
            url: this.#url

        })
    }
}