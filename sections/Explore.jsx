'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../styles';
import { exploreWorlds } from '../constants';
import { staggerContainer, fadeIn } from '../utils/motion';
import { ExploreCard, TitleText, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={<>Choose the Hero, you want <br className="md:block hidden" /> to explore</>}
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">The story</span> follows a civilization on Nexus, 
        an advanced planet that has unlocked the power of meta-energy and explored the universe. 
        However, a group called {' '}
        <span className="font-extrabold text-white">
        the Shadow Raiders
        </span>{' '}
         risks destroying everything by delving into the dark corners of the universe to seek forbidden knowledge 
        and tap into meta-energy beyond their understanding. The hero must journey to the edge of the known universe and beyond to uncover secrets and face 
        unimaginable dangers to save Nexus and restore balance to the cosmos. Along the way, he discovers the true power of his own meta-abilities and the true 
        nature of the universe while facing the temptation of forbidden knowledge. {' '}
        <span className="font-extrabold text-white">The fate of Nexus and the universe hangs in the balance.</span> 
      </motion.p>

      </motion.div>
    </section>
  );
};

export default Explore;
