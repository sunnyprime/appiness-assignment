import React from "react";
import {
Button,
TextField,
Grid,
Paper,
Typography,
} from "@material-ui/core";
import {connect} from 'react-redux'


class Login extends React.Component {
constructor(props) {
super(props);
this.state = { username: "", password:"", authflag:1 };
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}
handleChange(event) {
this.setState({ username: event.state.username, password: event.state.password });
}
handleSubmit(event) {
event.preventDefault();

if (this.state.username === 'hruday@gmail.com' && this.state.password === 'hruday123') {
  this.props.AUTHORIZE()
} else {
alert('Incorrect Credntials!');
}
}
render() {
return (
<div>

<Grid container spacing={0} justify="center" direction="row">
<Grid item>
<Grid
container
direction="column"
justify="center"
spacing={2}
className="login-form"
>
<Paper
variant="elevation"
elevation={2}
className="login-background"
>
<Grid item>
<Typography component="h1" variant="h5">
Sign in
</Typography>
</Grid>
<Grid item>
<form onSubmit={this.handleSubmit}>
<Grid container direction="column" spacing={2}>
<Grid item>
<TextField
type="email"
placeholder="Username"
fullWidth
name="username"
variant="outlined"
value={this.state.username}
onChange={(event) =>
this.setState({
[event.target.name]: event.target.value,
})
}
required
autoFocus
/>
</Grid>
<Grid item>
<TextField
type="password"
placeholder="Password"
fullWidth
name="password"
variant="outlined"
value={this.state.password}
onChange={(event) =>
this.setState({
[event.target.name]: event.target.value,
})
}
required
/>
</Grid>
<Grid item>
<Button
variant="contained"
color="primary"
type="submit"
className="button-block"
>
Submit
</Button>
</Grid>
</Grid>
</form>
</Grid>
</Paper>
</Grid>
</Grid>
</Grid>
</div>
);
}
}

const mapDispatchToProps = (dispatch) =>{
  return {
    AUTHORIZE:()=>dispatch({type:'AUTHORIZE'})
  }
}
export default connect(null,mapDispatchToProps)(Login);