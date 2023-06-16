import React, { useEffect } from "react";
import { v4 } from "uuid"; /*-----> To make unique keys while traversing through list in MAP method........ */
import "./Popular.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

// Import the Images...............
import img1 from "../../Assets/machu_pichu.jpg";
import img2 from "../../Assets/guanajuato_2.jpg";
import img3 from "../../Assets/angkor_wat.jpg";
import img4 from "../../Assets/taj_mahal_2.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

// So now we are going to use a high array method to display all the destination using Map.To do so we need to list all the destination in one array "Data" and later we shall call each destiantion by index/id.

const Data = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: "Machu Pichu",
        location: "Peru",
        grade: "CULTURAL RELAX",
    },

    {
        id: 2,
        imgSrc: img2,
        destTitle: "Guanajuato",
        location: "Mexico",
        grade: "CULTURAL RELAX",
    },

    {
        id: 3,
        imgSrc: img3,
        destTitle: "Angkor Wat",
        location: "Cambodia",
        grade: "CULTURAL RELAX",
    },

    {
        id: 4,
        imgSrc: img4,
        destTitle: "Taj Mahal",
        location: "India",
        grade: "CULTURAL RELAX",
    },
];

const Popular = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="popular section container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div
                        data-aos="fade-right"
                        data-aos-duration="2500"
                        className="textDiv"
                    >
                        <h2 className="secTitle">Popular Destination</h2>
                        <p>
                            From Historical cities to natural spectaculars, come
                            see the best of the world!
                        </p>
                    </div>

                    <div
                        data-aos="fade-left"
                        data-aos-duration="2500"
                        className="iconsDiv flex"
                    >
                        <BsArrowLeftShort className="icon leftIcon" />
                        <BsArrowRightShort className="icon" />
                    </div>
                </div>

                <div className="mainContent grid">
                    {Data.map(({ id, imgSrc, destTitle, location, grade }) => {
                        return (
                            <div
                                data-aos="fade-up"
                                className="singleDestination"
                                key={v4()}
                            >
                                <div className="destImage">
                                    <img src={imgSrc} alt="Image title" />
                                    <div className="overlayInfo">
                                        <h3>{destTitle}</h3>
                                        <p>{location}</p>
                                        <BsArrowRightShort className="icon" />
                                    </div>
                                </div>

                                <div className="destFooter">
                                    <div className="number">0{id}</div>

                                    <div className="destText flex">
                                        <h6>{location}</h6>
                                        <span className="flex">
                                            <span className="dot">
                                                <BsDot className="icon" />
                                            </span>
                                            Udaan
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Popular;
