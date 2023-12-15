import { useRouter } from "next/router";
import React, { createContext, useState } from "react";

interface FilterContextType {
  categoryValue: string;
  handleOnSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleOnSelectChangeFromHamburgerMenu: (text: string) => void;
}

export const FilterContext = createContext<FilterContextType>({
  categoryValue: "",
  handleOnSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => {},
  handleOnSelectChangeFromHamburgerMenu: (text: string) => {},
});

interface Props {
  children: React.ReactNode;
}
const FilterContextConstructor = ({ children }: Props) => {
  const [categoryValue, setCategoryValue] = useState<string>("Најново");
  const router = useRouter();

  const handleOnSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setCategoryValue(selectedValue);

    router.push({
      pathname: "/productPage",
      query: {
        ...router.query,
        sort: selectedValue,
      },
    });
  };

  const handleOnSelectChangeFromHamburgerMenu = (text: string) => {
    setCategoryValue(text);
    router.push({
      pathname: "/productPage",
      query: {
        sort: text,
      },
    });
  };
  return (
    <FilterContext.Provider
      value={{
        categoryValue,
        handleOnSelectChange,
        handleOnSelectChangeFromHamburgerMenu,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextConstructor;
