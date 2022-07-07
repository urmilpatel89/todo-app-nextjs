import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="About Web tutorials nextjs" />
        <meta name="keywords" content="HTML, CSS, JavaScript, Nextjs" />
        <meta name="author" content="Urmil Patel" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>

      <div style={{ textAlign: "center" }}>
        <h1>About page</h1>
      </div>
    </>
  );
};
export default About;
