import React, { useState } from 'react';
import './styles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function RegisterUserUi(props) {
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div>
            <header>
                <Button variant="contained" color="primary" href="/">
                    <ArrowBackIcon />
                </Button>

                <h2 className="header2">Realize um cadastro</h2>
            </header>
            <form className="form">
                <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-search" label="Nome Completo" type="search" variant="outlined" /><br /><br />
                <TextField value={cpf} onChange={(event) => setCpf(event.target.value)} id="outlined-search" label="CPF" type="search" variant="outlined" /><br /><br />
                <TextField value={phone} onChange={(event) => setPhone(event.target.value)} id="outlined-search" label="Telefone" type="search" variant="outlined" /><br /><br />
                <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="outlined-search" label="Email" type="search" variant="outlined" /><br /><br />
                <Button onClick={() => {
                    const item = { name, cpf, phone, email };
                    props.addItemCallBack(item)
                }} variant="contained" color="primary" size="large" href="/">
                    Cadastrar
                </Button>
            </form>
        </div>
    );
}

export default RegisterUserUi;