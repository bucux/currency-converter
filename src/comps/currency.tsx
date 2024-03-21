

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const down = formData.get('down') as string;
  const up = formData.get('down') as string;
  console.log(down)
  console.log(up)
};

<form id="formulaire" onSubmit={handleSubmit}>
  <input
  type="submit"
  name="down"
  value="down"
  />
  <input
  type="submit"
  name="up"
  value="up"
  />
</form>