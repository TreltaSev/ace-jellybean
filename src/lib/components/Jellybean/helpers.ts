import chroma from "chroma-js"

export const min_max = (min: number, max: number) => {
    return Math.random() * (max - min) + min; // Literally stolen from js mdn reference :
}

/**
 * @param min Min Number
 * @param max Max Number
 * @returns Number between these two with a bias
 */
export const biased_min_max = (min: number, max: number, bias: number = 2) => {
    return Math.floor(min + Math.pow(Math.random(), bias) * (max-min))
}

export const beanColorGenerate = () => {
    const vibrants = ["#F95252", "#F9A052", "#F9EB52", "#7EF952", "#52F9C4", "#5273F9", "#C952F9"]
    const col_v = vibrants[Math.floor(Math.random() * vibrants.length)];
    const col_a = chroma.mix(col_v, "white", 0.20).hex()
    const col_l = chroma.mix(col_v, "white", 0.80).hex()
    return [col_v, col_a, col_l]
}

export const beanFade = (node: Element, { duration = 400 }) => {
    const style = getComputedStyle(node);
    const initialY = parseFloat(style.top || "0");
    const initialOpacity = parseFloat(style.opacity || "1")
    const initialRotation = parseFloat(style.transform.replace('rotate(', '').replace('deg)', '') || "0");

    
    return {
        delay: 0,
        duration,
        css: (t: number) => {
            const opacity = initialOpacity + (1 - initialOpacity) * t;
            const top = initialY + 400 * t;
            const topPercentage = (top / screen.height) * 100;
            const rotation = initialRotation + 360 * t;
            return `opacity: ${opacity}; top: ${topPercentage}%; transform: rotate(${rotation}deg)`
        }
    }
}