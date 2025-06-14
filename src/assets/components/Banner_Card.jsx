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
                    I'm a creative and enthusiastic developer who genuinely enjoys turning ideas into fun, engaging digital experiences. 
                    <br /><br />
                    Learning new things and working with modern web tech keeps me excited about every project. I love teaming up with others, sharing ideas, and making sure the results are something we can all be proud of. 
                    <br /><br />
                    let's connect and build something great together!
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
