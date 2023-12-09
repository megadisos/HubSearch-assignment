import { useForm } from "react-hook-form"
import { ILoginForm } from "../../modules/Login";




function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginForm>();
    const onSubmit = (data: ILoginForm) => console.log(data);
  return (
   <div className=" border-2 w-full flex  flex-col h-full justify-center items-center">
    <h1 className="text-xl mb-2 font-bold">Log In</h1>
   <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 w-2/4 self-center ">
      <input  {...register("username",{ required: true }) }  className="block flex-1 border-2 bg-transparent py-1.5 pl-1   text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Username"/>
      {/* errors will return when field validation fails  */}
      {errors.username && <span>This field is required</span>}

      <input  {...register("password",{ required: true }) }  className="block flex-1 border-2 bg-transparent py-1.5 pl-1   text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type='password' placeholder="Password"/>
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}
      
      <button type="submit" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >Log In</button>
    </form>
    </div>
  );
}

export default LoginForm;
