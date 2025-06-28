import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// Team data including social links (placeholders here)
const teamData = [
  {
    id: 1,
    name: "John Doe",
    role: "Event Planner",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuFIhdQWSnd5GyVHHZpyFAikeHfTN6ttkBAhUr2DGYR38n0VGojUxE1GS1AwFm4LWeO-E&usqp=CAU",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Creative Director",
    img: "https://static.vecteezy.com/system/resources/previews/033/129/417/non_2x/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg",
     socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Logistics Coordinator",
    img: "https://img.freepik.com/free-photo/portrait-expressive-young-man-wearing-formal-suit_273609-6942.jpg?semt=ais_hybrid&w=740",
    socials: {
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
];

// TeamMemberCard component with social icons below role text
function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      key={member.id}
      className="bg-white rounded-2xl p-6 shadow-lg text-center cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-32 h-32 rounded-full mx-auto object-cover"
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.role}</p>
      <div className="mt-4 flex justify-center space-x-6 text-gray-600">
        <a
          href={member.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400"
          aria-label={`${member.name} Twitter`}
        >
          <FaTwitter size={20} />
        </a>
        <a
          href={member.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
          aria-label={`${member.name} LinkedIn`}
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href={member.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
          aria-label={`${member.name} Instagram`}
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </motion.div>
  );
}

const About = () => {
  return (
    <div>
      <section className="about-us section max-w-screen-xl mx-auto my-10 lg:my-32 px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="about text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 text-transparent bg-clip-text mb-6">
            About
            <span className="text-blue-500 text-bold"> Event</span>
            <span className="text-pink-500 text-bold">Hub</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At EventHub, we turn moments into lifelong memories. With a deep passion for creative event execution, we’ve been transforming visions into
            experiences for over a decade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-7">
              To craft personalized, unforgettable events for every occasion. From weddings to corporate galas, we combine innovation and precision to deliver
              exceptional experiences.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h3>
            <p className="text-gray-600 leading-7">
              Our award-winning team combines creativity with efficiency. From stunning visuals to smooth logistics, we ensure every event reflects your unique style
              and exceeds expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="our-team section bg-gradient-to-br from-gray-100 to-white py-20">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-12 text-gray-800">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamData.map((member, idx) => (
              <TeamMemberCard key={member.id} member={member} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials section py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-12 text-gray-800">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                quote: "EventHub made our wedding day magical! Everything was perfect.",
                author: "Emily & Mark",
                role: "Wedding Clients",
              },
              {
                quote: "Professional, detailed, and reliable. Our go-to event team!",
                author: "Sarah Johnson",
                role: "Corporate Client",
              },
              {
                quote: "Our guests still talk about the party! Thank you, EventHub!",
                author: "David & Lisa",
                role: "Birthday Clients",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
              >
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <h3 className="font-bold text-gray-800">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
