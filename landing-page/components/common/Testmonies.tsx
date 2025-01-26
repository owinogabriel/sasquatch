import React from "react";

const testimonials = [
  {
    name: "Anisha Li",
    text: "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    photo: "path/to/anisha-photo.jpg",
  },
  {
    name: "Ali Bravo",
    text: "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
    photo: "public/avatar-ali.png",
  },
  {
    name: "Richard Watts",
    text: "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    photo: "path/to/richard-photo.jpg",
  },
  {
    name: "Shanai Gough",
    text: "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    photo: "path/to/shanai-photo.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <img src={testimonial.photo} alt={`${testimonial.name}`} className="testimonial-photo" />
          <h3>{testimonial.name}</h3>
          <p>{testimonial.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
