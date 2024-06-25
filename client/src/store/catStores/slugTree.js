import sideSlugSearch from "@/utils/categoryFuncs/treeFuncs/sideSlugSearch";
import searchInTree from "@/utils/categoryFuncs/treeFuncs/searchInTree";
import { create } from "zustand";
import findSlugId from "@/utils/categoryFuncs/treeFuncs/findSlugId";
const initialState = {
  tree: { name: "همه اگهی ها", slug: "root", children: [], leaf: false },
};
const useSlugtree = create((set) => ({
  ...initialState,
  setTree: (newTree) =>
    set((state) => {
      return { tree: { ...state.tree, children: newTree } };
    }),
  searchTree: async (tree, slug) => {
    return searchInTree(tree, slug);
  },
  findSlugId: async (tree, slug) => {
    return findSlugId(tree, slug);
  },

  sideSearchSlug: async (tree, slug) => {
    return sideSlugSearch(tree, slug);
  },
}));

export default useSlugtree;
