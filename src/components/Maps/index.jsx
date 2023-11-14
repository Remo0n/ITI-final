import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Loader from "./Loader";


export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <Loader />;
  return <Map />;
}
