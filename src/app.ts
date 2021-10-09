import express from "express";

const app = express();

app.use(express.json());

app.get("/", (_request, response) => {
    return response.json({ status: "sucess" });
});

app.listen(8080, () => {
    console.log("Server is running.");
});