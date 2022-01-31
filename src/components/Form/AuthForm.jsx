import {
  Form, InputField,
  Input, Button
} from './style'

const AuthForm = props => {
  const {
    title, inputData, 
    btnLabel, onSubmit
  } = props

  return (
    <Form onSubmit={onSubmit}>
      {inputData.map((data, index) => {
        const { id, 
          type, icon,
          placeholder } = data

        return (
          <InputField key={index}>
            {icon}
            <Input 
              id={id} type={type} 
              placeholder={placeholder}/>
          </InputField>)
      })}
      <Button>{btnLabel}</Button>
    </Form>
  )
}

export default AuthForm
