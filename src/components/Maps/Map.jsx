import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  Circle,
  MarkerClusterer,
  DirectionsRenderer,
} from "@react-google-maps/api";
import Places from "./Places";
import Distance from "./Distance";
import { useParams } from "react-router";
import "../Maps/MapsStyle.css";

import p4 from "../../assets/4.webp";

import { useTranslation } from "react-i18next";

export default function Map() {
  const { t } = useTranslation();

  const params = useParams();

  const options = useMemo(
    () => ({
      mapId: "2d513d4218f0ad24",
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    []
  );
  const [directions, setDirections] = useState();
  const [office, setOffice] = useState();

  const fetchDirections = (house) => {
    const service = new window.google.maps.DirectionsService();
    service.route(
      {
        origin: userLocation,
        destination: {
          lat: house.geometry.location.lat(),
          lng: house.geometry.location.lng(),
        },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };
  const mapRef = useRef();

  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [veterinarians, setVeterinarians] = useState([]);
  const [userLocationMarker, setUserLocationMarker] = useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(userLocation);
    map.fitBounds(bounds);
    mapRef.current = map;
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  // const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
  const center = useMemo(() => ({ lat: 31.2156, lng: 29.9553 }), []);
  const [goToLocationClicked, setGoToLocationClicked] = useState(false);

  const handleGoToLocationClick = () => {
    if (params.lat && params.lng) {
      if (userLocation) {
        const destination = {
          lat: parseFloat(params.lat),
          lng: parseFloat(params.lng),
        };
        fetchDirections({
          geometry: {
            location: new window.google.maps.LatLng(params.lat, params.lng),
          },
        });
        mapRef.current?.panTo(destination);
        setGoToLocationClicked(true);
      }
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setUserLocation({ lat: latitude, lng: longitude });
        setUserLocationMarker({
          position: { lat: latitude, lng: longitude },
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
            scaledSize: new window.google.maps.Size(30, 30),
          },
        });
        map?.panTo({ lat: latitude, lng: longitude, zoom: 8 });
      },
      (error) => {}
    );
  }, [map]);
  useEffect(() => {
    handleGoToLocationClick();
  }, [params, map, userLocation]);

  useEffect(() => {
    if (userLocation && map) {
      const service = new window.google.maps.places.PlacesService(map);

      const request = {
        location: userLocation,
        radius: "5000",
        type: ["veterinary_care"],
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          setVeterinarians(results);
          updateMapBounds(results);
        }
      });
    }
  }, [userLocation, map]);

  const updateMapBounds = (vets) => {
    if (map && userLocation && vets.length > 0) {
      const bounds = new window.google.maps.LatLngBounds();

      bounds.extend(
        new window.google.maps.LatLng(userLocation.lat, userLocation.lng)
      );

      vets.forEach((vet) => {
        bounds.extend(
          new window.google.maps.LatLng(
            vet.geometry.location.lat(),
            vet.geometry.location.lng()
          )
        );
      });

      map.fitBounds(bounds);
    }
  };

  return (
    <div className="mapsection py-5 bg-warning-subtle">
      <div className="container mb-3  mt-3">
        <div className="row ">
          <div className="col-md-3 mb-3 mb-lg-0 ">
            <div className="w-100 map-info">
              <h5>{t("Search For Another Vet")}</h5>
              <Places
                className="w-100"
                setOffice={(position) => {
                  setOffice(position);
                  mapRef.current?.panTo(position);
                }}
              />
              {directions && <Distance leg={directions.routes[0].legs[0]} />}
            </div>
          </div>
          <div className="col-md-9">
            <div className="map">
              <GoogleMap
                mapContainerClassName="map-container"
                center={userLocation || center}
                zoom={6}
                onLoad={onLoad}
                options={options}
                onUnmount={onUnmount}
              >
                {directions && (
                  <DirectionsRenderer
                    directions={directions}
                    options={{
                      polylineOptions: {
                        zIndex: 50,
                        strokeColor: "#1976D2",
                        strokeWeight: 5,
                      },
                    }}
                  />
                )}
                {userLocationMarker && (
                  <>
                    <Marker
                      position={userLocationMarker.position}
                      icon={userLocationMarker.icon}
                    />
                    <Circle
                      center={userLocation}
                      radius={1500}
                      options={closeOptions}
                    />
                    <Circle
                      center={userLocation}
                      radius={3000}
                      options={middleOptions}
                    />
                    <Circle
                      center={userLocation}
                      radius={4500}
                      options={farOptions}
                    />
                  </>
                )}
                {veterinarians.length > 0 && (
                  <MarkerClusterer>
                    {(clusterer) =>
                      veterinarians.map((vet) => (
                        <Marker
                          key={vet.place_id}
                          position={{
                            lat: vet.geometry.location.lat(),
                            lng: vet.geometry.location.lng(),
                          }}
                          label={{
                            text: vet.name,
                            color: "white",
                          }}
                          icon={{
                            url: p4,
                            scaledSize: new window.google.maps.Size(40, 40),
                          }}
                          clusterer={clusterer}
                          onClick={() => {
                            fetchDirections(vet);
                          }}
                        />
                      ))
                    }
                  </MarkerClusterer>
                )}
              </GoogleMap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
