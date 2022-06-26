import React from "React";

interface ILabelProp {
    domId?:string;
    text: string;
}

const Label = ({ domId, text }: ILabelProp): React.ReactElement => {
    return <label htmlFor={domId}>{text}</label>
}
export default Label;