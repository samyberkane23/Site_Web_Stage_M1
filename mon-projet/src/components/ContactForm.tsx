import "./ContactFormStyles.css";

const rows: number = 4;
function ContactForm(){

    return(
        <div className="form-container">

            <h1> Envoyez-nous un mail </h1>
            <form>
                <input placeholder="Nom"/>
                <input placeholder="Email"/>
                <input placeholder="Sujet"/>
                <textarea placeholder="Message"  rows={rows}></textarea>
                <button>Envoyez un mail </button>

            </form>
        </div>
    )
}

export default ContactForm