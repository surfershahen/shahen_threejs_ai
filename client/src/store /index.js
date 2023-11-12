import { proxy } from "valtio";

//set up our state
//initialize the state call it as function

const state = proxy({
  //intro meaning is we currently on the home page or not
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
