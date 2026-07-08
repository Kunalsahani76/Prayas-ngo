import VolunteerForm from "@/components/VolunteerForm";
import VolunteerInfo from "@/components/VolunteerInfo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-[140px] pb-10">
      <div className="mx-auto w-full container">
        <div className="grid gap-10  lg:grid-cols-2">
          <VolunteerInfo />
          <VolunteerForm />
        </div>
      </div>
    </main>
  );
}