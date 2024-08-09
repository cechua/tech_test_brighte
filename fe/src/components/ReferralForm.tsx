import { useForm, SubmitHandler, UseFormRegister, Path } from 'react-hook-form';
import { z, ZodType } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
export type IFormInput = {
  givenName: string;
  surName: string;
  email: string;
  phone: string;
  homeName: string;
  street: string;
  suburb: string;
  state: string;
  postCode: string;
  country: string;
};

interface CustomInputProps {
  name: Path<IFormInput>;
  label: string;
  register: UseFormRegister<IFormInput>;
  errorMessage: string;
}

const ReferralFormSchema: ZodType<IFormInput> = z.object({
  givenName: z.string().min(2).max(20),
  surName: z.string().min(2).max(20),
  email: z.string().email('This is not a valid email.'),
  phone: z
    .string()
    .regex(/\d+/, { message: 'Numbers input only' })
    .min(8, { message: 'Must only be 8 digits.' })
    .max(8, { message: 'Must only be 8 digits.' }),
  homeName: z.string().min(1).max(50),
  street: z.string().min(2).max(50),
  suburb: z.string().min(2).max(50),
  state: z.string().min(2).max(50),
  postCode: z.string().min(4).max(9),
  country: z.string().min(2).max(30),
});

const CustomInputField = ({
  name,
  register,
  label,
  errorMessage,
}: CustomInputProps) => {
  return (
    <div className="flex flex-col w-full lg:w-80">
      <label className="text-secondary-text uppercase">{label}</label>
      <input
        {...register(name)}
        className="border border-secondary rounded w-full h-10 text-secondary-text px-2"
      />
      {errorMessage && <p className="text-error">{errorMessage}</p>}
    </div>
  );
};

const ReferralForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>({
    resolver: zodResolver(ReferralFormSchema), // Apply the zodResolver
  });
  const { postUser } = useContext(UserContext);
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    postUser(data);
    reset();
  };

  return (
    <div className="w-full lg:w-[750px] p-4 lg:p-8 bg-white rounded">
      <h1 className="text-3xl font-bold text-primary-text mb-4">
        Referral Builder
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg uppercase text-secondary-text font-bold">
            Personal Details
          </h3>
          <hr className="my-2 h-[1px] border-t-0 bg-secondary" />
          <div className="flex flex-wrap justify-between gap-2">
            <CustomInputField
              name="givenName"
              label="Given Name"
              register={register}
              errorMessage={errors.givenName?.message || ''}
            />
            <CustomInputField
              name="surName"
              label="Surname"
              register={register}
              errorMessage={errors.surName?.message || ''}
            />
            <CustomInputField
              name="email"
              label="Email"
              register={register}
              errorMessage={errors.email?.message || ''}
            />
            <CustomInputField
              name="phone"
              label="Phone"
              register={register}
              errorMessage={errors.phone?.message || ''}
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg uppercase text-secondary-text font-bold">
            Address
          </h3>
          <hr className="my-2 h-[1px] border-t-0 bg-secondary" />
          <div className="flex flex-wrap justify-between gap-2">
            <CustomInputField
              name="homeName"
              label="Home Name or #"
              register={register}
              errorMessage={errors.homeName?.message || ''}
            />
            <CustomInputField
              name="street"
              label="Street"
              register={register}
              errorMessage={errors.street?.message || ''}
            />
            <CustomInputField
              name="suburb"
              label="Suburb"
              register={register}
              errorMessage={errors.suburb?.message || ''}
            />
            <CustomInputField
              name="state"
              label="State"
              register={register}
              errorMessage={errors.state?.message || ''}
            />
            <CustomInputField
              name="postCode"
              label="Postcode"
              register={register}
              errorMessage={errors.postCode?.message || ''}
            />
            <CustomInputField
              name="country"
              label="Country"
              register={register}
              errorMessage={errors.country?.message || ''}
            />
          </div>
        </div>
        <div className="flex justify-between gap-2 sm:gap-4">
          <button
            className="border border-secondary  h-16 uppercase text-secondary-text rounded text-lg font-bold w-full md:w-80"
            type="button"
          >
            Upload Avatar
          </button>
          <button
            className="bg-primary h-16 uppercase text-white rounded text-lg font-bold w-full md:w-80"
            type="submit"
          >
            Create Referral
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReferralForm;
