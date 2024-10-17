import { z } from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useToast } from "@/hooks/use-toast";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useAtom } from "jotai";
import { formLogin } from "@/jotai/atom";

const formSchema = z.object({
  name: z.string().min(3, "minimal 3 caracter").max(50, "maximal 50 caracter"),
  password: z.string().min(8, "minimal 8 caracter"),
});

type FormSchema = z.infer<typeof formSchema>;

const Login = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      password: "",
    },
  });

  const { control, handleSubmit } = form;
  const { toast } = useToast();
  const [login, setLogin] = useAtom(formLogin);

  const onSubmit = (values: FormSchema) => {
    toast({
      title: "announcement",
      description: `user anda ${values.name} || password: ${values.password}`,
    });
    setLogin(false);
  };

  return (
    <section
      className={`${
        !login && "hidden"
      } fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center backdrop-blur-sm`}
    >
      <div
        className="fixed top-0 right-0 left-0 bottom-0"
        onClick={() => setLogin(false)}
      ></div>
      <Card className="w-[380px] z-20">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-2"
            >
              <FormField
                control={control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input placeholder="arran" {...field} />
                    </FormControl>
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
                        type="password"
                        placeholder="*******"
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="mt-4">Login</Button>
            </form>
            <Button className="mt-3 w-full" variant={"outline"}>
              Login with Google
            </Button>
            <p className="parag text-center mt-4">
              Don't have an account?{" "}
              <Link to={"product"} className="hover:underline">
                Sign up
              </Link>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
};

export default Login;
