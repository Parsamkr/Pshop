import getOptionBySlug from "@/api/options/OptionBySlug";
import colors from "@/theme/colors";
import { Divider, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BooleanInput from "./parts/BooleanInput";
import StringInput from "./parts/StringInput";
import NumberInput from "./parts/NumberInput";
import SelectInput from "./parts/SelectInput";
export default function DynamicInputs({ pageSlug, register, errors }) {
  const [options, setoptions] = useState([]);
  useEffect(() => {
    const fetchOptions = async () => {
      setoptions(await getOptionBySlug(pageSlug));
    };
    if (options.length <= 0) fetchOptions();
  }, [pageSlug]);
  return (
    <Stack>
      {options.length > 0 && (
        <>
          {options?.map((option) => {
            if (option.enum.length > 0) {
              return <SelectInput key={option.key} data={option} />;
            }
            if (option.type == "boolean") {
              return <BooleanInput key={option.key} data={option} />;
            }
            if (option.type == "string") {
              return <StringInput key={option.key} data={option} />;
            }
            if (option.type == "number") {
              return <NumberInput key={option.key} data={option} />;
            }
          })}
          <Divider borderColor={colors.secondary[600]} />
        </>
      )}
    </Stack>
  );
}
