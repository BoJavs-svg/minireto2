import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/DropdownContainer.css";

function DropdownContainer() {
    useEffect(() => {
        fetch("/sushi")
            .then(res => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
    }, []);
    const [data, setData] = useState(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('/addSushi/' + event.target.getAttribute("sushi_id"))
        .then(response => {})
        .catch(error => {
          console.log(error);
          // handle errors if needed
        });
    };
}