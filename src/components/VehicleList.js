import React from 'react';

const VehicleList = ({ brands }) => {
  return (
    <div>
      {Object.keys(brands).map(brand => (
        <div key={brand}>
          <h2>{brand}</h2>
          <ul>
            {brands[brand].map(vehicle => (
              <li key={vehicle.id}>
                {vehicle.nome_modelo} - {vehicle.ano} - {vehicle.cor} - {vehicle.combustivel} - {vehicle.num_portas} portas
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default VehicleList;
