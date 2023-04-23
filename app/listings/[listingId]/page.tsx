import getListingByID from "@/app/actions/getListingById";
import EmptyState from "@/app/components/EmptyState";

interface IParams {
  listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const listing = await getListingByID(params);

  if (!listing) {
    return <EmptyState />;
  }

  return <div>{listing?.title}</div>;
};
export default ListingPage;
