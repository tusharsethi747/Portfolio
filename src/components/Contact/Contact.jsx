// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("service_s5i6gw4", "template_ep4kp9o", form.current, {
//         publicKey: "jkd-Vn8uG8we9iB_r",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//           form.current.reset();
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (

//     <section className="Contact-container" id="Contact">
//         <h2 className="Contact-heading">Contact Me</h2>
//         <div>
//          <form ref={form} onSubmit={sendEmail} className="form-content">
//             <div className="form-data">
//                 <label className="label-text">Name</label>
//                 <input type="text" name="user_name"/>
//             </div>
//             <div className="form-data">
//                 <label className="label-text">Email</label>
//                 <input type="email" name="user_email" />
//             </div>
//             <div className="form-data">
//                 <label className="label-text">Message</label>
//                 <textarea name="message" />
//             </div>
//             <button type="submit" value="Send" className="send-button"> Send</button>
//          </form>
//         </div>
//     </section>
//   );
// };

// export default Contact;



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current.reportValidity()) {
      // Proceed with sending email if the form is valid
      emailjs
        .sendForm("service_s5i6gw4", "template_ep4kp9o", form.current, {
          publicKey: "jkd-Vn8uG8we9iB_r",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            form.current.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="Contact-container" id="Contact">
      <h2 className="Contact-heading">Contact Me</h2>
      <div>
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <div className="form-data">
            <label className="label-text">Name</label>
            <input type="text" name="user_name" required />
          </div>
          <div className="form-data">
            <label className="label-text">Email</label>
            <input type="email" name="user_email" required />
          </div>
          <div className="form-data">
            <label className="label-text">Message</label>
            <textarea name="message" required />
          </div>
          <button type="submit" value="Send" className="send-button">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

