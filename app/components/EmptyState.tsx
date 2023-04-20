"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No listings match the filter criteria.",
  subtitle = "Try pressing ALT + F4",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div
      className="
    h-[60vh]
    flex
    flex-col
    gap-2
    justify-center
    items-center
  "
    >
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters."
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};
export default EmptyState;
