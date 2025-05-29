import React, { useRef, useState } from "react";
import { useContactUsForm } from "../hooks/useContactUs";
import emailjs from "@emailjs/browser";

const ContactMeFormTemplate = () => {
  const { register, handleSubmit, reset, errors } = useContactUsForm();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: any) => {
    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log(result.text);
      setStatus("success");
      reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="w-full overflow-y-auto mt-7"
    >
      <div className="space-y-3 space-x-3">
        <label className="block text-gray-700 font-medium">Your Name</label>
        <input
          {...register("name")}
          type="text"
          className="w-full px-4 py-2 mt-1 space-x-3 text-slate-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-3">
        <label className="block text-gray-700  font-medium">Your Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-2 mt-1 border text-slate-800  border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-3">
        <label className="block text-gray-700 font-medium">Your Message</label>
        <textarea
          {...register("message")}
          className="w-full px-4 py-2 mt-1 text-slate-800  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="Type your message..."
        ></textarea>
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-[#111935] my-5 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer duration-300"
      >
        Send Message
      </button>
      {status === "success" && (
        <p className="text-green-600">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-600">Something went wrong. Try again.</p>
      )}
    </form>
  );
};
export default ContactMeFormTemplate;
