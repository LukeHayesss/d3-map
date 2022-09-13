import * as d3 from 'd3';
import { setMapProjection } from '../helpers/setMapProjection';
import { useMapTools } from '../hooks/useMapTools';
import HealthRegion from './HealthRegion';
import './HealthRegionList.css'

export default function HealthRegionList(props) {
    const {mapData} = useMapTools();
    if (!mapData.loading) {
        const path = d3.geoPath().projection(setMapProjection(mapData.data));
        const healthRegions = mapData.data.features.map((data) => {
            const region_name = data.properties["NAME_ENG"];
            return (
                <HealthRegion
                key={data.properties.FID}
                path={path(data)}
                tooltipData={region_name}
                />
            );
        });

return (
    <>
    <h1>Ontario's Health Regions</h1>
    <svg className='map-canvas'>
        <g>{healthRegions}</g>
    </svg>
    </>
   );

    } else {
        return <h1>Loading...</h1>
    }
}