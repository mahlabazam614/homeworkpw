import CarDetailView from "@/app/components/CarDetailView";
import altoImg from "@/app/components/assets/Alto.png";

export default function AltoPage() {
  return (
    <CarDetailView
      title="Suzuki Alto 2024"
      price="PKR 23,30,000"
      image={altoImg}
      doors="4"
      engine="660 CC"
      condition="9.0 / 10"
      driven="4,200 KM"
      suspension="McPherson Strut"
      avg="20 Km per Ltr"
      transmission="AGS / Automatic"
      fuelType="Petrol"
      description="Suzuki Alto 2024 is Pakistan's favorite fuel-efficient city hatchback. Compact, easy to park, with impressive fuel mileage of over 20km/L."
    />
  );
}
