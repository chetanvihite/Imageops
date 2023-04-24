

import { ScaleRotateMirrorTypes } from "./ScaleRotateMirrorTypes"
import { RenderText } from "./RenderComponents"

export const ScaleRotateMirror = (props: ScaleRotateMirrorTypes) => {
  return (<>
    <div className="input-group">
      <label>Scale(sx, sy): </label>
      <RenderText value={props.scale} onChangeHandler={props.handleScale} />
    </div>
    <div className="input-group">
      <label>Rotate: </label>
      <RenderText value={props.rotate} onChangeHandler={props.handleRotate} />
    </div>
    <div className="input-group">
      <label>Mirror: </label>
      <input type="checkbox" checked={props.mirror} onChange={props.handleMirror} />
    </div> 
    </>
  )
}
