import React from 'react';
import { Link } from 'react-router-dom';
 

const blogPosts = [
  {
    title: '💍 Planning the Perfect Wedding: A Step-by-Step Guide',
    date: 'November 10, 2023',
    author: 'Jane Smith',
    image: 'https://i.ibb.co/L8w324v/wedding.jpg',
    content: `
      💒 The journey to "I Do" begins here. Planning your wedding is like composing a symphony — every detail matters. Begin by crafting your budget 🎯, a foundation that will guide every flower 💐, fork 🍴, and flourish along the way.

      👰 Find your dream team. Hire vendors that vibe with your vision — from photographers 📸 who capture candid love to florists 🌺 who translate your style into color. Take your time choosing a venue that feels like *you* — maybe a rustic barn or a grand ballroom 🏛️.

      📋 Don’t skip the timeline. Use checklists ✅ and wedding apps 📱 to stay on track. Remember to enjoy the process — this is a celebration of your love 💗, after all. Dance through the chaos, toast the tiny wins 🥂, and make memories at every turn.
    `,
  },
  {
    title: '🎉 Throwing a Memorable Birthday Party for Kids',
    date: 'December 5, 2023',
    author: 'Michael Johnson',
    image: 'https://i.ibb.co/F3CYDzF/birthday.jpg',
    content: `
      🎈 Birthdays are magical milestones. Whether it’s their 1st or 10th, throwing a party that sparkles ✨ with joy is a gift that lasts forever. Start with a theme — dinosaurs 🦖, superheroes 🦸‍♂️, or fairies 🧚 — and let the imagination run wild.

      🎂 Food, fun, and flair. Mini cupcakes, finger sandwiches, and fruit skewers 🍡 are kid-friendly and Instagram-worthy. Plan engaging games like treasure hunts 🗺️, piñatas 🎯, or simple crafts 🎨 that keep little hands busy and happy.

      📸 Capture every giggle. Set up a colorful backdrop 📷 for photos, maybe even hire a magician 🎩 or balloon artist 🎈. As the sun sets, send guests home with goody bags and full hearts — it’s not just a party, it’s a memory in the making 💕.
    `,
  },
  {
    title: '💑 Celebrating Love: Planning Your Anniversary Bash',
    date: 'January 20, 2024',
    author: 'Emily Davis',
    image: 'https://i.ibb.co/1rD2kBg/anneversary.jpg',
    content: `
      🌹 Every love story deserves a celebration. Whether it’s year 1 or 50, anniversaries are a reminder that love endures. Choose a venue that holds meaning — perhaps the place where you first met or a cozy restaurant for two 🕯️.

      💌 Write from the heart. Share letters 📜, read vows again, or simply speak from the soul. Consider a slideshow 🎥 of shared memories or a playlist 🎶 of “your songs” to set a romantic mood.

      🍾 Toast to forever. Invite close friends and family 🫂 or keep it intimate with just the two of you. Dine under fairy lights, sip champagne 🥂, and relive your favorite moments together. Let every toast echo with laughter and love 💗.
    `,
  },
  {
    title: '💍 Engagement Party Ideas for the Newly Engaged',
    date: 'February 15, 2024',
    author: 'David Brown',
    image: 'https://i.ibb.co/0ZCWnHX/Engagement.jpg',
    content: `
      💫 Celebrate the "Yes"! Engagements are a time of joy and anticipation. Plan a party that reflects your personality — backyard BBQ 🍔, rooftop cocktails 🍸, or cozy brunch ☕ with close friends.

      💬 Start with heartfelt invites — digital or paper — and let guests know it’s a celebration of love. Create a vibe with string lights ✨, candles 🕯️, and photo displays 📸 of your story together.

      🎤 Plan a short toast or speech to thank guests, share your engagement story, and set the tone for the wedding to come. Most of all, relax and enjoy the love 🫶 all around you.
    `,
  },
  {
    title: '👶 Welcoming a New Chapter: Baby Shower Planning',
    date: 'March 10, 2024',
    author: 'Sarah Wilson',
    image: 'https://i.ibb.co/2gsFk3m/Baby-shower.jpg',
    content: `
      🍼 A baby is on the way — time to celebrate! Baby showers are a joyful gathering of loved ones, sharing laughter, blessings, and gifts 🎁 with the mom-to-be.

      🌼 Choose a theme like woodland critters 🦊, pastel rainbows 🌈, or classic baby blue and pink. Decorate with balloons 🎈, banners, and a cake that steals the show 🎂.

      🎉 Plan games like diaper-changing races, baby bingo, or guess-the-baby-food. Offer cozy seating, mocktails 🍹, and finger foods 🍪 for guests to relax and mingle.

      📦 Don’t forget the gift table and a heartfelt thank-you speech. It’s more than just a party — it’s a warm welcome for a tiny new soul 👶💗.
    `,
  },
];

 

const Blogs = () => {
  return (
    <div className="container w-5/6 mx-auto mt-8 px-4">
      <h1 className="text-3xl font-semibold mb-6 text-center">Recent Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition" key={index}>
            <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                Posted on <span className="font-medium">{post.date}</span> by{' '}
                <span className="font-medium">{post.author}</span>
              </p>
              <p className="text-gray-700 text-sm">
                {post.content.substring(0, 100)}...
                <Link
                  to={`/blogs/${index}`}
                  className="text-pink-600 hover:text-pink-800 font-semibold ml-1"
                >
                  Read more
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
export { blogPosts }; // So BlogDetails can access them
