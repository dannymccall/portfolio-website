import z from "zod";
import { contactUsSchema } from "../lib/definitions";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type ContactUsFormSchema = z.infer<typeof contactUsSchema>;
export const useContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactUsFormSchema>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });


  return {register, handleSubmit, errors, reset}
};
