export function EarlyAcessCard() {
  return (
    <div className="flex flex-col mx-6 py-12 px-6 md:px-9 md:mx-32 lg:mx-60 xl:px-28 mt-32 xl:mx-[17.5rem] bg-primary-testimonials text-center justify-center items-center rounded-xl shadow-2xl z-10 gap-6">
      <h3 className="text-xl xl:text-2xl font-bold font-alt">Get early acess today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you
      </p>

      <form className="flex flex-col xl:flex-row gap-6 md:gap-2 w-full justify-between items-center xl:items-start">
        <div className="w-full xl:w-2/3">
          <input
            className="rounded-3xl w-full xl:w-full px-6 py-4 text-primary-testimonials border-0 valid:border-accent-cyan valid:border-2 invalid:border-accent-red invalid:border-2"
            type="email"
            placeholder="email@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
          />
          <p className="text-xs text-transparent invalid:text-accent-red font-bold text-accent-red text-left pt-2 pl-6">
            Please enter a valid email adress
          </p>
        </div>

        <button
          className="py-4 px-7 font-alt font-bold rounded-3xl bg-accent-blue hover:bg-accent-cyan transition duration-300"
          type="submit"
        >
          Get Started For Free
        </button>
      </form>
    </div>
  );
}
