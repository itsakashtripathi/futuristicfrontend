"use client";
import 'bootstrap/dist/css/bootstrap.css';
import { saveRecepie } from './services/recepie.service';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Recepie from './components/Recepie.jsx';

export default function Home() {

  const router = useRouter();

  const [value, setValue] = useState('')
  const [url, setUrl] = useState('')
  const [recepies, setRecepies] = useState([])

  useEffect(() => {
    setUrl("http://www.indianhealthyrecipes.com/" + value)
  }, [value])

  useEffect(() => {
    const recepies = JSON.parse(localStorage.getItem('recepies'));
    if (recepies) setRecepies(recepies);
  }, [])

  const processSaveRecepie = async (url) => {
    const recepie = await saveRecepie(url);
    console.log(recepie);
    setRecepies([...recepies, recepie.data.data]);
    localStorage.setItem('recepies', JSON.stringify([...recepies, recepie.data.data]));
  }

  return (
    <>
      <div className="container mt-5 col-6">
        <label htmlFor="basic-url" className="form-label">Your Recepie URL</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">http://www.indianhealthyrecipes.com/</span>
            <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" onChange={(e) => {setValue(e.target.value)}} value={value} />
            &nbsp;
            <button type="button" className="btn btn-primary" onClick={() => processSaveRecepie(url)}>Save Recepie</button>
          </div>
          <div className='mt-5'>
            {
              recepies?.map((recepie) => (
                <Recepie recepie={recepie} key={recepie.id} onClick={() => router.push({pathname: `/recepie/${recepie.id}`, query: { data: recepie },})} />
              ))
            }
          </div>
      </div>
    </>
  );
}
