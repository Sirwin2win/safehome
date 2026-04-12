import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[9.0765, 7.3986]}
      zoom={13}
      className="h-[400px] w-full rounded-xl"
    >
      <TileLayer
        attribution='&copy; OpenStreetMap'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[9.0765, 7.3986]}>
        <Popup>Abuja City Center</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;