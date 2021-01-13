class Carros {
  constructor(marca, cilindrage, modelo) {
    this.marca = marca;
    this.cilindrage = cilindrage;
    this.modelo = modelo;
  }

  informacion() {
    return `Marca: ${this.marca}, Cilidrage: ${this.cilindrage}. Modelo: ${this.modelo} `
  }
}

export default Carros;