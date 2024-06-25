"use client";
const generateTree = (data) => {
  const tree = [];
  data.forEach((parent) => {
    const node = { slug: parent.slug, name: parent.name, id: parent._id };
    if (parent.icon) {
      node.icon = parent.icon;
      node.image = parent.Image;
    }
    if (parent.children.length) {
      node.leaf = false;
      node.children = generateTree(parent.children); // Recursive call
    }
    if (!parent.children.length) {
      node.children = [];
      node.leaf = true;
    }
    tree.push(node);
  });
  return tree;
};

export default generateTree;
