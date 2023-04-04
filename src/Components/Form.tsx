import { useForm, Controller } from "react-hook-form";
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
} from '@mui/material';
import { usStates, IState, dollarValues, IFormData, IYelpBusiness } from '../utils/utils';

type FormProps = {
  onFormSubmit: (data: IYelpBusiness) => void;
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
    formState: { errors, isSubmitting },
  } = useForm<IFormData>({
    defaultValues: {
      state: 'AL',
      address: '',
      city:'',
      radius: 0,
      priceRange: [],
    },
    mode: "onBlur",
    criteriaMode: "all",
  });

  const onSubmit = async (formData: IFormData) => {
    try {
      const { data, status } = await axios.post<IYelpBusiness>('http://localhost:3001/api', formData, { headers: headers });
      console.log(data);
      onFormSubmit(data);
      console.log(status);
    }
    catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth error={!!errors.address}>
            <TextField
              label="Address"
              {...register("address", { required: true })}
            />
            {errors.address && <FormHelperText>This field is required</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth error={!!errors.city}>
            <TextField
              label="City"
              {...register("city", { required: true })}
            />
            {errors.city && <FormHelperText>This field is required</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth error={!!errors.state}>
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
            {errors.state && <FormHelperText>This field is required</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.radius}>
            <TextField
              type="number"
              label="Radius"
              {...register("radius", { required: true })}
            />
            {errors.radius && <FormHelperText>This field is required</FormHelperText>}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.priceRange}>
            <FormLabel component="legend">Price Range</FormLabel>
            <FormGroup>
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
            {errors.priceRange && <FormHelperText>This field is required</FormHelperText>}
          </FormControl>
        </Grid>
        {isSubmitting ? <CircularProgress size={24} /> : <Button type="submit">Submit</Button>}
      </Grid>
    </form>
  )
}
export default Form;