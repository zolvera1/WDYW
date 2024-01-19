import { useForm, Controller, FormState } from "react-hook-form";
import axios from 'axios';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  FormHelperText,
  FormGroup,
  FormLabel,
  CircularProgress,
  Grid,
  Paper,
} from '@mui/material';
import { usStates, IState, dollarValues, IFormData, IYelpBusiness } from '../utils/global';

type FormProps = {
  onFormSubmit: (data: IYelpBusiness|null, e?:unknown) => void;

}

const headers = {
  'Content-Type': 'application/json',
};

const Form = ({ onFormSubmit }: FormProps) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    defaultValues: {
      state: '',
      address: '',
      city: '',
      radius: 0,
      priceRange: [],
    },
    mode: "onBlur",
    criteriaMode: "all",
  });


  const onSubmit = async (formData: IFormData) => {
    try {
      const { data} = await axios.post<IYelpBusiness>('https://peppy-yeot-62e11d.netlify.app/',  formData, { headers: headers });
      onFormSubmit(data, null);

    }
    catch (e: any) {
     console.log(e)
     onFormSubmit(null, e)

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Paper id="wdyw-form" elevation={0} style={{ padding: '16px', textAlign: 'center' }}>
        <Grid direction="column" container justifyContent="center" spacing={3}>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth >
              <TextField
                label="Address"
                {...register("address", { required: true })}
              />
              {errors.address && <FormHelperText error>This field is required</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth >
              <TextField
                label="City"
                {...register("city", { required: true })}
              />
              {errors.city && <FormHelperText error>This field is required</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth >
              <InputLabel>State</InputLabel>
              <Controller
                defaultValue=''
                name='state'
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <Select {...field}>
                    {usStates.map((state: IState) => (
                      <MenuItem key={state.id} value={state.abbreviation}>{state.name}</MenuItem>
                    ))}
                  </Select>
                )}
              />
              {errors.state && <FormHelperText error>This field is required</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth >
              <TextField
                type="number"
                label="Radius (in miles)"
                {...register("radius", { required: true, min: {
                  value: 0, message: 'Input a value greater than 0'
                }})}
              />
              {errors.radius?.type==="required" && <FormHelperText error>This field is required</FormHelperText>}
              {errors.radius?.type==="min" && <FormHelperText error>Input a number greater than 0</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid item xs={12} alignSelf="center">
            <FormControl fullWidth >
              <FormLabel >Price Range</FormLabel>
              <FormGroup row>
                {Object.keys(dollarValues).map((k) => (
                  <FormControlLabel
                    key={dollarValues[k]}
                    control={
                      <Checkbox
                        {...register("priceRange", { required: true })}
                        value={dollarValues[k]}
                      />
                    }
                    label={`${k}`}
                  />
                ))}
              </FormGroup>
              {errors.priceRange && <FormHelperText error>This field is required</FormHelperText>}
            </FormControl>
          </Grid>
          <Grid style={{ textAlign: "center" }} item xs={12} sm={12}>
            {isSubmitting ? <CircularProgress size={24} /> : <Button variant="contained" type="submit">Go</Button>}
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}
export default Form;