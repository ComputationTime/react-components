import { useState } from "react";
import Element from "./element";

function Elements() {
  const [employees, setEmployees] = useState([
    {
      name: "event",
      description: "Description of event goes here",
      img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imgalt: "code",
    },
    {
      name: "event",
      description: "Description of event goes here",
      img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imgalt: "code",
    },
    {
      name: "event",
      description: "Description of event goes here",
      img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imgalt: "code",
    },
    {
      name: "event",
      description: "Description of event goes here",
      img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imgalt: "code",
    },
    {
      name: "event",
      description:
        "If a description is too long then it gets cut off. So make sure not to talk too much here.",
      img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      imgalt: "code",
    },
  ]);
  return (
    <div className="flex justify-center">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
        {employees.map((e) => {
          return (
            <Element
              name={e.name}
              description={e.description}
              img={e.img}
              imgalt={e.imgalt}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Elements;
