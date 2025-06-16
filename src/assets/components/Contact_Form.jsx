function ContactForm() {
    return (
        <form action="POST" className="form">
            <input type="text" id="contactName" className="frm-style" placeholder="Your Name" required/>
            <input type="email" id="contactEmail" className="frm-style" placeholder="Your Email" required/>
            <input type="text" id="contactSubject" className="frm-style" placeholder="Subject" required/>
            <textarea name="message" id="contactUserMessage" className="frm-style" placeholder="Your Message"></textarea>
            <input className="btn form-btn" type="submit" />
        </form>
    );
}
export default ContactForm;