"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import emailjs from "@emailjs/browser";

type FormData = {
  fullName: string;
  mobile: string;
  email: string;
  skills: string;
};

export default function VolunteerForm() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxSize: 10 * 1024 * 1024,
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const onSubmit = async (data: FormData) => {
    if (!file) {
      alert("Please upload your resume");
      return;
    }

    setLoading(true);

    const message = [
      "Volunteer Application",
      "",
      "To: prayasfoundation2025@gmail.com",
      `Full Name: ${data.fullName}`,
      `Mobile Number: ${data.mobile}`,
      `Email ID: ${data.email}`,
      `Skills: ${data.skills}`,
      `Resume: ${file.name}`,
    ].join("\n");

    if (!form.current) {
      setLoading(false);
      return;
    }

    const setEmailField = (name: string, value: string) => {
      const field = form.current?.elements.namedItem(name);
      if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
        field.value = value;
      }
    };

    setEmailField("first_name", "Volunteer");
    setEmailField("last_name", data.fullName);
    setEmailField("subject", `Volunteer Application - ${data.fullName}`);
    setEmailField("message", message);
    setEmailField("to_email", "prayasfoundation2025@gmail.com");
    setEmailField("resume_name", file.name);

    try {
      await emailjs.sendForm(
        "service_bualwce",
        "template_n5ez9gm",
        form.current,
        "ZUtUsBOL88uEafhla"
      );

      alert("Application submitted successfully!");
      reset();
      setFile(null);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Please try again later.";
      alert("Failed to submit application: " + errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      <h2 className="mb-6 text-[30px] font-bold text-[#006C49]">
        Submit Your Details
      </h2>

      <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-5">
  <input type="hidden" name="first_name" />
  <input type="hidden" name="last_name" />
  <input type="hidden" name="subject" />
  <input type="hidden" name="to_email" />
  <input type="hidden" name="resume_name" />
  <textarea name="message" className="hidden" readOnly />
  {/* Full Name */}
  <div>
    <label
      htmlFor="fullName"
      className="mb-2 block text-sm font-medium text-[#1F2937]"
    >
      Full Name
    </label>

    <input
      id="fullName"
      {...register("fullName", { required: true })}
      required
      placeholder="Enter your full name"
      className="w-full rounded-xl border border-[#BBCABF] bg-[#F8F9FF] p-4 outline-none transition-all focus:border-[#00A554] focus:ring-2 focus:ring-[#00A554]/20"
    />
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    {/* Mobile Number */}
    <div>
      <label
        htmlFor="mobile"
        className="mb-2 block text-sm font-medium text-[#1F2937]"
      >
        Mobile Number
      </label>

      <input
        id="mobile"
        {...register("mobile", { required: true })}
        required
        placeholder="+91 9999999999"
        className="w-full rounded-xl border border-[#BBCABF] bg-[#F8F9FF] p-4 outline-none transition-all focus:border-[#00A554] focus:ring-2 focus:ring-[#00A554]/20"
      />
    </div>

    {/* Email */}
    <div>
      <label
        htmlFor="email"
        className="mb-2 block text-sm font-medium text-[#1F2937]"
      >
        Email ID
      </label>

      <input
        id="email"
        type="email"
        {...register("email", { required: true })}
        required
        placeholder="name@company.com"
        className="w-full rounded-xl border border-[#BBCABF] bg-[#F8F9FF] p-4 outline-none transition-all focus:border-[#00A554] focus:ring-2 focus:ring-[#00A554]/20"
      />
    </div>
  </div>

  {/* Skills */}
  <div>
    <label
      htmlFor="skills"
      className="mb-2 block text-sm font-medium text-[#1F2937]"
    >
      Skills
    </label>

    <textarea
      id="skills"
      {...register("skills", { required: true })}
      required
      rows={4}
      placeholder="e.g. UI Design, Figma, CSS, Project Management"
      className="w-full rounded-xl border border-[#BBCABF] bg-[#F8F9FF] p-4 outline-none transition-all focus:border-[#00A554] focus:ring-2 focus:ring-[#00A554]/20"
    />
  </div>

  {/* Resume Upload */}
  <div>
    <label
      htmlFor="resume"
      className="mb-2 block text-sm font-medium text-[#1F2937]"
    >
      Resume
    </label>

    <div
      {...getRootProps()}
      className="cursor-pointer rounded-2xl border-2 border-dashed border-[#BBCABF] bg-[#F8F9FF] p-10 text-center"
    >
      <input id="resume" {...getInputProps({ name: "resume" })} />

      <div className="mb-5 flex justify-center">
        <img
          src="/volunteer/icon.svg"
          alt="Upload icon"
          className="h-10 w-10"
        />
      </div>

      <p className="text-lg font-semibold text-[#1F2937]">
        Drag and drop your file here
      </p>

      <p className="mt-2 text-gray-500">
        PDF, DOCX up to 10MB
      </p>

      {file && (
        <p className="mt-4 text-sm font-medium text-[#00A554]">
          {file.name}
        </p>
      )}

      <div className="pt-5">
        <span className="inline-flex h-[42px] w-[148px] items-center justify-center rounded-xl border border-[#00A554] font-semibold text-[#006C49]">
          Browse Files
        </span>
      </div>
    </div>
  </div>

  <button
    disabled={loading}
    className="w-full rounded-xl bg-[#00A554] py-4 text-lg font-semibold text-white transition-colors hover:bg-[#008f48] disabled:cursor-not-allowed disabled:opacity-70"
  >
    {loading ? "Submitting..." : "Submit Application"}
  </button>
</form>
    </div>
  );
}
