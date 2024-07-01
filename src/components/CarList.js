import React from 'react';
import PropTypes from 'prop-types';
import './CarList.css';

const CarList = ({ cars }) => {
  return (
    <div className="car-list">
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            {car.nome_modelo} - {car.ano} - {car.cor} - R$ {car.valor.toLocaleString('pt-BR')}
          </li>
        ))}
      </ul>
    </div>
  );
};

CarList.propTypes = {
  cars: PropTypes.array.isRequired,
};

export default CarList;
