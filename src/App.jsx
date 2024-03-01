import { useState, useEffect } from 'react';
import './App.css';

const URL = "https://api.unsplash.com/photos/?page=1&client_id=VuXluV_uFWSgATOLaklXbuJwlwaIKodXvrdZbQEmk0g";

function App() {

    const [smallPhoto] = useState(0)

    useEffect(() => {
        const FetchDataFunc = async () => {
            const result = await fetch(URL)
            console.log(result)
        }
        FetchDataFunc();
    }, []);

    return (
        <div className='App'>
            <h1>Instagram Clone</h1>
            <div className="photos-container">
                {photos.map((photo) => (
                    <div key={photo.id} className="photo-card">
                        <img src={photo.urls.small} alt={photo.smallPhoto} />
                        <div className='photo-details'>
                            <p>By: {photo.user.username}</p>
                            <p>Likes: {photo.likes}</p>
                        </div>
                    </div>
                ))}
            </div>        
        </div>
    );
}

// const FetchFunc = async () => {
//   const res = await fetch(
//       "https://api.unsplash.com/photos/?page=1&client_id=VuXluV_uFWSgATOLaklXbuJwlwaIKodXvrdZbQEmk0g"
//   );

//   const data = await res.json();

//   const photosSorted = await data.map ((photo)=> {
//       return {
//           id:photo.id,
//           imageUrls: {
//               small: photo.urls.small
//           },
//           likes: photo.likes,
//           photographer_name: photo.user.username,
//       };
//   });
  
//   console.log(data);
// };

// FetchFunc();
export default App