import React, { useState } from "react";

const AccordionParent = (props) => {
    let [state,setState]=useState(false);
        let display=()=>{
            setState(!state);
        }

  const info = [
    {
      heading: "What is Netflix?",
      content:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more – on thousands of internet-connected devices...",
    },
    {
      heading: "How much does Netflix cost?",
      content:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee...",
    },
    {
      heading: "Where can I watch?",
      content:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web...",
    },
    {
      heading: "How do I cancel?",
      content:
        "Netflix is flexible. There are no annoying contracts and no commitments...",
    },
    {
      heading: "What can I watch on Netflix?",
      content:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, and more...",
    },
    {
      heading: "Is Netflix good for kids?",
      content:
        "The Netflix Kids experience is included in your membership to give parents control...",
    },
  ];

  return (
    <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
      
    </div>
  );

};

export default AccordionParent;
