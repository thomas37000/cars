/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from 'react';
import axios from 'axios';
import CardCar from './CardCar';
import './App.css';

const CarList = () => {
  const [cars, setCars] = useState([]);

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const urlCarList = 'https://x8ki-letl-twmt.n7.xano.io/api:IZf-FMFG/cars';

  useEffect(() => {
    const loadCarList = () => {
      setLoading(true);
      axios
        .get(`${urlCarList}`)
        .then((res) => {
          setError('');
          setCars(res.data);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };

    loadCarList();
  }, []);

  const fetchCarList =
    cars &&
    cars?.map((car, i) => {
      return <CardCar key={i} carData={car} />;
    });

  if (loading) return <p>"Loading ..."</p>;
  if (error !== '') return <p>{error}</p>;
  if (!CarList) return <p>"Problème avec l' Api..."</p>;

  return (
    <div className='CarList'>
      <h2 className='mt-0 mb-2 text-5xl font-normal leading-normal text-sky-600'>
        Voitures éléctriques & Hybrides
      </h2>

      <div className='flex flex-wrap space-x-4 space-y-4'>{fetchCarList}</div>
    </div>
  );
};

export default CarList;
