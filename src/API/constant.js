let API = "";

if (process.env.NODE_ENV === "development") {
    API = "http://localhost:5000";
} else if (process.env.NODE_ENV === "production") {
    API = "https://centaur-be.herokuapp.com";
}

export const API_HOST = "https://centaur-be.herokuapp.com";