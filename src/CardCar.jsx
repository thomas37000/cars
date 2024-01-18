/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const CarCard = (props) => {
  const {
    image,
    car_name,
    car_brand,
    year,
    electric,
    hybrid,
    speed,
    used_price,
  } = props.carData;

  return (
    <div className='bg-white p-4 rounded-md shadow-md'>
      <img
        className='w-full h-40 object-cover mb-4 rounded-md'
        src={image.url}
        alt={car_name}
      />
      <h2 className='text-xl font-semibold mb-2'>{car_name}</h2>
      <p>
        <span className='font-semibold'>Marque:</span> {car_brand}
      </p>
      <p>
        <span className='font-semibold'>Année:</span> {year}
      </p>
      <p>
        <span className='font-semibold'>Électrique:</span>{' '}
        {electric ? 'Oui' : 'Non'}
      </p>
      <p>
        <span className='font-semibold'>Hybride:</span> {hybrid ? 'Oui' : 'Non'}
      </p>
      <p>
        <span className='font-semibold'>Vitesse:</span> {speed} km/h
      </p>
      <p>
        <span className='font-semibold'>Prix neuf:</span> {used_price} €
      </p>
    </div>
  );
};

export default CarCard;
