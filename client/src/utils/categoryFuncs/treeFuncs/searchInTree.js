const searchInTree = (tree, slug) => {
  // if (!Array.isArray(tree)) {
  //   throw new TypeError("Expected an array for 'tree', got " + typeof tree);
  // }

  var result = null; // Use a variable to store the result

  if (slug == "root") {
    result = {
      name: tree.name,
      parent: "",
      slug: tree.slug,
      children: tree.children.map((item) => ({
        name: item.name,
        slug: item.slug,
        icon: item.icon,
        leaf: item.leaf,
      })),
    };
  } else {
    tree.children.some((parent) => {
      // Use `some` to allow early exit
      let data = {
        name: "",
        parent: "",
        slug: "",
        children: [],
        image: "",
      };

      if (parent.slug === slug) {
        data.name = parent.name;
        data.slug = parent.slug;
        data.image = parent.image;
        data.parent = { name: tree.name, slug: tree.slug };
        if (parent.children) {
          data.children = parent.children.map((item) => ({
            name: item.name,
            slug: item.slug,
            leaf: item.leaf,
          }));
        }
        result = data;
        return true;
      }
      if (parent.children) {
        // Assuming children are stored in an array `children`
        return parent.children.some((child) => {
          if (child.slug === slug) {
            data.name = child.name;
            data.slug = child.slug;
            data.image = parent.image;
            data.parent = { name: parent.name, slug: parent.slug };
            if (child.children) {
              data.children = child?.children.map((item) => ({
                name: item.name,
                slug: item.slug,
                leaf: item.leaf,
              }));
            }
            result = data;
            return true;
          }
          if (child.children) {
            // Assuming lilChildren are stored in an array `lilChildren`
            return child.children.some((lilchild) => {
              if (lilchild.slug === slug) {
                data.name = lilchild.name;
                data.slug = lilchild.slug;
                data.image = parent.image;
                data.parent = { name: child.name, slug: child.slug };
                if (lilchild.children) {
                  data.children = lilchild?.children.map((item) => ({
                    name: item.name,
                    slug: item.slug,
                    leaf: item.leaf,
                  }));
                }
                result = data;
                return true;
              }
              return false;
            });
          }
          return false;
        });
      }
      return false;
    });
  }

  return result; // Return the result
};

export default searchInTree;
