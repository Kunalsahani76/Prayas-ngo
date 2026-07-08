import VolunteerForm from "@/components/VolunteerForm";
import VolunteerInfo from "@/components/VolunteerInfo";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white pt-[140px] pb-10">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.85fr)]">
          <VolunteerInfo />
          <VolunteerForm />
        </div>
      </div>
    </main>
  );
}
