import myImg from '../media/IMG_20220704_114658_edited.jpg'

function Banner_Card() {
  return (
    <>
      <div className="bnr-container flex">
        <img className='prfl-img' src={myImg} alt="Image of Martin" />
        <section className="prfl-info-container">
            <h1>Martin Titus</h1>
            <h4 className='job-title'>Software Developer</h4>
            <article className='abt-me'>
                <p>
                    I'm a creative and enthusiastic developer who loves bringing ideas to life through engaging digital experiences. With a solid grasp of modern web technologies and a genuine excitement for learning.
                    <br /><br />
                    I approach every project with positivity, adaptability, and a collaborative spirit. I enjoy working closely with others, communicating openly, and always striving to deliver results that delight and inspire. My passion for innovation and growth means I’m always ready to take on new challenges and contribute fresh perspectives. 
                    <br /><br />
                    Let's connect and see how we can create something amazing together!
                </p>

            </article>
            <div className='bnr-btns-ctn'>
                <button className='cv-btn btn'>Download CV</button>
                <button className='contact-btn btn'>Contact me!</button>
            </div>
        </section>
      </div>
    </>
  );
}

export default Banner_Card;
