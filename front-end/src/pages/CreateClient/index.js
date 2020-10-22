import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Header from "../../components/Header";
import api from "../../services/api";
import axios from "axios";

import "./styles.css";


const CreateClient = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");

  async function getStates() {
    const response = await axios.get(
      "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    );
    setStates(response.data);
  }
  
  async function handleStateChange(sigla) {
    const response = await axios.get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${sigla}/municipios`
    );
    setCities(response.data);
    setSelectedState(sigla);
  }

  function handleCityChange(event) {
    const city = event.target.value;
    setSelectedCity(city);
  }
  function handleSubmit(e) {
    e.preventDefault();
    api.post("/cliente", {
      cidadeCliente: selectedCity,
      enderecoCliente: clientAddress,
      estadoCliente: selectedState,
      matriculaEstudante: studentId,
      nomeCliente: clientName,
      nomeEstudante: studentName,
    });
    swal({
      title: "Sucesso!",
      text: "Cliente cadastrado com suceso!",
      icon: "success",
    }).then(() => {
      clearFields()
    });
  }

  function clearFields(){
    setStudentName('')
    setStudentId('')
    setClientName('')
    setClientAddress('')
  }

  useEffect(() => {
    getStates();
  }, []);
  return (
    <>
      <div id="page-create-point">
        <Header/>
        <form id="form" onSubmit={handleSubmit}>
          <h1>
            Cadastro de
            <br /> Cliente
          </h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>
            <div className="field">
              <label htmlFor="clientName"> Nome do Cliente</label>
              <input
                onChange={(e) => {
                  setClientName(e.target.value);
                }}
                value={clientName}
                type="text"
                name="clientName"
                id="clientName"
              />
            </div>
            <div className="field-group">
              <div className="field">
                <label htmlFor="studentName">CNPJ/CPF</label>
                <input
                  onChange={(e) => {
                    setStudentName(e.target.value);
                  }}
                  value={studentName}
                  type="text"
                  name="studentName"
                  id="studentName"
                />
              </div>
              <div className="field">
                <label htmlFor="studentId">Número</label>
                <input
                  onChange={(e) => {
                    setStudentId(e.target.value);
                  }}
                  value={studentId}
                  type="number"
                  name="studentId"
                  id="studentId"
                />
              </div>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <h2>Endereço</h2>
            </legend>
            <div className="field-group">
              <div className="field">
                <label htmlFor="uf">Estado (UF)</label>
                <select
                  onChange={(e) => {
                    handleStateChange(e.target.value);
                  }}
                  value={selectedState}
                  name="uf"
                  id="uf"
                >
                  <option value="0">Selecione um UF</option>
                  {states.map((state) => (
                    <option key={state.id} value={state.sigla}>
                      {state.sigla}
                    </option>
                  ))}
                </select>
              </div>
              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select
                  value={selectedCity}
                  onChange={handleCityChange}
                  name="city"
                  id="city"
                >
                  <option value="0">Selecione uma Cidade</option>
                  {cities.map((city) => (
                    <option key={city.id} value={city.nome}>
                      {city.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="field">
              <label htmlFor="clientAddress"> Endereço do Cliente</label>
              <input
                onChange={(e) => {
                  setClientAddress(e.target.value);
                }}
                value={clientAddress}
                type="text"
                name="clientAddress"
                id="clientAddress"
              />
            </div>
          </fieldset>

          <button type="submit">Cadastrar cliente</button>
        </form>
      </div>
    </>
  );
};

export default CreateClient;
