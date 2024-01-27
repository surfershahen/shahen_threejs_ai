/* eslint-disable react/no-unescaped-entities */
import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import state from "../store ";
import { CustomButton } from "../components";

const Home = () => {
  //snap meaning it's one current snapshot of that state
  const snap = useSnapshot(state);
  //AnimatePresence is a component by framer motion allow to us enable the animation of components that have been removed from the tree
  return (
    <AnimatePresence>
      {/* check if we are currently on the intro page or home  */}

      {snap.intro && (
        //in this case we render the home page data
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./threejs.png"
              alt="logo"
              className="w-8 h-8 object-contain"
            />
            <motion.div className="home-content" {...headContainerAnimation}>
              <motion.div {...headTextAnimation}>
                <h1 className="head-text">
                  LET'S <br className="xl:block hidden" />
                  DO IT .
                </h1>
              </motion.div>
              <motion.div
                {...headContentAnimation}
                className="flex flex-col gap-5"
              >
                <p className="max-w-md font-normal text-gray-400 text-base text-xl ">
                  Create your unique and exclusive shirt with our brand-new 3D
                  customization tool. <strong>Unleash your imagination</strong>{" "}
                  and define your own style
                </p>
                {/* button to navigate us from the home page to customization page  */}
                <CustomButton
                  type="filled"
                  title="Customize It"
                  // callback function to update the valtio state
                  handleClick={() => (state.intro = false)}
                  customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                />
              </motion.div>
            </motion.div>
          </motion.header>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
