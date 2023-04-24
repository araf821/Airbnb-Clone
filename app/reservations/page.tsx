import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationsClient from "./ReservationsClient";

const ReservationsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <EmptyState
        title="Unauthorized"
        subtitle="Please login to view this page."
      />
    );
  }

  const reservations = await getReservations({
    authorId: currentUser.id,
  });

  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No reservations found."
        subtitle="Looks like no one has created any reservations on your listings."
      />
    );
  }

  return (
    <div>
      <ReservationsClient
        reservations={reservations}
        currentUser={currentUser}
      />
    </div>
  );
};
export default ReservationsPage;
