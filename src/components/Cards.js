import React from 'react'
import Card from './Card';
import image1 from "../assets/bigpraxis.png";
import image2 from "../assets/dile.png";
import image3 from "../assets/rosy.png";

const cards = [
  {
    id: 1,
    title: "Bigpraxis",
    image: image1,
    description:
      "Your virtual teacher for learning and solving your homeworks. Web application for reinforce learning in schools.",
    technologies: "PHP, Javascript, CodeIgniter, jQuery, MySQL",
    url: "http://www.bigpraxis.com",
  },
  {
    id: 2,
    title: "Rosy",
    image: image2,
    description:
      "Mobile application to digitize and organize your photos, documents, videos, stories, and more.",
    technologies: "React Native, Javascript, NodeJS, Postgres",
    url: "http://www.rosy.com",
  },
  {
    id: 3,
    title: "Dile",
    image: image3,
    description:
      "Disruptive Learning Platform. An LMS platform is an online learning space that allows us to create a virtual classroom to teach classes over the Internet ",
    technologies: "Moodle, Javascript, MySQL, PHP",
    url: "http://www.dile.mx",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center h-100 align-items-center">
      <div className="row">
        {cards.map((card) => (
          <div className="col-md-4" key={card.id}>
            <Card
              title={card.title}
              imageSource={card.image}
              url={card.url}
              description={card.description}
              technologies={card.technologies}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards
