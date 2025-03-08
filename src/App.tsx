//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {

    return (
        <>
            <main className="App">
                <h1>CatPhotoApp</h1>
                <section>
                    <h2>Cat Photos</h2>
                    <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute
                        cats</a> online!</p>
                    <p>
                        <span>See more</span> <a href="https://freecatphotoapp.com" target="_blank">cat photos</a>
                        <span>in our gallery.</span>
                    </p>
                    {/*<img src=<img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back">*/}
                </section>
                <section>
                    <h2>Cat Lists</h2>
                    <h3>Things cats love:</h3>
                    <ul>
                        <li>cat nip</li>
                        <li>laser pointers</li>
                        <li>lasagna</li>
                    </ul>
                    <figure>
                        <img src={"https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"}
                             alt="A slice of lasagna on a plate."/>
                        <figcaption>Cats <em>love</em> lasagna</figcaption>
                    </figure>
                    <h3>Top 3 things cats hate:</h3>
                    <ol>
                        <li>flea treatment</li>
                        <li>thunder</li>
                        <li>other cats</li>
                    </ol>
                    <figure>
                        <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
                             alt="Five cats looking around a field."/>
                        <figcaption>Cats <strong>hate</strong> other cats.</figcaption>
                    </figure>
                </section>
            </main>
            <footer>
                <p>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
            </footer>
        </>
    )
}

export default App
