import React, { useEffect, useState } from "react";
import Heading from "../../common/heading/Heading";


const Hero = () => {
  const paragraph =
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.";
  const words = paragraph.split(" ");

  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < words.length) {
        setVisibleWords((prev) => [...prev, words[currentIndex]]);
        currentIndex++;
      } else {
        clearInterval(interval); 
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
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
      <div className="margin"></div>
    </>
  );
};

export default Hero;
