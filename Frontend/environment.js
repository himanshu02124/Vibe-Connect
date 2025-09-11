let IS_PROD = true;
const server = IS_PROD ?
   "https://vibe-connect-s8e3.onrender.com" :
    "http://localhost:8000"


export default server;