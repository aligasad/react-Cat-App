import { useState } from 'react';
import './App.css'
import { FaCode } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";


const images = [
'https://imgs.search.brave.com/bAdI7a7qnuuOIJphttt3DfbzLnCU7ZDMtnkejXq6UII/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMDkz/OC81NDk5L2kvNDUw/L2RlcG9zaXRwaG90/b3NfNTQ5OTg2MTMt/c3RvY2stcGhvdG8t/Z2luZ2VyLWNhdC5q/cGc',
  'https://imgs.search.brave.com/YzG9FgYN5qLWsiYyJ4dUEvxav9e98dBH0loR8YPRA1E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/ODc3NTY1L3Bob3Rv/L3BvcnRyYWl0LW9m/LWEtYnJvd24tY2F0/LWFnYWluc3QtYS1n/cmF5LWJhY2tncm91/bmQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWlGcFFNSzlF/aTIzVm9XcExLa2Zh/TFVtdXN5Y3VaWllV/OWtWMjNzT2F6YzQ9',
  'https://imgs.search.brave.com/lZtf1S7JKFcaZs2lhxTpAtaJzTk_V35Xt8ys4htuVBU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2F0LXBvc2VzLXBl/cmZlY3RseS5qcGc_/d2lkdGg9MTAwMCZm/b3JtYXQ9cGpwZyZl/eGlmPTAmaXB0Yz0w',
  'https://imgs.search.brave.com/t6Nv0DwxoIACRxxtX2h7yt31ux5SCXHWgHVpoGh1diw/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzM2Lzk5LzIy/LzM2MF9GXzIzNjk5/MjI4M19zTk94Q1ZR/ZUZMZDVwZHFhS0do/OERSR01aeTdQNFhL/bS5qcGc',
];

function App() {
  const [data, setData] = useState(images);
  const [selectedImg, setSelectedImg] = useState("");

  function showImage(imgLink) {
    setSelectedImg(imgLink);
  }
  
  return (
    <>
      <div className='header'>
        <img src="src/assets/asadpic1.jpg" alt="pic" />
        <h1>Image Gallery</h1>
        <div className='logo'>
          <a href="https://github.com/aligasad/react-Cat-App"><FaCode /></a>
          <a href="https://github.com/aligasad"><FaSquareGithub /></a>
          
        </div>
      </div>

      <div className='catBox'>
        <p>Click on an Image</p>
        <div className='cats'>
          {
            data.map((pics, idx)=>{
              return <img onClick={() => showImage(pics)} key={idx} src={pics} alt="xyz" />
            })
          }
        </div>
      </div>

      {selectedImg && (
        <div className='showBox'>
          <h2>Selected Image</h2>
          <img src={selectedImg} alt="" />
        </div>
      )}

    </>
  )
}

export default App
