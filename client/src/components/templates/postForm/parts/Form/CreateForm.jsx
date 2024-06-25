"use client";
import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Stack } from "@chakra-ui/react";
import Loaction from "./parts/Loaction";
import ImageUpload from "./parts/imageUpload/ImageUpload";
import StatickInput from "./parts/StatickInput";
import DynamicInputs from "./parts/dynamicInputs/DynamicInputs";
import { useSearchParams } from "next/navigation";
import SubmitButton from "./parts/SubmitButton";
import PostFormSubmit from "@/utils/postFormSubmit/PostFormSubmit";

import useSlugtree from "@/store/catStores/slugTree";

export default function CreateForm() {
  const { findSlugId, tree } = useSlugtree();
  const pageSlug = useSearchParams().get("slug");

  const form = useForm({
    defaultValues: {
      slugId: false,
      images: [],
      location: { lat: 36.56594513737352, lng: 53.05860328266101 },
    },
  });
  useEffect(() => {
    if (!pageSlug) return;
    const SetSlugId = async () => {
      let slugId = await findSlugId(tree, pageSlug);
      form.setValue("slugId", slugId);
    };
    SetSlugId();
  }, [pageSlug, tree]);
  const onError = (errors, e) => console.log("errors, e", errors, e);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(PostFormSubmit, onError)}>
        <Stack>
          <Loaction />
          <ImageUpload />
          <DynamicInputs pageSlug={pageSlug} />
          <StatickInput />
          <SubmitButton />
        </Stack>
      </form>
    </FormProvider>
  );
}
