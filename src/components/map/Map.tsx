import Leaflet from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ certificateStatus }: any) => {
  const markerIcon = Leaflet.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill=${
      certificateStatus == "Sudah"
        ? "#008000"
        : certificateStatus == "Belum & tidak sengketa"
        ? "#FFFF00"
        : "#FF0000"
    } d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></path></svg>`,
  });

  return (
    <MapContainer
      center={[-6.31097, 106.832513]}
      zoom={13}
      scrollWheelZoom={true}
      touchZoom
      style={{ height: "300px", width: "380px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-6.31097, 106.832513]} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
