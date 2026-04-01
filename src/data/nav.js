const isDevelopment = process.env.NODE_ENV === "development";

export const Home = isDevelopment
    ? "http://localhost:5173/"
    : "https://thatoneprogrammer.uk/";
