import React, { Component } from 'react'
import { DepthOfFieldSnowfall } from './react-snowflakes';

class SnowFall extends Component {
    render() {
        return (
            <DepthOfFieldSnowfall count={100}
                style={{
                    // Position must be relative or absolute,
                    // because snowflakes are positioned absolutely.
                    position: 'absolute',
                    width: '100vw',
                    height: '100vh'
                }} />
        )
    }
}
export default SnowFall