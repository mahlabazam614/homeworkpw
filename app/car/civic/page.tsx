import CarDetailView from "@/app/components/CarDetailView";
import civicImg from "@/app/components/assets/Civic.jpg";

export default function CivicPage() {
  return (
    <CarDetailView
      title="Honda Civic 2024"
      price="PKR 86,60,000"
      image={civicImg}
      doors="4"
      engine="1500 CC Turbo"
      condition="9.5 / 10"
      driven="3,800 KM"
      suspension="Multi-Link Rear Suspension"
      avg="14 Km per Ltr"
      transmission="CVT with Paddle Shifters"
      fuelType="High Octane"
      description="Honda Civic RS Turbo 2024 represents premium sedan excellence with Honda SENSING safety suite, sunroof, ambient lighting, and turbocharged speed."
    />
  );
}
