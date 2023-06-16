import React, { useEffect } from "react";
import "./Blog.css";
import { BsArrowRightShort } from "react-icons/bs";

// Import Images ===========>
import img1 from "../../Assets/image 2.jpg";
import img2 from "../../Assets/image 7.jpg";
import img3 from "../../Assets/image 8.jpg";
import img4 from "../../Assets/image 10.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

// Here also we use the MAP method to display our posts.

const Posts = [
    {
        id: 1,
        postImage: img1,
        title: "Beautiful Morocco, let us travel",
        desc:
            "The kingdom of Morocco is a Muslim country in western North Africa,with coastlines on the Atlantic Ocean and Mediterrannean Sea.",
    },
    {
        id: 2,
        postImage: img2,
        title: "Romantic moments under Eiffel Tower",
        desc:
            "with vast swaths of desert in its east and west and the rich Nile River Valley at its heart, is site to one of the world's earliest and greatest civilisiations.",
    },
    {
        id: 3,
        postImage: img3,
        title: "Let us have an adventure outside Tunisia.",
        desc:
            "Tunisia is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roll the region",
    },
    {
        id: 4,
        postImage: img4,
        title: "Best country in East Africa",
        desc:
            "When Kenya claimed ist independence from the U.K. in 1963, leaders of the newly formed republic promoted a sense of national unity using the motto. ",
    },
];

function Blog() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        className="secTitle"
                    >
                        Our Best BLog?
                    </h2>

                    <p data-aos="fade-up" data-aos-duration="2500">
                        An Insight to the incredibe experience in the world.
                    </p>
                </div>

                <div className="mainContainer grid">
                    {Posts.map(({ id, postImage, title, desc }) => {
                        return (
                            <div
                                data-aos="fade-up"
                                data-aos-duration="2000"
                                className="singlePost grid"
                            >
                                <div className="imgDiv">
                                    <img src={postImage} alt={title} />
                                </div>

                                <div className="postDetails">
                                    <h3
                                        data-aos="fade-up"
                                        data-aos-duration="3000"
                                    >
                                        {title}
                                    </h3>
                                    <p>{desc}</p>
                                </div>

                                <a
                                    href="#"
                                    className="flex"
                                    data-aos="fade-up"
                                    data-aos-duration="4500"
                                >
                                    Read More
                                    <BsArrowRightShort className="icon" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Blog;
