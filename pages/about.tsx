import React, { useEffect, useState } from "react";

function About() {
  const [name, setName] = useState("");
  useEffect(() => {
    fetch("/api/about")
      .then((r) => r.json())
      .then(({ name }) => {
        setName(name);
      });
  }, []);
  return <div>About,{name}</div>;
}

export default About;
