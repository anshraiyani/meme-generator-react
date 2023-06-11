import React from 'react'
import memesData from '../data/memesData'

export default function Meme() {

    const [memeImg,setMemeImg]=React.useState('')

    function generateRandomMeme(){
        const memesArray=memesData.data.memes
        const n=Math.floor(Math.random() * memesArray.length);
        setMemeImg(memesArray[n].url)
    }
  return (
    <main>
        <div className='form'>
            <input 
                type='text'
                className='form-input'
                placeholder='top text'
                />
            <input 
                type='text'
                className='form-input'
                placeholder='bottom text'
            />
            <button
                className='btn-form'
                onClick={generateRandomMeme}
            >Create Meme</button>
        </div>
        <img src={memeImg} className='meme-image'/>
    </main>
  )
}
