"use client";

import { useState } from "react";

const routes = [
  "splash",
  "home",
  "experiences",
  "calculate-fees",
  "about-us",
  "contact-us",
] as const;

type Route = (typeof routes)[number];
type BookingField =
  | "firstName"
  | "surname"
  | "email"
  | "phone"
  | "guests"
  | "date";

type Booking = Record<BookingField, string>;
type Package = {
  id: string;
  name: string;
  price: number;
  image: string;
  detail: string;
};

function money(value: number) {
  return new Intl.NumberFormat("en-ZA", {
    style: "currency",
    currency: "ZAR",
  }).format(value);
}

const packages: Package[] = [
  {
    id: "sunset-safari",
    name: "Sunset Safari",
    price: 1200,
    image: "/images/sunset-safari.jpg",
    detail: "A guided safari experience with sunset views.",
  },
  {
    id: "wine-country",
    name: "Wine Country",
    price: 950,
    image: "/images/wine-country.jpg",
    detail: "A premium tasting experience in the countryside.",
  },
  {
    id: "adventure-day",
    name: "Adventure Day",
    price: 1500,
    image: "/images/adventure-day.jpg",
    detail: "An action-packed day of outdoor activities.",
  },
];

function App() {
  const [activeRoute, setActiveRoute] = useState<Route>("splash");
  const [booking, setBooking] = useState<Booking>({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    guests: "1",
    date: "",
  });
  const [selectedPackages, setSelectedPackages] = useState<string[]>([]);

  const guestCount = Math.max(0, Number(booking.guests) || 0);
  const subtotal = packages
    .filter((item) => selectedPackages.includes(item.id))
    .reduce((sum, item) => sum + item.price * guestCount, 0);

  const discount = guestCount >= 5 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  // The component renders the site's sections and booking form here.
}