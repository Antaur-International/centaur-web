let API = "";

const localhost_url = "http://localhost:5000";
const hosted_url = "https://centaur.onrender.com";

if (process.env.NODE_ENV === "development") {
    API = localhost_url;
} else if (process.env.NODE_ENV === "production") {
    API = hosted_url;
}

export const API_HOST = hosted_url;
