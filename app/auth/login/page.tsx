import Input from "@/components/ui/input";

export default function Page() {
  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen max-h-screen overflow-hidden">
      <div className="flex-1 h-screen hidden md:block">
        <img
          src="/img/login.jpg"
          alt="Login image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-8 flex-1">
        <h1 className="text-2xl font-semibold mb-4 text-center">Login</h1>
        <form
          action="#"
          method="POST"
          className="flex flex-col justify-center items-center gap-5 container-sm"
        >
          <Input id="username" label="username" fullWidth />
          <Input id="password" label="password" fullWidth />

          <button
            type="submit"
            className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-md py-2 px-4 w-full"
          >
            Login
          </button>
        </form>
        <div className="mt-5 text-primary text-center">
          <a href="#" className="hover:underline">
            Sign up Here
          </a>
        </div>
      </div>
    </div>
  );
}
