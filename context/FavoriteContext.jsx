"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Ambil data favorite dari localStorage saat pertama kali aplikasi dibuka
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");

    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }

    setIsHydrated(true);
  }, []);

  // Simpan favorite ke localStorage setelah data selesai dibaca
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites, isHydrated]);

  const toggleFavorite = (user) => {
    setFavorites((currentFavorites) => {
      const alreadyFavorite = currentFavorites.some(
        (favorite) => favorite.id === user.id
      );

      if (alreadyFavorite) {
        return currentFavorites.filter(
          (favorite) => favorite.id !== user.id
        );
      }

      return [...currentFavorites, user];
    });
  };

  const isFavorite = (userId) => {
    return favorites.some((favorite) => favorite.id === userId);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoriteContext);
}