/* eslint-disable @typescript-eslint/no-unused-vars */

import Matter from "matter-js"

class InteractiveEngine {
    public static HEIGHT: 700;
    public static WIDTH: 200;

    private canvas: HTMLCanvasElement
    private engine: Matter.Engine
    private render: Matter.Render
    private runner: Matter.Runner

    constructor(canvas: HTMLCanvasElement) {

        // Canvas Tag in +page.svelte
        this.canvas = canvas
        
        // Engine
        this.engine = Matter.Engine.create({})

        // Renderer
        this.render = Matter.Render.create({
            engine: this.engine,
            canvas: this.canvas,
            options: {
                width: InteractiveEngine.WIDTH,
                height: InteractiveEngine.HEIGHT,
                background: "#000",
                wireframes: false
            }
        })

        this.runner = Matter.Runner.create()
    }

    start() {
        Matter.Render.run(this.render);
        Matter.Render.run(this.runner, this.engine);
    }
}

export default InteractiveEngine