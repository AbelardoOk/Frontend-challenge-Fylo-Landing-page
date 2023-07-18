export function EarlyAcessCard() {
  return (
    <div className="flex flex-col mx-6 py-12 px-6 md:px-28 mt-32 md:mx-[17.5rem] bg-primary-testimonials text-center justify-center items-center gap-6 rounded-md shadow-2xl">
      <h3 className="text-xl md:text-2xl font-bold font-alt">Get early acess today</h3>
      <p>
        It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions,
        our support team would be happy to help you
      </p>

      <div className="flex flex-col md:flex-row gap-6 w-full justify-between">
        <input
          className="rounded-3xl px-6 md:w-2/3 w-full py-4"
          type="text"
          name=""
          id=""
          placeholder="email@example.com"
        />
        <button className="py-4 px-7 font-alt font-bold rounded-3xl bg-accent-blue hover:bg-accent-cyan">
          Get Started For Free
        </button>
      </div>
    </div>
  );
}
