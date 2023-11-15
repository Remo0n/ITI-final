import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";




import Loader from "./loader";
const libraries = ["places"];

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDiVc9q44WyVI38M2BXSQPc4BQK_p2ge7c",
    libraries: libraries,
  });

  if (!isLoaded) return <Loader />;
  return <Map />;
}
