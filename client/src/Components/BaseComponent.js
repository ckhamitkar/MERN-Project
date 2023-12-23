import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SearchCourse from "./SearchCourse";
import Courses from "./Courses";
import data from "../Data/courses.json";
import api from "../Api/api";
export default BaseComponent;

const BaseComponent = () => {
    const [state, setState] = useState({
        courses: [],
        search_string: "",
        loaded: false,
    });

    useEffect(() => 
    {
        setState((prevState) => {
                return { ...prevState, courses:  data, loaded: true };
            });
    }, []);

    const handleSearchStringUpdate = (searchString) => {
        setState((prevState) => {
            return { ...prevState, search_string: searchString };
        });
    };

    return (
        <Container>
            <SearchCourse
                search_string={state.search_string}
                searchStringUpdated={handleSearchStringUpdate}
            />
            <Courses
                courses_data={state.courses}
                loaded_from_db={state.loaded}
                search_string={state.search_string}
            />
        </Container>
    );
}

const fetchData = async () => {
    try {
        const res = await api.get('/loadAllCourses'); 
        console.log(res.data);
        if (res.data.length > 0) {
            setState((prevState) => {
                return { ...prevState, courses: res.data, loaded: true };
            });
        } 
        else
            setState((prevState) => {
            return { ...prevState, loaded: true };
        });
    } 
    catch (error) {
        console.log("Error : " + error);
        setState((prevState) => {
            return { ...prevState, loaded: true };
        });
    }        
}
const handleSearchStringUpdate = (searchString) => {
        setState((prevState) => {
            return { ...prevState, search_string: searchString };
        });
    };

    return (
        <Container>
            <SearchCourse
                search_string={state.search_string}
                searchStringUpdated={handleSearchStringUpdate}
            />
            <Courses
                courses_data={state.courses}
                loaded_from_db={state.loaded}
                search_string={state.search_string}
            />
        </Container>
    );
