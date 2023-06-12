import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
  // const [memeImg,setMemeImg]=React.useState('')
  const [memeImg, setMemeImg] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/emccr.jpg",
  });

  const [allMemeImg, setAllMemeImg] = React.useState(memesData);

  function generateRandomMeme() {
    const memesArray = allMemeImg.data.memes;
    const n = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[n].url;
    setMemeImg((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event){
    const {name,value}=event.target
    setMemeImg(prev=>({
        ...prev,
        [name]:value
    }))
  }

  return (
    <main>
      <div className="form">
        <input
            type="text" 
            className="form-input" 
            placeholder="top text" 
            name='topText'
            onChange={handleChange}
            value={memeImg.topText}
            />
        <input 
            type="text" 
            className="form-input" 
            placeholder="bottom text" 
            name="bottomText"
            onChange={handleChange}
            value={memeImg.bottomText}
        />
        <button className="btn-form" onClick={generateRandomMeme}>
          Create Meme
        </button>
      </div>
      <div className="meme">
        <img src={memeImg.randomImage} className="meme-image" alt="meme" />
        <h2 className="meme-text top">{memeImg.topText}</h2>
        <h2 className="meme-text bottom">{memeImg.bottomText}</h2>
      </div>
    </main>
  );
}
