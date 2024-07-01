import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddCarForm.css';

const AddCarForm = ({ addCar }) => {
  const [car, setCar] = useState({
    id: '',
    timestamp_cadastro: '',
    modelo_id: '',
    ano: '',
    combustivel: '',
    num_portas: '',
    cor: '',
    nome_modelo: '',
    valor: '',
    brand: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar(prevCar => ({
      ...prevCar,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCar(car);
    setCar({
      id: '',
      timestamp_cadastro: '',
      modelo_id: '',
      ano: '',
      combustivel: '',
      num_portas: '',
      cor: '',
      nome_modelo: '',
      valor: '',
      brand: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-car-form">
      <h2>Adicionar Novo Carro</h2>
      <label>
        ID:
        <input type="number" name="id" value={car.id} onChange={handleChange} required />
      </label>
      <label>
        Timestamp Cadastro:
        <input type="number" name="timestamp_cadastro" value={car.timestamp_cadastro} onChange={handleChange} required />
      </label>
      <label>
        Modelo ID:
        <input type="number" name="modelo_id" value={car.modelo_id} onChange={handleChange} required />
      </label>
      <label>
        Ano:
        <input type="number" name="ano" value={car.ano} onChange={handleChange} required />
      </label>
      <label>
        Combustível:
        <input type="text" name="combustivel" value={car.combustivel} onChange={handleChange} required />
      </label>
      <label>
        Número de Portas:
        <input type="number" name="num_portas" value={car.num_portas} onChange={handleChange} required />
      </label>
      <label>
        Cor:
        <input type="text" name="cor" value={car.cor} onChange={handleChange} required />
      </label>
      <label>
        Nome Modelo:
        <input type="text" name="nome_modelo" value={car.nome_modelo} onChange={handleChange} required />
      </label>
      <label>
        Valor:
        <input type="number" name="valor" value={car.valor} onChange={handleChange} required />
      </label>
      <label>
        Marca ID:
        <input type="number" name="brand" value={car.brand} onChange={handleChange} required />
      </label>
      <button type="submit">Adicionar Carro</button>
    </form>
  );
};

AddCarForm.propTypes = {
  addCar: PropTypes.func.isRequired
};

export default AddCarForm;
