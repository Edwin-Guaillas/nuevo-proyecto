import { Grid, Typography, TextField, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import Box from "@mui/material/Box";
import "./Styles-login.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 290,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};
const LoginPrincipal = () => {
  const [body, setBody] = useState({ usuario: "", password: "" });
  const handleChange = (e: any) => {
    setBody({
      ...body,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = () => {
    console.log(body);
  };
  return (
    <Grid container component="main">
      <Box sx={style}>
        <div className="div">
          <LockIcon sx={{ fontSize: 40 }} />
          <Typography component="h1" variant="h5">
            Bienvenido
          </Typography>
        </div>
        <form>
          <TextField
            fullWidth
            autoFocus
            color="primary"
            margin="normal"
            variant="outlined"
            label="Usuario"
            name="usuario"
            value={body.usuario}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            type="password"
            color="primary"
            margin="normal"
            variant="outlined"
            label="Contraseña"
            name="password"
            value={body.password}
            onChange={handleChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => onSubmit()}
          >
            Ingresar
          </Button>
        </form>
      </Box>
    </Grid>
  );
};

export default LoginPrincipal;
