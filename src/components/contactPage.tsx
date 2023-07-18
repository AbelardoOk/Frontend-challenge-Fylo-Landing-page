export function EarlyAcessCard() {
  return (
    <div className="flex flex-col mx-6 py-12 px-6 md:px-28 mt-32 md:mx-[17.5rem] bg-primary-testimonials text-center justify-center items-center gap-6 rounded-md shadow-2xl">
      <h3 className="text-xl md:text-2xl font-bold font-alt">Get early acess today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you
      </p>

      <form className="flex flex-col md:flex-row gap-6 w-full justify-between items-center md:items-start">
        <div className="w-full md:w-2/3">
          <input
            className="rounded-3xl w-full md:w-full px-6 py-4 text-primary-testimonials border-0 valid:border-accent-cyan valid:border-2 invalid:border-accent-red invalid:border-2"
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
