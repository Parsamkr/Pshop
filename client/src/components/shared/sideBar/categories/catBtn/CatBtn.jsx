"use client";
import useSideBarSelectedCat from "@/store/catStores/SideSelectedCat";
import colors from "@/theme/colors";
import findIcon from "@/utils/categoryFuncs/findIcon";
import { Flex, Stack, Text, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import catDataBuilder from "@/utils/categoryFuncs/catDataBuilder";
import CatChildBtn from "./catChildBtn";
export default function CatBtn({ data }) {
  const { parent, childrens } = data;
  const [selected, setselected] = useState(false);

  const { selectedParent, selectedChild, changeCat } = useSideBarSelectedCat(
    (state) => ({
      selectedParent: state.data.selectedParent,
      selectedChild: state.data.selectedChild,
      changeCat: state.changeCat,
    })
  );
  useEffect(() => {
    setselected(false);
    if (selectedParent.slug == parent.slug) {
      setselected(true);
    }
  }, [selectedParent, changeCat]);
  const handleClick = (action, parent = "", child = "", lilchild = "") => {
    const data = catDataBuilder();
    switch (action) {
      case "all":
        changeCat(data.changeParent("All"));
        return;
      case "parent":
        changeCat(data.createSelectedCat(parent, "All"));
        return;
      default:
        break;
    }
  };
  return (
    <Stack>
      {selected && (
        <Flex
          cursor={"pointer"}
          as={Link}
          href={"/"}
          color={colors.secondary[800]}
          _hover={{ color: "black", gap: "5px", transition: ".5s" }}
          transition={".5s"}
          gap={"10px"}
          onClick={() => handleClick("all")}
          alignItems={"center"}
        >
          <Icon as={ArrowForwardIcon}> </Icon>
          <Text fontSize={"13px"}> همه اگهی ها </Text>
        </Flex>
      )}
      {(selectedParent.slug == "All" || selected) && (
        <Flex
          alignItems={"center"}
          onClick={() => handleClick("parent", parent.slug)}
          gap={"10px"}
          cursor={"pointer"}
          fontSize={"16px"}
          color={colors.secondary[800]}
          my={"3px"}
          transition={".5s"}
          _hover={{
            color: colors.secondary[900],
            transition: ".5s",
            gap: "13px",
          }}
          variant={"link"}
          as={Link}
          href={`/${parent.slug}`}
        >
          <FontAwesomeIcon
            fontSize={"17px"}
            icon={findIcon(parent.icon)}
          ></FontAwesomeIcon>
          <Text fontWeight={selected ? 700 : 400}>{parent.name}</Text>
        </Flex>
      )}

      {selected &&
        childrens.map((child) => {
          return (
            <CatChildBtn parent={parent.slug} key={child.slug} data={child} />
          );
        })}
    </Stack>
  );
}
