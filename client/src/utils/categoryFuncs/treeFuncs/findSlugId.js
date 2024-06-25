
const findSlugId = async (tree, slug) => {
  // if (!Array.isArray(tree)) {
  //   throw new TypeError("Expected an array for 'tree', got " + typeof tree);
  // }

  var result = null; // Use a variable to store the result

  tree.children.some((parent) => {
    // Use `some` to allow early exit

    if (parent.slug === slug) {
      result = parent.id;
      return true;
    }
    if (parent.children) {
      // Assuming children are stored in an array `children`
      return parent.children.some((child) => {
        if (child.slug === slug) {
          result = child.id;
          return true;
        }
        if (child.children) {
          // Assuming lilChildren are stored in an array `lilChildren`
          return child.children.some((lilchild) => {
            if (lilchild.slug === slug) {
              result = lilchild.id;
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
  console.log(tree, slug, result);

  return result; // Return the result
};

export default findSlugId;
