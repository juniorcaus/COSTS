import React from 'react'

function ProjectForm() {
  return (
    <form>
        <div>
            <input type='text' placeholder='Insira o nome do projeto' />      
        </div>

        <div>
            <input type='number' placeholder='Insara o orçamento total' /> 
        </div>

        <div>
            <select name='Category_id'>
                <option disabled >Selecione a Categoria</option>    
            </select> 
        </div>

        <div> 
            <input type='submit' value='Criar Projeto' />
        </div>

    </form>
  )
}

export default ProjectForm;