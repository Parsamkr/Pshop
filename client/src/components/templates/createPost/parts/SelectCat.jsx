"use client";
import React, { useEffect, useState } from "react";
import useSlugtree from "@/store/catStores/slugTree";
import { useSearchParams } from "next/navigation";
import { Stack } from "@chakra-ui/react";
import Catbtn from "../buttons/Catbtn";
import Backbtn from "../buttons/BackBtn";
export default function SelectCat() {
  const searchParams = useSearchParams();
  const pageSlug = searchParams.get("slug");
  const { tree, searchTree } = useSlugtree();
  const [item, setItem] = useState([]);

  useEffect(() => {
    if (pageSlug && tree.children.length) {
      console.log(pageSlug);
      searchTree(tree, pageSlug).then((data) => setItem(data));
    }
  }, [pageSlug, tree]);

  return (
    <Stack>
      {item?.parent?.name && (
        <Backbtn name={item.parent.name} slug={item.parent.slug} />
      )}
      {!pageSlug && (
        <Catbtn name={"مشاهده همه دسته ها "} slug={"root"} icon={"faHome"} />
      )}

      {item?.children ? (
        item.children.map((child) => {
          return (
            <Catbtn
              name={child.name}
              key={child.slug}
              slug={child.slug}
              leaf={child.leaf}
              icon={child.icon ?? false}
            />
          );
        })
      ) : (
        <> </>
      )}
    </Stack>
  );
}
