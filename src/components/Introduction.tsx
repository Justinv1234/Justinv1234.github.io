export default function Introduction() {
  return (
    <>
      <img
        className="rounded-lg mt-16"
        src="/favicon.ico"
        alt="Justin Veltri img."
        width={175}
        height={175}
      />
      <div className="flex flex-col text-center md:text-left w-11/12">
        <h1 className="text-5xl font-semibold">Hi, Justin here 👋</h1>
        <p className="mt-4 font-light">
          {new Date().getFullYear() - 2005}
          -year-old software engineer studying at Monmouth University
        </p>
        <p className="mt-2 font-light">
          My primary focus is backend development, where I work with Java and
          C++, but I'm always open to exploring other areas of software
          engineering.
        </p>
        <p className="mt-2 font-light">
          I enjoy the challenge of debugging, finding satisfaction in the
          understanding and solving of complex issues.
        </p>
      </div>
    </>
  );
}

/*
        <p className="mt-2 font-light">
          I like to create projects, play video games, and build pretty awesome
          websites. Here, take a look:
        </p>
        */
