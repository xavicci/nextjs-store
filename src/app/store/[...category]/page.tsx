import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Categories",
  //   COMO HACER ESTO DINAMICO????????,
};

interface CategoriesProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}

export default function Category(props: CategoriesProps) {
  const { categories } = props.params;
  return <h1>Categoría Dinámica {categories}</h1>;
}
