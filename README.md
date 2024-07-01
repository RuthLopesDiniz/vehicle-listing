# Lista de Veículos por Marca

Esta aplicação React consome dados de duas URLs para exibir uma lista de veículos agrupados por marcas e uma lista de todos os carros. A aplicação também permite adicionar novos carros à lista.

Componentes
1. App.js
O componente principal que gerencia o estado da aplicação e faz as requisições para obter os dados.

Estado>>

brands: Um objeto que armazena veículos agrupados por marca.
cars: Um array que armazena todos os carros.
loadingBrands: Um booleano que indica se os dados das marcas estão sendo carregados.
loadingCars: Um booleano que indica se os dados dos carros estão sendo carregados.

Métodos>>

fetchBrandsData: Faz a requisição para obter os dados das marcas.
fetchCarsData: Faz a requisição para obter os dados dos carros.
addCar: Adiciona um novo carro ao estado brands.

2. VehicleList.js
Componente que recebe um objeto brands como prop e exibe uma lista de veículos agrupados por marca.
O componente VehicleList é responsável por exibir uma lista de veículos agrupados por marcas. Cada marca é exibida com uma lista de veículos associada a ela, mostrando detalhes como modelo, ano, cor, tipo de combustível e número de portas.

Props>>
brands: Objeto com veículos agrupados por marca.

3. CarList.js
Componente que recebe um array cars como prop e exibe uma lista de todos os carros.

Props>>
cars: Array de objetos de carros.

4. AddCarForm.js
Componente que contém um formulário para adicionar um novo carro.

Props>>
addCar: Função para adicionar um novo carro.

### Clonar o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
