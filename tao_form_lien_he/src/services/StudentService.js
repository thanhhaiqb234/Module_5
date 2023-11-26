import { logDOM } from "@testing-library/react";
import axios from "axios";

export const getAll = async () => {

    try {
        let res = await axios.get("http://localhost:8080/students");
        console.log(res.data);
        return res.data;
    } catch (e) {
        return undefined;
    }
};

export const saveStudent = async (student) => {
    console.log(student);

    await axios.post("https://localhost:8080/students", student);

}