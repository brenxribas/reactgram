import './Auth.css';

// components
import { Link } from 'react-router-dom';
import Message from '../../components/Message';

// hooks
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// redux
import { register, reset } from '../../slices/authSlice';

const Register = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);


  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword
    };

    console.log(user);
    dispatch(register(user));
  }

  // clean all auth states
  useEffect(() => {
    dispatch(reset());
  }, [dispatch])

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos!</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder='Nome' onChange={(e) => setName(e.target.value)} value={name || ""} />
        <input type="email" name="" id="" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} value={email || ""} />
        <input type="password" name="" id="" placeholder='Senha' onChange={(e) => setPassword(e.target.value)} value={password || ""} />
        <input type="password" name="" id="" placeholder='Confirme a Senha' onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword || ""} />
        {!loading && <input type="submit" value="Cadastrar" />}
        {loading && <input type="submit" value="Aguarde um momento..." disabled />}
        {error && <Message msg={error} type="error" />}

      </form>

      <p>Já tem conta? <Link to="/login">Clique aqui.</Link></p>
    </div>
  )
}

export default Register