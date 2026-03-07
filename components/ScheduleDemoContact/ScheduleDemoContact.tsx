"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import FormCaptcha from "@/components/FormCaptcha/FormCaptcha";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  phoneNumber: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Please enter a valid phone number.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  captchaToken: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    ? z.string().min(1, "Please complete the CAPTCHA")
    : z.string().optional(),
});

export default function ScheduleDemoContact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      captchaToken: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const json = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/landing/schedule-demo`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: values.firstName,
            last_name: values.lastName,
            phone_number: values.phoneNumber,
            user_email: values.email,
            captcha_token: values.captchaToken,
          }),
        }
      );

      const res = await json.json();

      if (!res.success) {
        throw new Error(res.error);
      }

      form.reset();
      if (res.statusCode === 200) {
        return toast.success(
          "You have already submitted the form. We will reach out soon."
        );
      }

      return toast.success(
        "Thank you for submitting the form. We will reach out soon."
      );
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <div
      id="demo"
      className="flex flex-col items-center justify-center bg-[#7054F0] text-white px-4 sm:px-6 md:px-10 py-10"
    >
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center max-w-2xl mb-8 sm:mb-10 md:mb-12">
        Upgrade your team meetings with AI notes & task management.
      </h1>

      <div className="bg-white text-[#1F1654] rounded-2xl shadow-lg p-5 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md lg:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
          Schedule a Demo
        </h2>
        <p className="bg-[#F1E8FE] text-[#1F1654] p-3 sm:p-4 rounded-md text-sm sm:text-base mb-4">
          We'd be delighted to demo MeetMemo. Fill this form and our team will
          reach out soon.
        </p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Phone Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="captchaToken"
              render={() => (
                <FormItem>
                  <FormControl>
                    <FormCaptcha
                      onVerify={(token) =>
                        form.setValue("captchaToken", token)
                      }
                      onExpire={() => form.setValue("captchaToken", "")}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between">
              <Button
                type="button"
                variant="outline"
                className="bg-[#F1E8FE] text-[#7054F0] hover:bg-[#e0d1fd] hover:text-[#7054F0]"
                onClick={() => form.reset()}
              >
                Cancel
              </Button>
              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                className="bg-[#7054F0] text-white hover:bg-[#5a3bcf]"
              >
                {form.formState.isSubmitting
                  ? "Submitting..."
                  : "Schedule Demo"}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 text-xs sm:text-sm text-[#FFFFFF] mt-6 sm:mt-10 text-center sm:text-left">
        <span>© 2025</span>
        <div className="mt-2 sm:mt-0">
          <a href="#" className="hover:underline block sm:inline">
            Terms
          </a>
          <span className="mx-2 hidden sm:inline">|</span>
          <a href="#" className="hover:underline block sm:inline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}