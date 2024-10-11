import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label> Name</label>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
        <label> Name</label>
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <label> Name</label>
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
    </form>
create now
   
    </div>
  );
};

export default Register;
