import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";
import Loader from "./loader";
export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDiVc9q44WyVI38M2BXSQPc4BQK_p2ge7c",
    libraries: ["places"],
  });

  if (!isLoaded) return <Loader />;
  return <Map />;
}
