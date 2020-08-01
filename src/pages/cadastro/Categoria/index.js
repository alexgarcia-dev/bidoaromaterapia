import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  
  const inicialValues = {
    name: '',
    description: '',
    color: '',
  }
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(inicialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    })
  }

  function handlerChange(typedName) {
    setValue(
      typedName.target.getAttribute('name'),
      typedName.target.value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form onSubmit={function handleSubmit(typedName) {
        typedName.preventDefault();
        setCategorias([
          ...categorias,
          values
        ]);
        setValues(inicialValues);
      }}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handlerChange}
        />

        <FormField
          label="Descrição"
          type="text"
          name="description"
          value={values.description}
          onChange={handlerChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handlerChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Voltar para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;