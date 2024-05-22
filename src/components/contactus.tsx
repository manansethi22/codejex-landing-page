import React from "react";
import contactus from "../../public/2.png";
import Image from "next/image";



const ContactUs: React.FC = () => {
    return (
        <section className="w-full py-12 md:py-24 min-h-full" id="contact-us">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-start justify-start space-y-4 text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent  bg-gradient-to-r from-violet-600 to-pink-600">
              Get in Touch
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <p>info@codejex.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Phone</h3>
                <p>+91 9999843411</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Address</h3>
                <p>Gurugram, Harayana</p>
              </div>
              <div>
                <Image
                  src={contactus}
                  alt="Contact Us"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
              <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">For Project Enquiries</h3>
                <form className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:ring-blue-500 focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div className="flex items-center">
                <input
                  type="checkbox"
                  id="marketing"
                  name="marketing"
                  className="h-4 w-4 text-blue-600 bg-gray-800 border-gray-700 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="marketing"
                  className="ml-2 block text-sm text-white"
                >
                  I agree to receive marketing communications from CodeJex Technologies
                </label>
              </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full mt-10 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default ContactUs;
