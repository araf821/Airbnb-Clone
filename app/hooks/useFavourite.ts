import axios from "axios";
import { toast } from "react-hot-toast";

import useLoginModal from "./useLoginModal";
import { SafeUser } from "../types";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";

interface useFavouriteProps {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavourite = ({ listingId, currentUser }: useFavouriteProps) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const previouslyFavourite = useMemo(() => {
    const favouriteIds = currentUser?.favouriteIds || [];

    return listingId.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      if (!currentUser) {
        return loginModal.onOpen();
      }

      try {
        let request;

        if (previouslyFavourite) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success("Success!");
      } catch (error) {
        toast.error("Something went wrong.");
      }
    },
    [ ]
  );
};
export default useFavourite;
