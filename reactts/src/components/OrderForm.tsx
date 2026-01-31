import { useState, type ChangeEvent, type FormEvent } from "react";

interface OrderFormProps {
  onSubmit(order: { name: string; cups: number }): void; // Callback when the form is submitted
}

const OrderForm = ({ onSubmit }: OrderFormProps) => {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ name, cups });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chai-name">Chai Name</label>
      <input
        id="chai-name"
        type="text"
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <label htmlFor="chai-cups">Cups</label>
      <input
        id="chai-cups"
        type="number"
        value={cups}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setCups(Number(e.target.value) || 0)
        }
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrderForm;
