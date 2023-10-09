import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-us section max-w-screen-xl mx-auto my-10 lg:my-32">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center">
                        <h2 className="text-center text-colorHead text-xl lg:text-5xl font-extrabold mb-6">
                            About EventHub
                        </h2>
                        <p className="px-5 lg:px-0 text-center font-medium text-colorPara leading-6 max-w-xl">
                            At EventHub, we specialize in turning your moments into beautiful memories. With a passion for
                            creativity and a commitment to excellence, we've been making dreams come true for over a decade.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
                        <div className="space-y-6">
                            <h3 className="text-colorHead text-2xl font-extrabold">Our Mission</h3>
                            <p className="text-colorPara leading-6">
                                Our mission is to create unforgettable experiences for our clients, whether it's a grand wedding,
                                a corporate event, or a special celebration. We believe in meticulous planning, attention to
                                detail, and a personal touch in everything we do.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-colorHead text-2xl font-extrabold">What Sets Us Apart</h3>
                            <p className="text-colorPara leading-6">
                                What sets us apart is our dedicated team of event professionals who are passionate about making
                                your event a success. From creative event design to flawless execution, we go the extra mile to
                                ensure your vision becomes a reality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-team section bg-gray-100 py-12">
                <div className="container mx-auto">
                    <h2 className="text-center text-colorHead text-3xl lg:text-4xl font-extrabold mb-6">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add team member cards here */}
                        <div className="team-member-card bg-white rounded-lg shadow-lg p-6">
                            <img src="https://www.shutterstock.com/image-photo/frontal-portrait-smiling-business-man-260nw-106296044.jpg
" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-colorHead text-xl font-semibold mt-4">John Doe</h3>
                            <p className="text-colorPara text-sm">Event Planner</p>
                        </div>
                        <div className="team-member-card bg-white rounded-lg shadow-lg p-6">
                            <img src="https://www.shutterstock.com/shutterstock/photos/284668769/display_1500/stock-photo-passport-picture-of-a-german-businessman-with-beard-284668769.jpg" alt="Team Member 2" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-colorHead text-xl font-semibold mt-4">Jane Smith</h3>
                            <p className="text-colorPara text-sm">Creative Director</p>
                        </div>
                        <div className="team-member-card bg-white  shadow-lg p-6">
                            <img src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/passport/1-change1.jpg" alt="Team Member 3" className="w-32 h-32 rounded-full mx-auto" />
                            <h3 className="text-colorHead text-xl font-semibold mt-4">Michael Johnson</h3>
                            <p className="text-colorPara text-sm">Logistics Coordinator</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonials section max-w-screen-xl mx-auto my-12 lg:my-32">
                <div className="container mx-auto">
                    <h2 className="text-center text-colorHead text-3xl lg:text-4xl font-extrabold mb-6">
                        What Our Clients Say
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Add client testimonials here */}
                        <div className="testimonial-card bg-white rounded-lg shadow-lg p-6">
                            <p className="text-colorPara leading-6">
                                "EventHub made our wedding day truly magical. From the beautiful decorations to the seamless
                                coordination, everything was perfect. We couldn't be happier!"
                            </p>
                            <div className="mt-4">
                                <h3 className="text-colorHead text-lg font-semibold">Emily & Mark</h3>
                                <p className="text-colorPara text-sm">Wedding Clients</p>
                            </div>
                        </div>
                        <div className="testimonial-card bg-white rounded-lg shadow-lg p-6">
                            <p className="text-colorPara leading-6">
                                "We've worked with EventHub for our corporate events, and they always exceed our expectations.
                                Their attention to detail and professionalism are unmatched."
                            </p>
                            <div className="mt-4">
                                <h3 className="text-colorHead text-lg font-semibold">Sarah Johnson</h3>
                                <p className="text-colorPara text-sm">Corporate Client</p>
                            </div>
                        </div>
                        <div className="testimonial-card bg-white rounded-lg shadow-lg p-6">
                            <p className="text-colorPara leading-6">
                                "EventHub's team is simply fantastic! They helped us plan a memorable birthday party that our
                                guests are still talking about. We highly recommend their services."
                            </p>
                            <div className="mt-4">
                                <h3 className="text-colorHead text-lg font-semibold">David & Lisa</h3>
                                <p className="text-colorPara text-sm">Birthday Party Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
