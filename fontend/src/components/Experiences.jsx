import React, { useEffect, useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import image from '../assets/images/img2.png';
import cardBgVector from '../assets/images/blur-23.svg';

const Experiences = () => {
    const [data, setData] = useState([]); // Initialize as an array

    const fetchData = async () => {
        try {
            const res = await fetch('https://iamveerendragangwar-portfolio-api.vercel.app/experience');
            const result = await res.json();
            setData(result);
        } catch (error) {
            console.error("Error fetching experience data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='position-relative bg-vector' id="experience">
                <div className='d-block w-100 position-relative'>
                    <div className='AboutMeHeading AboutMeHeading1'>
                        <div className='position-relative'>
                            <span className='text-white'>Experiences</span>
                            <div className='HeadingLine1'></div>
                        </div>
                    </div>
                </div>

                <div className='container mt-6'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img className='vectorImg' src={image} alt='experience' />
                        </div>

                        <div className='col-md-6'>
                            {data.length > 0 ? (
                                data.map((curElem) => (
                                    <div className='cardSec' key={curElem.id}> {/* Use a unique identifier like 'id' */}
                                        <p className='cardHeading'>({curElem.year})</p>
                                        <div className='d-flex align-items-center gap-4'>
                                            <FaLaptopCode />
                                            <div>
                                                <h4 className='mb-2'>{curElem.designation}</h4>
                                                <h5 className='mb-2'>{curElem.company}</h5>
                                            </div>
                                        </div>
                                        <img className='cardBgVector' src={cardBgVector} alt='background' />
                                    </div>
                                ))
                            ) : (
                                <p>Loading experiences...</p> // Show a loading message while data is being fetched
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experiences;
