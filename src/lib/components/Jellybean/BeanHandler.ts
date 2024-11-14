import { writable, type Writable } from "svelte/store";
import { biased_min_max, min_max } from "./helpers";


export type beanMeta = {
    x: number;
    y: number;
    size: number;
    self?: SVGElement
}

/**
 * Handles and stores beans
 */
class BeanHandler {
    _beans: Writable<beanMeta[]>;


    constructor() {
        this._beans = writable([])
    }

    // Reactive
    get beans$() {
        return this._beans;
    }

    // Static
    get beans() {
        let x: beanMeta[] = [];
        this._beans.subscribe((v) => (x=v));
        return x
    }


    addBean(meta: beanMeta) {
        this._beans.update((v) => {
            return [...v, meta]
        })
    }

    // Set
    generateBean() {
        
        const size = biased_min_max(20, 200, 2)
        const x = min_max(0, window.screen.width - size)
        const y = min_max(-size*10, -size)
        const meta = {size, x, y}

        this.addBean(meta)
        return meta
    }

}

export default BeanHandler;