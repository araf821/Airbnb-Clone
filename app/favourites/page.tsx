import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import EmptyState from "../components/EmptyState";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized."
        subtitle="Please log in to view your favourites."
      />
    );
  }

  const listings = await getFavouriteListings();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favourites found."
        subtitle="Looks like you haven't added any listings to your favourites yet."
      />
    );
  }

  return (
    <div>
      <FavouritesClient listings={listings} currentUser={currentUser} />
    </div>
  );
};

export default FavouritesPage;
