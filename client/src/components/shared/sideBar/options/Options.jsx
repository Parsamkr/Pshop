"use client";
import useSideBarSelectedCat from "@/store/catStores/SideSelectedCat";
import { Accordion, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Priceoption from "./defaults/Priceoption";
import findOptionSlug from "@/utils/optionFuncs/getOption";
import getOptionBySlug from "@/api/options/OptionBySlug";
import { useQuery } from "@tanstack/react-query";
import OptionBtn from "./btn/OptionBtn";
export default function Options() {
  const [slug, setSlug] = useState("");
  const [options, setOptions] = useState([]);

  const {
    data: dataa,
    selectedParent,
    selectedChild,
    selectedLilChild,
  } = useSideBarSelectedCat((state) => ({
    data: state.data,
    selectedParent: state.data.selectedParent.slug,
    selectedChild: state.data.selectedChild,
    selectedLilChild: state.data.selectedLilChild,
  }));

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getOptionBySlug/", slug],
    staleTime: Infinity,
    queryFn: () => {
      if (slug && slug !== "All") {
        return getOptionBySlug(slug);
      } else {
        return [];
      }
    },
  });
  useEffect(() => {
    const slug = findOptionSlug(
      selectedParent,
      selectedChild,
      selectedLilChild
    );
    setSlug(slug);
  }, [dataa]);
  useEffect(() => {
    if (!isLoading && !isError) {
      setOptions(data);
    }
  }, [isLoading, slug]);

  return (
    <Stack dir="rtl">
      <Accordion allowMultiple>
        <Priceoption />
        {options.map((option) => (
          <OptionBtn key={option._id} data={option} />
        ))}
      </Accordion>
    </Stack>
  );
}
