"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { SafeUser } from "../types";

interface HeartButtonProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  listingId,
  currentUser,
}) => {
  const previouslyFavorite = false;
  const toggleFavorite = () => {};

  return (
    <div
      onClick={toggleFavorite}
      className="relative hover:opacity-80 transition cursor-pointer"
    >
      <AiOutlineHeart
        size={28}
        className="fill-black absolute -top-[2px] -right-[2px]"
      />
      <AiFillHeart
        size={24}
        className={previouslyFavorite ? "fill-rose-500" : "fill-neutral-500/60 hover:opacity-40"}
      />
    </div>
  );
};

export default HeartButton;
