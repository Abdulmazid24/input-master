import { useState } from 'react';

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [text, setText] = useState();
  console.log(text);
  console.log(phone);
  console.log(password);
  console.log(email);
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleEmailChange = e => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };
  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };
  const handleTextChange = e => {
    setText(e.target.value);
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-300 border-2 border-gray-500 p-5 rounded-lg"
      >
        <p className="font-semibold">Name: </p>
        <input
          onChange={handleTextChange}
          className=" border-2 border-gray-300 rounded-md"
          type="text"
          name="text"
        ></input>
        <br />
        <p className="font-semibold">Email: </p>
        <input
          onChange={handleEmailChange}
          className="  border-2 border-gray-300 rounded-md"
          type="email"
          name="email"
        />
        <br />
        <p className="font-semibold">Phone: </p>
        <input
          onChange={handlePhoneChange}
          className=" border-2 border-gray-300 rounded-md"
          type="phone"
          name="phone"
        />
        <br />
        <p className="font-semibold">Password: </p>
        <input
          onChange={handlePasswordChange}
          className=" border-2 border-gray-300 rounded-md"
          type="password"
          name="password"
        />
        <br />
        <input
          className="m-2  bg-gray-600 text-white font-semibold px-2 rounded-md"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default StatefulForm;
