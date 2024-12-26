import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Blog.scss";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [])
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const posts = [
    {
      id: 1,
      title: "Sayohatning eng yaxshi yo'nalishlari",
      date: "2024-12-20",
      excerpt: "Sizning sayohatlaringiz dunyodagi eng yaxshi joylar shu yerdan boshlang. Bu erda biz sizga ko'rsatamiz sayohatlaringiz uchun eng yaxshi",
      image: "https://storage.kun.uz/source/10/xOqDxqNsn4ACGVZcFrH-DS8SahL175UT.jpg",
    },
    {
      id: 2,
      title: "Sayohatda nimalar qilish mumkin",
      date: "2024-12-15",
      excerpt: "Tabiat bilan tanishish, Mahalliy taomlarni tatib ko'rish, Adrenalin va sarguzashtli faoliyatlar",
      image: "https://proza.uz/files/default/d38d9ac4-ba93-4c08-b78b-6c4441c93f06",
    },
    {
      id: 3,
      title: "Turizmda yangiliklar va tendentsiyalar",
      date: "2024-12-10",
      excerpt: "Turizm dunyosida nima yangiliklar bor? Bu yilgi eng so'nggi tendentsiyalarni ko'rib chiqamiz",
      image: "https://static.norma.uz/images/190088_6414ddc5aa1baad1ac3451f60c6c.jpg",
    },
  ];

  return (
    <main>
      <section className="blog">
        <div className="container">
          <div className="blog__header" data-aos="fade-up">
            <h1>Bizning Blog</h1>
            <p>Sayohat haqida barcha yangiliklar, tavsiyalar va maqolalar!</p>
          </div>

          <div className="blog__posts">
            {posts.map((post) => (
              <div className="blog__post" key={post.id} data-aos="fade-up">
                <img src={post.image} alt={post.title} className="blog__post-image" />
                <div className="blog__post-info">
                  <h3>{post.title}</h3>
                  <p className="blog__post-date">{post.date}</p>
                  <p className="blog__post-excerpt">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="read-more">Davomini o'qish</a>
                </div>
              </div>
            ))}
          </div>

          <section className="blog__footer" data-aos="zoom-in">
            <p>Sayohatni boshlash uchun blogimizni kuzatib boring!</p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Blog;

