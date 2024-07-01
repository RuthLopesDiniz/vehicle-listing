import React, { useState, useEffect } from 'react';
import VehicleList from './components/VehicleList';
import CarList from './components/CarList';
import AddCarForm from './components/AddCarForm';
import './App.css';

const App = () => {
  const [brands, setBrands] = useState({});
  const [cars, setCars] = useState([]);
  const [loadingBrands, setLoadingBrands] = useState(true);
  const [loadingCars, setLoadingCars] = useState(true);

  useEffect(() => {
    const fetchBrandsData = async () => {
      try {
        const response = await fetch('/cars_by_brand.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const vehicles = await response.json();
        console.log('Raw Brands Data:', vehicles);

        

        // Processamento dos dados para agrupar por marca
        const vehiclesByBrand = vehicles.reduce((acc, vehicle) => {
          const brand = vehicle.brand;
          if (!acc[brand]) {
            acc[brand] = [];
          }
          acc[brand].push(vehicle);
          return acc;
        }, {});
        setBrands(vehiclesByBrand);
      } catch (error) {
        console.error('Error fetching brands data');
      } finally {
        setLoadingBrands(false);
      }
    };

    const fetchCarsData = async () => {
      try {
        const response = await fetch('/cars.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Cars Data:', data.cars);

        if (!Array.isArray(data.cars)) {
          throw new Error('Unexpected data format: Expected an array');
        }

        setCars(data.cars);
      } catch (error) {
        console.error('Error fetching cars data:', error);
      } finally {
        setLoadingCars(false);
      }
    };

    fetchBrandsData();
    fetchCarsData();
  }, []);

  const addCar = (newCar) => {
    const brand = newCar.brand;
    setBrands(prevBrands => {
      const updatedBrands = { ...prevBrands };
      if (!updatedBrands[brand]) {
        updatedBrands[brand] = [];
      }
      updatedBrands[brand].push(newCar);
      return updatedBrands;
    });
  };

  console.log('Brands:', brands);
  console.log('Cars:', cars);

  return (
    <div className="App">
      <h1>Lista de Veículos por Marca</h1>
      
      {loadingBrands ? <p>Carregando veículos por marca...</p> : <VehicleList brands={brands} />}
      <h1>Lista de Carros</h1>
      {loadingCars ? <p>Carregando carros...</p> : <CarList cars={cars} />}
      <AddCarForm addCar={addCar} />
    </div>
  );
};

export default App;
