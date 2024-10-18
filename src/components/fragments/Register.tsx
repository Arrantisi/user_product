import { useAtom } from "jotai";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { formRegister } from "@/jotai/atom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useToast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  email: z.string().email("harus email"),
  password: z
    .string()
    .min(8, "minimal 8 caracter")
    .max(100, "maximal 100 caracter"),
  confirmPassword: z
    .string()
    .min(8, "minimal 8 caracter")
    .max(100, "maximal 100 caracter"),
});

type FormScema = z.infer<typeof formSchema>;

const Register = () => {
  const [register, setRegister] = useAtom(formRegister);
  const { toast } = useToast();

  const form = useForm<FormScema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { handleSubmit, control } = form;

  const onSubmit = (values: FormScema) => {
    const { email, password, confirmPassword } = values;

    console.log({ confirmPassword });

    toast({
      title: "register",
      description: `email: ${email} || password: ${password}`,
    });

    setRegister(false );
  };

  return (
    <section
      className={`${
        !register && "hidden"
      } fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-sm`}
    >
      <div
        className="fixed top-0 right-0 left-0 bottom-0"
        onClick={() => setRegister(false)}
      ></div>
      <Card className="z-20 w-[400px]">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mb-4">
              <FormField
                control={control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="example@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="********"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="confirmPassword"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="********"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <Button type="submit" className="w-full mt-2">
                Register
              </Button>
            </form>
          </Form>
          <Button variant={"outline"} className="w-full">
            Login With Google
          </Button>
          <CardDescription className="parag text-center mt-2">
            Don't have an account?{" "}
            <span className="hover:underline cursor-pointer">Sign up</span>
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
};

export default Register;
