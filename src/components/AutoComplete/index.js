import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { debounceMethod } from '../../utils/common';

/**
 * 
 * @param props { value, onChange, validationKey, label, options, onChangeText, disabled, searchType, placeholder } 
 * @returns JSX
 */
const MaterialSearchDropdown= (props) => {
  // props destructuring
  const { value, onChange, validationKey, label, options, onChangeText, disabled, searchType, placeholder } = props;
  // input chnage value in input field
  const handleChangeInput = (e, value) => {
    onChange(value);
  }

  const updateDebouceText = React.useCallback(debounceMethod(onChangeText,100),[])

  return (
    <>
      <Stack spacing={3}>
        <label htmlFor="mui_search_multiple_select">{label}</label>
        <Autocomplete
          multiple
          id="mui_search_multiple_select"
          aria-label={label}
          options={options?.length?options:[{text:"",value:""}]}
          getOptionLabel={(option) => option.text}
          value={ value }
          onChange={handleChangeInput}
          // onInputChange={(e:any)=>{handleChangeInput(e, e?.target?.value||[])}}
          filterSelectedOptions
          disabled={disabled}
          style={{
            marginTop:'0.25rem'
          }}
          sx={{
            '& .MuiOutlinedInput-root' :{
              padding:'3px !important',
              fontSize:'14px',
            },
            '& .MuiOutlinedInput-notchedOutline' : {
              border :'1px solid #EBEEF3'
            },
            '&:hover .MuiOutlinedInput-notchedOutline':{
              border : '1px solid #3466E5 !important'
            },
            '&:focus-within .MuiOutlinedInput-notchedOutline':{
              border :"1px solid #3466E5 !important",
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              // label={label}
              placeholder={placeholder||'Type to search'}
              onChange={updateDebouceText}
            />
          )}
        />
      </Stack>
    </>
  );
}

export default MaterialSearchDropdown;
