import React from 'react'

export default function Meme() {
  return (
    <main>
        <form className='form'>
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
            >Create Meme</button>
        </form>
    </main>
  )
}