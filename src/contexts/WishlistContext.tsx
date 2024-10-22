import React, { createContext, useState, useContext, useEffect } from 'react';

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productName: string) => void;
  removeFromWishlist: (productName: string) => void;
  isInWishlist: (productName: string) => boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (productName: string) => {
    setWishlist((prev) => {
      if (!prev.includes(productName)) {
        return [...prev, productName];
      }
      return prev;
    });
  };

  const removeFromWishlist = (productName: string) => {
    setWishlist((prev) => prev.filter((name) => name !== productName));
  };

  const isInWishlist = (productName: string) => {
    return wishlist.includes(productName);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, isInWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};