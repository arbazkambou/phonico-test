function FormError({ message }: { message: string | undefined }) {
  return <p className=" font14 ms-2 text-danger">{message}</p>;
}

export default FormError;
