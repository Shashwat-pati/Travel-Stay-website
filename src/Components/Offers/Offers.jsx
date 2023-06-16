import React, { useEffect } from "react";
import { v4 } from "uuid"; /*-----> To make unique keys while traversing through list in MAP method........ */
import "./Offers.css";

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

// Import Images ===================>
import img5 from "../../Assets/image 3.jpg";
import img6 from "../../Assets/image 5.jpg";
import img7 from "../../Assets/image 6.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

// Since we have finished styling every content, Let us also use the same high order array method (MAP) to list our offers.

const Offers = [
    {
        id: 1,
        imgSrc: img5,
        destTitle: "Machu Pichu",
        location: "Peru",
        price: "$3,500",
    },

    {
        id: 2,
        imgSrc: img6,
        destTitle: "Guanajuato",
        location: "Mexico",
        price: "$4,200",
    },

    {
        id: 3,
        imgSrc: img7,
        destTitle: "Angkor Wat",
        location: "Cambodia",
        price: "$3,800",
    },
];

const Offer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <section className="offer container section">
            <div className="secContainer">
                <div
                    data-aos="data-up"
                    data-aos-duration="2000"
                    className="secIntro"
                >
                    <h2 className="secTitle">Special Offers</h2>
                    <p>
                        From historical cities to natutral spectaculars , come
                        see the best of the world!
                    </p>
                </div>

                <div className="mainContent grid">
                    {Offers.map(
                        ({ id, imgSrc, destTitle, location, price }) => {
                            return (
                                <div
                                    data-aos="data-up"
                                    data-aos-duration="3000"
                                    className="singleOffer"
                                    key={v4()}
                                >
                                    <div className="destImage">
                                        <img src={imgSrc} alt={destTitle} />
                                        <span className="discount">
                                            30% Off
                                        </span>
                                    </div>

                                    <div className="offerBody">
                                        <div className="price flex">
                                            <h4>{price}</h4>
                                            <span className="status">
                                                For Rent
                                            </span>
                                        </div>

                                        <div className="amenities flex">
                                            <div className="singleAmenity flex">
                                                <MdKingBed className="icon" />
                                                <small>2 Beds</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdBathtub className="icon" />
                                                <small>1 Tub</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <FaWifi className="icon" />
                                                <small>Wi-Fi</small>
                                            </div>
                                            <div className="singleAmenity flex">
                                                <MdAirportShuttle className="icon" />
                                                <small>Shuttle</small>
                                            </div>
                                        </div>

                                        <div className="location flex">
                                            <MdLocationOn className="icon" />
                                            <small>{location}</small>
                                        </div>

                                        <button className="btn flex">
                                            View Details
                                            <BsArrowRightShort className="icon" />
                                        </button>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};

export default Offer;
