import SVG from 'react-inlinesvg';

const IconComponent = (props) => {
    return (
        <SVG src={props.icon} />
    )
}

export default IconComponent;