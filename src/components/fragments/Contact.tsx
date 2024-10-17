import { Building2, Headset, MapPinned } from "lucide-react";
import { Button } from "../ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "minimal 3 character" })
    .max(50, { message: "maximal 50 character" }),
  lastName: z
    .string()
    .min(3, { message: "minimal 3 character" })
    .max(50, { message: "maximal 50 character" }),
  email: z.string().email({ message: "masukkan email" }),
  phone: z
    .string()
    .min(7, { message: "min 7 caracter" })
    .max(30, { message: "maximal 20 caracter" }),
  message: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
});

type FormSchema = z.infer<typeof formSchema>;

const Contact = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
      lastName: "",
      phone: "",
      message: "",
    },
  });

  const { handleSubmit, control } = form;
  const { toast } = useToast();

  const onSubmit = (values: FormSchema) => {
    const { firstName, lastName, email, phone, message } = values;

    toast({
      title: "username",
      description: `your ${firstName} ${lastName}`,
    });

    console.log({
      email,
      phone,
      message,
    });
  };

  return (
    <section className="bg-background py-8 lg:py-8">
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center gap-8">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            Contact Us
          </h1>
          <p className="lead">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>
        <div className="pt-8 grid lg:grid-cols-[65%_35%] w-full h-full">
          {/* form */}
          <div className="">
            <h1 className="pb-8">Still need help?</h1>
            <Form {...form}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid lg:grid-cols-2 h-full gap-4"
              >
                <FormField
                  control={control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Bonnie" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="green" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="example@gmail.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>phone</FormLabel>
                      <FormControl>
                        <Input
                          type="text"
                          placeholder="+00 000 000 00 00"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className="sm:col-span-2 h-full">
                  <FormField
                    control={control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            className="resize-none h-40"
                            placeholder="message"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <p className="parag col-span-2">
                  By submitting this form you agree to our terms and conditions
                  and our privacy policy which explains how we may collect, use
                  and disclose your personal information including to third
                  parties.
                </p>
                <div className="pl-8">
                  <Button type="submit" className="w-2/3">
                    submit
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          {/* information contact */}
          <div className="flex justify-center items-center flex-col gap-8">
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center h-16 w-16 rounded-md bg-primary mb-4">
                <Building2 size={32} />
              </div>
              <h3>Company information:</h3>
              <p className="parag flex flex-col items-center">
                <span>Themesberg LLC </span>
                <span>Tax id: USXXXXXX</span>
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center h-16 w-16 rounded-md bg-primary mb-4">
                <MapPinned size={32} />
              </div>
              <h3>Address:</h3>
              <p className="parag flex flex-col items-center">
                <span>SILVER LAKE, United States 1941 Late Avenue</span>
                <span>Zip Code/Postal code:03875</span>
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <div className="flex justify-center items-center h-16 w-16 rounded-md bg-primary mb-4">
                <Headset size={32} />
              </div>
              <h3>Call us:</h3>
              <p className="parag flex flex-col items-center">
                <span>Call us to speak to a member of our team. We are</span>
                <span>always happy to help.</span>
              </p>
              <Button variant={"link"}>+90 501 008 76 07</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
