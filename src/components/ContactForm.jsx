import React from "react";
import toast from "react-hot-toast";
const ContactForm = () => {
  const notify = () => toast.success("Message sent successfully!");

  return (
    <div>
      <section className="py-6 bg-white text-gray-800 mt-24 mb-24 ">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x my-auto">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-5xl font-semibold text-green-700">
              Contact Us
            </h1>
            <p className="pt-10 pb-4">
              Reach Out To Us For Questions, Feedback, Or Collaboration. We're
              Here To Listen, Assist, And Make Your Experience Better.
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>
                  E1115, Sabha Eternia, Harlur Road, Banglore, Karnataka 560102
                  India
                </span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>+918712206999</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>support@eldahealth.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-3 text-green-700 font-semibold">
                Full Name
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="block w-full rounded-md shadow-sm focus:ring bg-gray-100 p-2 mt-1"
              />
            </label>
            <label className="block">
              <span className="mb-3 text-green-700 font-semibold">
                Email Address
              </span>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="block w-full rounded-md shadow-sm focus:ring bg-gray-100 p-2 mt-1"
              />
            </label>
            <label className="block">
              <span className="mb-3 text-green-700 font-semibold">Message</span>
              <textarea
                rows="5"
                className="block min-h-36 w-full rounded-md  focus:ring bg-gray-200 mt-1"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-7 py-2 text-lg rounded   bg-red-400 text-white hover:bg-red-500 "
              onClick={notify}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
