const SimpleForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('form submitted');
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target.phone.value);
  };
  return (
    <div className="bg-gray-300 border-2 border-black text-center p-3 ">
      <form className="space-y-2" onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="phone" name="phone" />
        <br />
        <input
          className="bg-gray-600 text-white px-2 mt-2 font-bold"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default SimpleForm;
