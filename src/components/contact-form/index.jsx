import { useForm } from "react-hook-form";

const ContactForm = () => {
    const { register, errors } = useForm({
        mode: "onBlur",
    });
    return (
        <form
            id="contact-form"
        >
            <div className="row">
                <div className="col-md-6">
                    <div className="single-form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name *"
                            ref={register({ required: "Name is required" })}
                        />
                        {errors.name && <p>{errors.name.message}</p>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="single-form">
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email *"
                            ref={register({
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "invalid email address",
                                },
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-form">
                        <input
                            type="text"
                            name="organization"
                            placeholder="Organization"
                        /* ref={register({
                            required: "Subject is required",
                        })} */
                        />
                        {/* {errors.subject && <p>{errors.subject.message}</p>} */}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-form">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            ref={register({
                                required: "Subject is required",
                            })}
                        />
                        {errors.subject && <p>{errors.subject.message}</p>}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="single-form">
                        <textarea
                            name="message"
                            placeholder="Message *"
                            ref={register({
                                required: "Message is required",
                            })}
                        ></textarea>
                        {errors.message && <p>{errors.message.message}</p>}
                    </div>
                </div>
                <p className="form-message">
                    Brahmware is committed to protecting your information.
                    Your information will be used in accordance with the GDRP.
                    As Brahmware is a global organisation, your information may be
                    stored and processed by Brahmware and its affiliates in countries
                    outside your country of residence, but wherever your information
                    is processed, we will handle it with the same care and respect
                    for your privacy.
                </p>
                <div className="col-md-12">
                    <div className="form-btn">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
