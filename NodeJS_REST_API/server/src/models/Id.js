import { v4 as uuidv4 } from 'uuid'

export default class Id {
    /**
    * @return {uuidv4} 
    */

    constructor() {

    }

    getNewId() {
        return uuidv4()
    }
} 