import { ChangeEventHandler } from "react";



export interface ScaleRotateMirrorTypes {
  scale?: string;
  rotate?: string;
  mirror?: boolean;

  handleScale: ChangeEventHandler<HTMLInputElement>;
  handleRotate: ChangeEventHandler<HTMLInputElement>;
  handleMirror: ChangeEventHandler<HTMLInputElement>;
}
