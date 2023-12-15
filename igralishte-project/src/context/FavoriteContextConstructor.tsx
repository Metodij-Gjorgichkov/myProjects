import { BasketType, ProductsType } from "@/types/types";
import React, { createContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

export interface ProductsTypeContext {
  favorites: ProductsType[];
  basket: BasketType[];
  handleAddFavorite: (res: ProductsType) => void;
  handleRemoveFavorite: (res: ProductsType) => void;
  handleAddToBasket: (res: BasketType) => void;
  handleProductsDeletion: () => void;
}

export const FavoritesAndBasketContext = createContext<ProductsTypeContext>({
  favorites: [],
  basket: [],
  handleAddFavorite: (res: ProductsType) => {},
  handleRemoveFavorite: (res: ProductsType) => {},
  handleAddToBasket: (res: BasketType) => {},
  handleProductsDeletion: () => {},
});

interface Props {
  children: React.ReactNode;
}

const LS_FAVORITES = "favorites";
const LS_BASKET = "basket";

const FavoriteAndBasketContextConstructor = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<ProductsType[]>(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(LS_FAVORITES)) {
        return JSON.parse(localStorage.getItem(LS_FAVORITES)!);
      }
      return [];
    }
  });
  const [basket, setBasket] = useState<BasketType[]>(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem(LS_BASKET)) {
        return JSON.parse(localStorage.getItem(LS_BASKET)!);
      }
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(LS_FAVORITES, JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem(LS_BASKET, JSON.stringify(basket));
  }, [basket]);

  const handleRemoveFavorite = (res: ProductsType) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== res.id));
  };

  const handleAddFavorite = (res: ProductsType) => {
    setFavorites([...favorites, res]);
  };

  const handleAddToBasket = (res: BasketType) => {
    setBasket([...basket, res]);
  };

  const handleProductsDeletion = () => {
    setBasket([]);
  };

  return (
    <>
      <FavoritesAndBasketContext.Provider
        value={{
          favorites,
          basket,
          handleAddFavorite,
          handleRemoveFavorite,
          handleAddToBasket,
          handleProductsDeletion,
        }}
      >
        {children}
      </FavoritesAndBasketContext.Provider>
    </>
  );
};

export default dynamic(
  () => Promise.resolve(FavoriteAndBasketContextConstructor),
  {
    ssr: false,
  }
);
