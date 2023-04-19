import { NextResponse } from "next/server";
import prismaClient from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();

  const {
    title,
    description,
    imgSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    price,
    location,
  } = body;

  const listing = await prismaClient.listing.create({
    data: {
      title,
      description,
      imgSrc,
      category,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing);
}
