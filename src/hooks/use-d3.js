import React from 'react';
import * as d3 from 'd3';

export const useD3 = (renderMap, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderMap(d3.select(ref.current));
        return () => { };
    }, [renderMap, dependencies]);
    return ref;
}