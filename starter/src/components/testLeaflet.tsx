import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from "react-leaflet"
import React, { useState } from "react"

const DraggableMap: React.FC = () => {
    const [markerPosition, setMarkerPosition] = useState([51.505, -0.09]);

    const handleDragEnd = () => {
        // Get the updated marker position after dragging
        const newPosition = e.target.getLatLng();
        setMarkerPosition([newPosition.lat, newPosition.lng]);
    };

    return (
        <MapContainer center={markerPosition} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {/* Draggable Marker */}
            <Marker
                position={markerPosition}
                draggable={true}
                eventHandlers={{
                    dragend: handleDragEnd,
                }}
            >
                <Popup>Marker</Popup>
            </Marker>
        </MapContainer>
    );
};

export default DraggableMap;
