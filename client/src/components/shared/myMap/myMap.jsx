"use client";
import React, { useRef, useEffect, useState } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { Box, Image } from "@chakra-ui/react";
import MapLoading from "./parts/MapLoading";

export default function Map({ location , setValue }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const initialPlace = { lng: 53.04960486, lat: 36.5667497261 };
  const [zoom] = useState(14);
  maptilersdk.config.apiKey = "fYFLbws1QMtP2uzo6dYz";

  const [loading, setLoading] = useState(true);
  const handleMapDrag = () => {
    const newCenter = map.current.getCenter();
    setValue("location", newCenter);
  };

  const changePos = (destination) => {
    map.current.setCenter(destination);
  };
  useEffect(() => {
    if (map.current) {
      changePos(location);
    }
  }, [location]);
  useEffect(() => {
    if (map.current) {
      return; // stops map from intializing more than once
    }
    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.BASIC,
      center: [initialPlace.lng, initialPlace.lat],
      zoom: zoom,
    });
    map.current.on("moveend", handleMapDrag);
    map.current.on("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <Box dir="ltr" pos={"relative"} boxSize={"500px"}>
      <MapLoading loading={loading} />
      <Box
        ref={mapContainer}
        pos={"relative"}
        top={"0"}
        width={"100%"}
        height={"100%"}
        right={"0"}
        zIndex={1}
      >
        {!loading && (
          <Image
            style={{
              position: "absolute",
              top: "50%",
              zIndex: "1",
              right: "50%",
              transform: "translate(50%,-50%",
            }}
            width={"20px"}
            src="/marker.png"
          />
        )}
      </Box>
    </Box>
  );
}
