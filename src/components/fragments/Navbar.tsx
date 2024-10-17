import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { UseTheme } from "@/common/themeProvider";
import { ChevronDown, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { setTheme } = UseTheme();

  const theme = localStorage.getItem("vite-ui-theme");

  return (
    <nav className="font-roboto mx-auto relative z-50">
      <div className="flex justify-center items-center backdrop-blur-xl fixed w-full left-0">
        <div className="container py-2 flex justify-between items-center">
          <h4 className=" text-3xl font-extrabold tracking-tight lg:text-4xl">
            Booren.
          </h4>

          <ul className="flex justify-start items-center w-1/3 gap-4 ">
            <li>
              <Link to={"/"}>
                <Button variant={"ghost"}>Home</Button>
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={"ghost"}
                    className="flex justify-between items-center px-3"
                  >
                    <h4 className="pr-3">ways to sell </h4>
                    <ChevronDown size={15} />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <Link to={"/"}>Sell on social media</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to={"/"}>Sell on your website</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link to={"/"}>
                <Button variant={"ghost"}>Price</Button>
              </Link>
            </li>
          </ul>
          <div className="flex justify-between items-center gap-5">
            <Button variant={"ghost"} size={"lg"}>
              Log in
            </Button>
            <Button variant={"default"} size={"lg"}>
              Sign up for free
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
