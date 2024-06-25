"use client";
import { Stack, Text, Skeleton } from "@chakra-ui/react";
import CatBtn from "./catBtn/CatBtn";
import concatPandC from "@/utils/categoryFuncs/concatPandC";
export default function Categories() {
  const { data: concatedData, isLoading } = concatPandC();

  return (
    <Stack dir="rtl" mb={"10px"}>
      <Text my={5} fontWeight={"700"} fontSize={"12px"}>
        دسته ها
      </Text>
      {isLoading && <MockedCategories />}
      {concatedData?.map((cat) => (
        <CatBtn key={cat.parent.slug} data={cat} />
      ))}
    </Stack>
  );
}

const MockedCategories = () => {
  return (
    <Stack>
      <Skeleton p={4} height="20px" />
      <Skeleton p={4} height="20px" />
      <Skeleton p={4} height="20px" />
    </Stack>
  );
};
