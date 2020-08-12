import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import './styles.css';


function HomeUi(props) {
  const data = props.data != null || props.data != undefined ? props.data : [];

  return (
    <div>
      <header>
        <h2 className="header">Criarenet</h2>

        <Button variant="contained" color="primary" href="/register">
          <AddIcon />
        </Button>
      </header>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">CPF</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Telefone</TableCell>
              <TableCell align="center">Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.cpf}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center"><Button onClick={() => props.removeItemCallBack(row.id)} variant="contained" color="secondary" href="">
                  <DeleteIcon />
                </Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default HomeUi;
