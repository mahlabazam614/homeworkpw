import CarDetailView from "@/app/components/CarDetailView";
import corollaImg from "@/app/components/assets/Corolla.jpg";

export default function CorollaPage() {
  return (
    <CarDetailView
      title="Toyota Corolla 2024"
      price="PKR 59,70,000"
      image={corollaImg}
      doors="4"
      engine="1800 CC"
      condition="8.5 / 10"
      driven="9,500 KM"
      suspension="Soft Suspension"
      avg="13 Km per Ltr"
      transmission="Automatic"
      fuelType="High Octane"
      description="Toyota Corolla 2024 is Pakistan's most popular family sedan featuring dual VVT-i engine efficiency, 9-inch infotainment display, and advanced safety airbags."
    />
  );
}