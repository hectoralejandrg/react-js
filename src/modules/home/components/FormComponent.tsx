import { useFormik } from "formik";
import * as Yup from "yup";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

// Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Nombre muy corto")
    .required("Nombre es requerido"),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Genero inválido")
    .required("Genero es requerido"),
  quantity: Yup.number()
    .min(1, "Cantidad no puede ser menor a 1")
    .max(100, "Cantidad no puede ser mayor a 100")
    .required("Cantidad es requerida"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Correo es requerido"),
});

// Interface for form values
interface FormValues {
  name: string;
  gender: string;
  quantity: number;
  email: string;
}

const FormComponent = () => {
  const { touched, errors, handleSubmit, getFieldProps } =
    useFormik<FormValues>({
      initialValues: {
        name: "",
        gender: "",
        quantity: 0,
        email: "",
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        console.log("Form Submitted", values);
      },
    });

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <Grid container spacing={2} width={400}>
        {/* Name Field */}
        <TextField
          label="Nombres"
          fullWidth
          {...getFieldProps("name")}
          error={touched.name && !!errors.name}
          helperText={touched.name && errors.name}
        />

        {/* Gender Field */}
        <FormControl
          variant="outlined"
          fullWidth
          error={touched.gender && !!errors.gender}
        >
          <InputLabel>Genero</InputLabel>
          <Select label="Gender" {...getFieldProps("gender")}>
            <MenuItem value="">Select Gender</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
          {touched?.gender && errors?.gender && (
            <FormHelperText>{errors?.gender}</FormHelperText>
          )}
        </FormControl>

        {/* Quantity Field */}
        <TextField
          label="Quantity"
          type="number"
          fullWidth
          {...getFieldProps("quantity")}
          error={touched.quantity && !!errors.quantity}
          helperText={touched.quantity && errors.quantity}
        />

        {/* Email Field */}
        <TextField
          label="Correo Electrónico"
          type="email"
          fullWidth
          {...getFieldProps("email")}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          className="bg-gray-50"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          className="py-3 font-semibold"
        >
          Guardar
        </Button>
      </Grid>
    </form>
  );
};

export default FormComponent;
