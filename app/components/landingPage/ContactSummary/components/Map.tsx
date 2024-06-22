'use client'
import NeshanMap from '@neshan-maps-platform/react-openlayers';
import React, { useEffect, useRef, useState } from 'react'

import type { NeshanMapRef, OlMap, Ol } from "@neshan-maps-platform/react-openlayers"
import Style from 'ol/style/Style';
import { transform } from 'ol/proj';
import { COORDINATE, LIGHT_LOGO } from 'variables';

const defaultProps = {
    center: COORDINATE,
    zoom: 16
};


export const Map = () => {

    const mapRef = useRef<NeshanMapRef | null>(null)

    const [ol, setOl] = useState<Ol>()
    const [olMap, setOlMap] = useState<OlMap>()


    const marker = ({ points }: { points: Array<number> }) => {


        let currentOlMap = mapRef.current?.map

        let currentOl = mapRef.current?.ol


        if (!currentOlMap || !currentOl) return


        currentOlMap.getLayers().forEach(layer => {
            if (layer.get('name') && layer.get('name') == 'marker-layer') {
                currentOlMap?.removeLayer(layer)
            }
        })


        let instance = new currentOl.layer.Vector({
            source: new currentOl.source.Vector({
                features: [
                    new currentOl.Feature({
                        geometry: new currentOl.geom.Point(
                            // defaultProps.center
                            // ol.proj.fromLonLat([51.338097, 35.699739]),
                            currentOl.proj.fromLonLat(points),
                        ),
                        // id: 'marker',
                        type: 'geoMarker',
                    })
                ]
            }),


            style: new Style({
                image: new currentOl.style.Icon({
                    anchor: [0.5, 1],
                    // src:LIGHT_LOGO.src
                    src: "https://icons.iconarchive.com/icons/paomedia/small-n-flat/48/map-marker-icon.png"
                })
                // image: new CircleStyle({
                //     radius: 12,
                //     fill: new Fill({ color: 'white' }),
                //     stroke: new Stroke({
                //         color: 'blue',
                //         width: 5,
                //     }),

                // })

            }),
        })

        instance.set('name', 'marker-layer')

        return currentOlMap?.addLayer(instance)

    }


    const onInit = (ol: Ol, map: OlMap) => {

        try {

            setOl(ol)
            setOlMap(map)

            // map.on('click', function (e: any) {
            //     let point = transform(e.coordinate, 'EPSG:3857', 'EPSG:4326')
            //     marker({ points: point })
            //     // setPoint({ lng: point[0], lat: point[1], isConfirmed: false })
            // });



        } catch (error) {
            // console.log(error)
        }

    }


    useEffect(() => {

        if (mapRef?.current) {
            marker({ points: [defaultProps.center.longitude, defaultProps.center.latitude] })
        }

    }, [mapRef?.current])

    return (
        <div className='rounded overflow-hidden aspect-square lg:aspect-video'>

            <NeshanMap
                mapKey={process.env.NEXT_PUBLIC_NESHAN_TOKEN ?? ''}
                zoom={defaultProps.zoom}
                center={defaultProps.center}
                style={{ width: '100%', height: '100%' }}
                className='relative'
                ref={mapRef}
                onInit={onInit}
            />
        </div>
    )
}
