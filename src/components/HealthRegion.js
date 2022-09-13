import {
    handleMouseOver,
    handleMouseOut,
    handleMouseMove
} from '../helpers/handleTooltip';

import './HealthRegion.css';

export default function HealthRegion(props) {
    const { path, tooltipData} = props;

    return (
        <path
        className='path'
        d={path}
        onMouseOver={() => {
            handleMouseOver(tooltipData);
        }}
        onMouseOut={handleMouseOut}
        onMouseMove={(event) => {
            handleMouseMove(event);
        }}
      />
    )
}