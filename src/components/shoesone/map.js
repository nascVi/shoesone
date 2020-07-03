import React from 'react'
import GoogleMapReact from 'google-map-react'

const defaultProps = {
    center: {
        lat: 14.6160647,
        lng: -61.1038119,
    },
    zoom: 12,
}

// Map sort key

const AnyReactComponent = ({ text }) => <div>{text}</div>

const GoogleMap = () => (
    <div style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDz-HxkhZJ9OxNXShsBZ04avYnOKjC6x40' }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <AnyReactComponent
                lat={14.6160647}
                lng={61.0587804}
                text={'Shoesone972'}
            />
        </GoogleMapReact>
    </div>
)

export default GoogleMap
