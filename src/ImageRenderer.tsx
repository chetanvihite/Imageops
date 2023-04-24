

export interface ImageRendererTypes {
  imageSource: string, 
  selectedColor: string,
  imageStyle?: {},
  topText?: string, 
  bottomText?: string
}

export const ImageRenderer = (props: ImageRendererTypes) => (<>
    <img src={props.imageSource} style={props.imageStyle} />
    <div style={{color: props.selectedColor}} className="topSection">{props.topText}</div>
    <div style={{color: props.selectedColor}} className="bottomSection">{props.bottomText}</div>
  </>
)
  
