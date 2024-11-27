import React, { useEffect, useState } from "react";
import Heading from "../common/heading/Heading";
import './style.css'
import { homeAbout, awrapper, coursesCard, online, testimonal, blog } from "../../dummydata"

const Dashboard = () => {
    const paragraph =
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
    const words = paragraph.split(" ");

    const [visibleWords, setVisibleWords] = useState([]);
    return (
        <>
            <div className="main">
                <section className="hero">
                    <div className="container">
                        <div className="row">
                            <Heading subtitle="WELCOME TO CHEMMOZHI" title="Best Online Education Expertise" />
                            <p>{visibleWords.join(" ")}</p>
                            <div className="button">
                                <button className="primary-btn">
                                    GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
                                </button>
                                <button>
                                    VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='aboutHome'>
                    <div className='container flexSB'>
                        <div className='left row'>
                            <img src='./images/about.webp' alt='' />
                        </div>
                        <div className='right row'>
                            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
                            <div className='items'>
                                {homeAbout.map((val) => {
                                    return (
                                        <div className='item flexSB'>
                                            <div className='img'>
                                                <img src={val.cover} alt='' />
                                            </div>
                                            <div className='text'>
                                                <h2>{val.title}</h2>
                                                <p>{val.desc}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='awrapper'>
                    <div className='container grid'>
                        {awrapper.map((val) => {
                            return (
                                <div className='box flex'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                    </div>
                                    <div className='text'>
                                        <h1>{val.data}</h1>
                                        <h3>{val.title}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className='homeAbout'>
                    <div className='container'>
                        <Heading subtitle='our courses' title='explore our popular online courses' />

                        <div className='coursesCard'>
                            {/* copy code form  coursesCard */}
                            <div className='grid2'>
                                {coursesCard.slice(0, 3).map((val) => (
                                    <div className='items'>
                                        <div className='content flex'>
                                            <div className='left'>
                                                <div className='img'>
                                                    <img src={val.cover} alt='' />
                                                </div>
                                            </div>
                                            <div className='text'>
                                                <h1>{val.coursesName}</h1>
                                                <div className='rate'>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <i className='fa fa-star'></i>
                                                    <label htmlFor=''>(5.0)</label>
                                                </div>
                                                <div className='details'>
                                                    {val.courTeacher.map((details) => (
                                                        <>
                                                            <div className='box'>
                                                                <div className='dimg'>
                                                                    <img src={details.dcover} alt='' />
                                                                </div>
                                                                <div className='para'>
                                                                    <h4>{details.name}</h4>
                                                                </div>
                                                            </div>
                                                            <span>{details.totalTime}</span>
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='price'>
                                            <h3>
                                                {val.priceAll} / {val.pricePer}
                                            </h3>
                                        </div>
                                        <button className='outline-btn'>ENROLL NOW !</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <section className='online'>
                    <div className='container'>
                        <Heading subtitle='COURSES' title='Browse Our Online Courses' />
                        <div className='content grid3'>
                            {online.map((val) => (
                                <div className='box'>
                                    <div className='img'>
                                        <img src={val.cover} />
                                        <img src={val.hoverCover} alt='' className='show' />
                                    </div>
                                    <h1>{val.courseName}</h1>
                                    <span>{val.course}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className='testimonal padding'>
                    <div className='container'>
                        <Heading subtitle='Team' title='Our Instructors' />
                        <div className='content grid2'>
                            {testimonal.map((val) => (
                                <div className='items shadow'>
                                    <div className='box flex'>
                                        <div className='img'>
                                            <img src={val.cover} alt='' />
                                            <i className='fa fa-quote-left icon'></i>
                                        </div>
                                        <div className='name'>
                                            <h2>{val.name}</h2>
                                            <span>{val.post}</span>
                                        </div>
                                    </div>
                                    <p>{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* <section className='blog'>
                    <div className='container'>
                        <Heading subtitle='OUR BLOG' title='Recent From Blog' />
                        <div className='grid2'>
                            {blog.slice(0, 3).map((val) => (
                                <div className='items shadow'>
                                    <div className='img'>
                                        <img src={val.cover} alt='' />
                                    </div>
                                    <div className='text'>
                                        <div className='admin flexSB'>
                                            <span>
                                                <i className='fa fa-user'></i>
                                                <label htmlFor=''>{val.type}</label>
                                            </span>
                                            <span>
                                                <i className='fa fa-calendar-alt'></i>
                                                <label htmlFor=''>{val.date}</label>
                                            </span>
                                            <span>
                                                <i className='fa fa-comments'></i>
                                                <label htmlFor=''>{val.com}</label>
                                            </span>
                                        </div>
                                        <h1>{val.title}</h1>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    )
}

export default Dashboard
