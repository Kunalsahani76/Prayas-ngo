import Image from "next/image";

export default function VolunteerInfo() {
  return (
    <div>
      <div className="relative overflow-hidden  rounded-3xl">
        <img
          src="volunteer/volunteer.svg"
          alt="Volunteer"
          
          className="object-cover w-full"
        />
      </div>

      <div className="mt-8 text-[#006C49]">
        <h2 className="text-4xl font-bold leading-tight">
          We are looking for passionate volunteers across India to join Prayas
          Foundation.
        </h2>

        <div className="mt-8">
          <h3 className="font-semibold text-[#006C49] text-xl">If You Believe In:</h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-[#3E6E5E]">
            <li>Making a difference</li>
            <li>Shaping young minds</li>
            <li>Giving back to society</li>
          </ul>
        </div>

        <div className="mt-8 space-y-4 text-[#3E6E5E]">
            <p className="text-[#006C49] font-semibold text-xl">Then this is for you.</p>
          <p>
            We conduct <strong className="text-[#006C49]">life skills sessions for school children</strong>{" "}
            and need more like-minded individuals who are ready to contribute
            with empathy, energy, and purpose.
          </p>

          <p className="font-semibold text-[#006C49]">No Age Bar.</p>

          <p className="text-[#3E6E5E]">Just one requirement.</p>

          <p className="font-bold text-[#006C49]">
            A Young, Open, And Willing Mind To Serve.
          </p>
        </div>
      </div>
    </div>
  );
}