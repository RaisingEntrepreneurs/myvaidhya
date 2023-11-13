import { useEffect } from "react";
useEffect(() => {
    fetch('http://127.0.0.1:3010/getdocdtls')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data
        setStaffMembers(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);