import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Container from '@material-ui/core/Container'
import AcUnitSharpIcon from '@material-ui/icons/AcUnitSharp';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import { FormControlLabel, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import {useHistory} from 'react-router-dom';

 const useStyles = makeStyles({
   field:{
     marginTop: 20,
     marginBottom: 20,
     display: 'block'
   }
//   btn:{
//     fontSize:20,
//     backgroundColor:'green',
//     '&:hover':{
//       backgroundColor : 'blue'
//     }
//   },
//   title:{
//     textDecoration:'underline',
//     marginBottom:10
//   }
 });

export default function Create() {
  const classes = useStyles();
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');

  const handleSubmit = (e)=>{
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    if(title == ''){ 
      setTitleError(true)    }
    if(details == ''){ 
        setDetailsError(true)    }
    if(title && details){
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => history.push('/'))
    }
  }

  return (
    <Container>

    <Typography
    className={classes.title}
    variant='h6'
    component='h2'
    color='textSecondary'
    gutterBottom  
    >
      Create a New Note
    </Typography>

  <form noValidate autoComplete="off" onSubmit={handleSubmit} >
    <TextField 
    onChange= {(e)=> setTitle(e.target.value)}
    className={classes.title}
    variant="outlined"
    label="Note Title"
    color='secondary'
    fullWidth
    required
    error={titleError}
    />
  <TextField 
    onChange= {(e)=> setDetails(e.target.value)}
      className={classes.field}
      variant="outlined"
      label="Details"
      color='secondary'
      fullWidth
      required
      multiline
      rows={4}
      error={detailsError}
      />
    <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)} > 
      <FormControlLabel value='money' control={<Radio />} label='Money' />
      <FormControlLabel value='todos' control={<Radio />} label='Todos' />
      <FormControlLabel value='reminders' control={<Radio />} label='Reminders' />
      <FormControlLabel value='work' control={<Radio />} label='Work' />
    </RadioGroup>
  <Button 
    //className={classes.btn}
    //onClick={()=>{ alert('Clicked') }}
    type='submit' 
    color='secondary' 
    variant='contained'
    startIcon={<ArrowForwardIcon/>}
    endIcon={<KeyboardArrowRightOutlinedIcon/>}
    >
    Submit
    </Button>

  </form>


    <br/>
    {/* Icons */}
    {/* <AcUnitSharpIcon/>
    <AcUnitSharpIcon color='primary'  />
    <AcUnitSharpIcon color='secondary' fontSize='large' />
    <AcUnitSharpIcon color='secondary' fontSize='small' />
    <AcUnitSharpIcon color='disabled' fontSize='small' /> */}


    {/* <Button type='submit' color='primary'>Submit</Button>
    <Button type='submit' color='secondary'  variant='outlined'>Submit</Button>

    <ButtonGroup color='secondary' variant='contained'>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup> */}

      {/* <Typography 
      variant='h1'
      color='primary'
      align='center'
      >
        Create a new note
      </Typography> */}

{/* <Typography 
      noWrap
      color='secondary'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur officiis maiores in corporis quae voluptatem nihil architecto error, eos quis aperiam voluptas distinctio repellendus delectus totam, recusandae libero molestiae soluta?
      </Typography> */}

    </Container>
  )
}
