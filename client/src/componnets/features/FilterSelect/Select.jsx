import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectComponent = ({label,value,setValue,options})=> {

    const classes = useStyles();


    const handleChange = (e)=>{
            setValue(e.target.value)
    }
    return (
        <div>
               <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((option) => {
                        return <MenuItem value={option}>{option}</MenuItem>
                    })}
                </Select>
            </FormControl>
            
        </div>
    )
}

export default SelectComponent
