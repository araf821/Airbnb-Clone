import { SafeReservation, SafeUser } from "../types";

interface ReservationsClientProps {
  reservations: SafeReservation[];
  currentUser: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
  reservations,
  currentUser,
}) => {
  return <div>ReservationsClient</div>;
};
export default ReservationsClient;
