function ContactForm() {
    return (
        <form action="https://formspree.io/f/xdkzddna" method="POST" className="form">
            <input type="text" name="name" id="contactName" className="frm-style" placeholder="Your Name" required/>
            <input type="email" name="email" id="contactEmail" className="frm-style" placeholder="Your Email" required/>
            <input type="text" name="subject" id="contactSubject" className="frm-style" placeholder="Subject" required/>
            <textarea name="message" id="contactUserMessage" className="frm-style" placeholder="Your Message"></textarea>
            <input className="btn form-btn" type="submit" value="Send Message" />
        </form>
    );
}
export default ContactForm;