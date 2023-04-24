
export interface TransformTypes {
    scale?: string;
    rotate?: string;
    mirror?: boolean;
}
export const useRecalculateTransform = () => {
    
    const transform = (props: TransformTypes) => {
        const style = { transform: '' };
        if (props.scale) {
            style.transform = `scale(${props.scale})`;
        }
        if (props.rotate) {
            style.transform += ` rotate(${props.rotate}deg)`;
        }
        if (props.mirror) {
            style.transform += ` scaleX(-1)`;
        }
        return style;
    }
    return [transform];
};
