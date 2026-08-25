import CarDetailView from "@/app/components/CarDetailView";
import cityImg from "@/app/components/assets/City.jpg";

export default function CityPage() {
  return (
    <CarDetailView
      title="Honda City 2024"
      price="PKR 46,50,000"
      image={cityImg}
      doors="4"
      engine="1200 CC"
      condition="9.2 / 10"
      driven="7,100 KM"
      suspension="Comfort Suspension"
      avg="15 Km per Ltr"
      transmission="CVT Automatic"
      fuelType="Petrol"
      description="Honda City 2024 delivers aerodynamic style, superior legroom, touchscreen audio system, push-start ignition, and smooth CVT transmission."
    />
  );
}
