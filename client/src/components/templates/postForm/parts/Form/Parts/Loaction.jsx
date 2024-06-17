import { Divider, FormLabel, Select, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Map from "@/components/shared/myMap/myMap";
import colors from "@/theme/colors";
export default function Loaction({ setValue }) {
  const [currentLocation, setCurrentLocation] = useState({ lat: 20, lng: 20 });
  const [city, setCity] = useState({
    name: "طهران",
    areas: [
      { name: "دولت", location: { lat: 11, lng: 10 } },
      { name: "طبرسی", location: { lat: 11, lng: 11 } },
      { name: "شمشیر بند", location: { lat: 11, lng: 12 } },
      { name: "زعفرانیه  ", location: { lat: 12, lng: 12 } },
    ],
    location: { lat: 20, lng: 20 },
  });
  const data = [
    {
      name: "ساری",
      areas: [
        { name: "دولت", location: { lat: 11, lng: 10 } },
        { name: "طبرسی", location: { lat: 11, lng: 11 } },
        { name: "شمشیر بند", location: { lat: 11, lng: 12 } },
        { name: "زعفرانیه  ", location: { lat: 12, lng: 12 } },
      ],
      location: { lat: 10, lng: 10 },
    },
    {
      name: "طهران",
      areas: [
        { name: "دولت", location: { lat: 11, lng: 10 } },
        { name: "طبرسی", location: { lat: 11, lng: 11 } },
        { name: "شمشیر بند", location: { lat: 11, lng: 12 } },
        { name: "زعفرانیه  ", location: { lat: 12, lng: 12 } },
      ],
      location: { lat: 20, lng: 20 },
    },
    {
      name: "گیلان",
      areas: [
        { name: "رشت", location: { lat: 11, lng: 10 } },
        { name: "طبرسی", location: { lat: 11, lng: 11 } },
        { name: "شمشیر بند", location: { lat: 11, lng: 12 } },
        { name: "زعفرانیه  ", location: { lat: 12, lng: 12 } },
      ],
      location: { lat: 30, lng: 30 },
    },
  ];
  const handleLocationChange = async (e) => {
    const data = await JSON.parse(e.target.value);
    setCurrentLocation(data);
    setValue("location", data);
  };
  return (
    <Stack pos={"relative"} gap={"5px"}>
      <FormLabel mt={"15px"}>شهر</FormLabel>
      <Select
        onChange={(e) => {
          handleLocationChange(e);
        }}
      >
        {data.map((city) => {
          return (
            <option
              onClick={() => setCity(city)}
              key={city.name}
              value={JSON.stringify(city.location)}
            >
              {city.name}
            </option>
          );
        })}
      </Select>
      <FormLabel mt={"15px"}>محله</FormLabel>
      <Select
        onChange={(e) => handleLocationChange(e)}
        placeholder="انتخاب محله"
      >
        {city.areas.map((area) => {
          return (
            <option
              style={{ color: "red", fontFamily: "iransans" }}
              key={area.name}
              value={JSON.stringify(area.location)}
            >
              {area.name}
            </option>
          );
        })}
      </Select>
      <FormLabel mt={"15px"}>موقعیت مکانی آگهی</FormLabel>
      <Map setValue={setValue} location={currentLocation} />
      <Text
        pl={"10px"}
        color={colors.secondary[700]}
        fontSize={"15px"}
        my={"20px"}
        as={"p"}
      >
        {" "}
        توجه: در صورت هرگونه پرداخت روی آگهی، امکان تغییر محدوده وجود نخواهد
        داشت.
      </Text>
      <Divider borderColor={colors.secondary[600]} />
    </Stack>
  );
}
