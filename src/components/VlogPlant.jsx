import { motion } from "framer-motion";


const leftVariant = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const rightVariant = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function VlogPlant() {
  return (
    <section className="bg-[url('src/assets/bg-plant-3.jpg')] bg-cover bg-center bg-black/40 bg-blend-multiply min-h-screen py-20 overflow-hidden">
      <h1 className="text-white font-medium text-8xl text-center">About <span className="text-lime-500">Plants</span></h1>
      <motion.p
        className="text-gray-400 text-center py-1"
        variants={leftVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Indoor plants, outdoor plants, and office desk plants all  have their own unique benefits. Indoor plants make our homes fresh <br /> and calming, outdoor plants support the environment, and desk plants improve focus at work.
      </motion.p>
      <div className="py-16 space-y-20">

        {/* Block 1: Indoor Plants Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="https://i.ibb.co.com/KcgP0Y2x/extra-2.png" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Indoor Plants (Introduction)</h1>
            <p className="text-white text-[22px]">Indoor plants are plants that we grow inside our homes. They add natural beauty and make our surroundings feel fresh. People keep them in living rooms, bedrooms, balconies, and even kitchens. Indoor plants bring nature closer to us, especially for those living in cities. They fit well in small spaces and are perfect for modern home décor.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
        </div>

        {/* Block 2: Benefits of Indoor Plants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Benefits of Indoor Plants</h1>
            <p className="text-white text-[22px]">Indoor plants help improve air quality by releasing oxygen and absorbing harmful toxins. They create a calm and peaceful environment, which helps reduce stress and anxiety. Studies say that having plants indoors can improve mood and increase focus. They also add a touch of green that makes the home look more lively and warm. Indoor plants are not just decoration, they improve our overall well-being.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="https://i.ibb.co.com/8DxfZhSP/plant-vlog-2.png" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
        </div>

        {/* Block 3: Care of Indoor Plants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="src/assets/plant-vlog-4.jpg" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Care of Indoor Plants</h1>
            <p className="text-white text-[22px]">Indoor plants usually need less sunlight and can survive with moderate watering. It is important to avoid overwatering, as it can damage the roots. Most indoor plants prefer indirect light instead of direct sun. Cleaning their leaves occasionally helps them stay fresh and healthy. With just a little care, indoor plants can grow beautifully for years.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
        </div>

        {/* Block 4: Outdoor Plants Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Outdoor Plants (Introduction)</h1>
            <p className="text-white text-[22px]">Outdoor plants are grown outside in gardens, backyards, rooftops, or balconies. They need natural sunlight, fresh air, and open space to grow well. These plants often grow larger than indoor plants because they have more space to expand. Outdoor plants include flowers, shrubs, fruit trees, and herbs. They add beauty to the environment and connect us more strongly with nature.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="src/assets/plant-vlog-3.jpg" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
        </div>

        {/* Block 5: Benefits of Outdoor Plants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="https://i.ibb.co.com/DHQ76tTc/plant-vlog-5.png" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Benefits of Outdoor Plants</h1>
            <p className="text-white text-[22px]">Outdoor plants play an important role in maintaining the balance of nature. They provide oxygen, attract birds, bees, and butterflies, and support the ecosystem. Many outdoor plants also provide fruits, vegetables, and herbs that we can use at home. They create shade and cool down the surroundings. Outdoor plants make gardens look colorful and refreshing.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
        </div>

        {/* Block 6: Office Desk Plants Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Office Desk Plants (Introduction)</h1>
            <p className="text-white text-[22px]">Office desk plants are small plants kept on work tables or shelves in the office. They are usually compact and do not need very frequent watering. Common office desk plants include succulents, cacti, and small leafy plants. They make the workplace look friendly and less stressful. These plants add a touch of nature to a busy working environment.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="src/assets/plant-vlog-6.jpg" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
        </div>

        {/* Block 7: Benefits of Office Desk Plants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="src/assets/plant-vlog-7.jpg" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Benefits of Office Desk Plants</h1>
            <p className="text-white text-[22px]">Office desk plants help reduce stress and improve concentration. Studies show that employees with plants near them feel more relaxed and work more efficiently. These plants also purify the air around the desk and make the workspace pleasant. They create a positive atmosphere and improve mental well-being. Just a small green plant can make work feel more enjoyable.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
        </div>

        {/* Block 8: Conclusion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Conclusion</h1>
            <p className="text-white text-[22px]">Indoor plants, outdoor plants, and office desk plants all have their own unique benefits. Indoor plants make our homes fresh and calming, outdoor plants support the environment, and desk plants improve focus at work. No matter where they are kept, plants bring life, beauty, and positivity. Taking care of plants also helps us feel more connected to nature. A little green around us can truly make a big difference in our daily life.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="src/assets/plant-vlog-8.jpg" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
        </div>

        {/* Block 9: Care of Office Desk Plants */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center py-5 px-16 gap-10">
          <motion.div variants={leftVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <img src="src/assets/plant-vlog-10.png" className="w-[700px] h-[600px] rounded-xl" alt="" />
          </motion.div>
          <motion.div variants={rightVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h1 className="text-4xl font-bold text-lime-600">Care of Office Desk Plants</h1>
            <p className="text-white text-[22px]">Office desk plants are usually small and easy to maintain, but they still need proper care to stay healthy. They should be placed where they can get indirect light from a window or lamp. Watering should be done carefully—too much water can harm these plants, so it's better to water them only when the soil feels dry. Cleaning the leaves gently helps the plants stay fresh and green. Succulents and small leafy plants are good choices because they require less attention. With simple care and occasional observation, office desk plants can stay healthy and make the workspace more pleasant and calming.</p>
            <button className="border border-white text-[22px] text-white px-6 py-2 mt-4 rounded-full bg-transparent hover:bg-white/20 backdrop-blur-sm transition duration-300 w-max">Learn More 🌿</button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}