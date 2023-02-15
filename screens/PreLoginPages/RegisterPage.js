import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const RegisterPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [Savy, setSavy] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    console.log(Savy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Controller
        control={control}
        name="firstName"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.firstName && (
        <Text style={styles.error}>First Name is required.</Text>
      )}
      <Controller
        control={control}
        name="lastName"
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.lastName && (
        <Text style={styles.error}>Last Name is required.</Text>
      )}
      <Controller
        control={control}
        name="email"
        rules={{ required: true, pattern: /^\S+@\S+$/i }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.email && (
        <Text style={styles.error}>
          Email is required and must be a valid email address.
        </Text>
      )}
      <Controller
        control={control}
        name="phoneNumber"
        rules={{ required: true, pattern: /^\d{10}$/ }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Phone Number (10 digits)"
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      {errors.phoneNumber && (
        <Text style={styles.error}>
          Phone Number is required and must be a 10-digit number.
        </Text>
      )}

      <Controller
        control={control}
        name="password"
        rules={{ required: true, minLength: 8 }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={value}
            secureTextEntry={true}
            onChangeText={onChange}
          />
        )}
      />
      {errors.password && (
        <Text style={styles.error}>
          Password is required and must be at least 8 characters.
        </Text>
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Can you help here plz!</Text>
        <Switch value={Savy} onValueChange={setSavy} />
        <Text style={styles.label}>I'm here to give back!</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    height: 40,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default RegisterPage;
