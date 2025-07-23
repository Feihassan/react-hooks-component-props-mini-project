// components/About.jsx
function About({ image = "https://via.placeholder.com/215", about = "This is my blog" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
