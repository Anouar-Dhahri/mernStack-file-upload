import React, {useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from "axios";
import style from './Body.module.css';


function Body() {
    const [file, setFile] = useState('');
    AOS.init();

    const upload = async () => {
        const formData = new FormData();
        formData.append("file", file);
        try {
            const res = await axios.post(
              'http://localhost:5100/api/addFile',
              formData
            );
            setFile('')
            alert(res.data)
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className={style.container}>
            <div className={style.container_upload} data-aos="fade-right" >
                <form action="" method="POST">
                    <input type="file" id="actual-btn" onChange={e => setFile(e.target.files[0])} />
                    <button type="button" onClick={upload}> Upload</button>
                </form>
            </div>
        </div>
    )
}

export default Body
