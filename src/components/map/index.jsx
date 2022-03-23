import React from 'react';
import * as d3 from 'd3';
import { useD3 } from '../../hooks/use-d3';
import world from '../../data/world.json';

const MapComponent = (props) => {
    const ref = useD3(
        (svg) => {

            const config = {
                speed: 0.002,
                verticalTilt: -23,
                horizontalTilt: 0
            }
            const projection = d3.geoOrthographic();
            const geoPath = d3.geoPath().projection(projection);

            drawGlobe();
            enableRotation();

            function drawGlobe() {

                svg.selectAll(".countries")
                    .data(world.features)
                    .enter().append("path")
                    .attr("class", "countries")
                    .attr("d", geoPath)
                    .attr("id", (d) => d.id);
            }

            function enableRotation() {
                d3.timer(function (elapsed) {
                    projection.rotate([config.speed * elapsed - 120, config.verticalTilt, config.horizontalTilt]);
                    svg.selectAll("path").attr("d", geoPath);
                });
            }
            props.locations.map((location, key) => {
                return d3.select(".world-map").select(`#${location.iso}`).attr("class", "countries we-are-here");
            });

        },
        [props.locations.length]
    );

    return (
        <svg
            className="world-map"
            viewBox="225 0 510 500"
            ref={ref}
        />
    );
}

export default MapComponent;