import styled from 'styled-components'

export default({inputData, handleSubmit, btnLabel}) => (
  <Form onSubmit={handleSubmit}>
    {inputData.map((input, index) => (
      <input 
        key={index}
        id={input.id}
        type={input.type}
        placeholder={input.placeholder}
      />
    ))}
    <button>${btnLabel}</button> 
  </Form>
)

const Form = styled.form`
  input {
    width: 90%;
    padding: 10px;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid grey;
    &:hover { 
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) 
    }
  }
  
  button {
    width: 95%;
    color: #fff;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin-top: 20px;
    font-weight: bold;
    border-radius: 3px;
    background: #3f0f40;
    margin-bottom: 20px;
    &:hover{ background:#0A8D48; }
  }
`
