import { ChangeEventHandler } from "react";


export interface InputTypes {
  value?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  style?: {}
}
export interface InputCheckboxTypes extends InputTypes {
  checked: boolean;
}
export const RenderText = (props: InputTypes) => (
  <input type="text" value={props.value} onChange={props.onChangeHandler} style={props.style} />
);

export const RenderCheckbox = (props: InputCheckboxTypes) => (
  <input type="checkbox" checked={props.checked} onChange={props.onChangeHandler} />
);

export const RenderColorInput = (props: InputTypes) => (
  <input type="color" value={props.value} onChange={props.onChangeHandler} />
)

