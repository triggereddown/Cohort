import React from "react";

const TwoWayBinding = () => {
  const onSubmitHandler = (e) => {
    //3---Receiving the input inside the handler function and stopping its default nature
    e.preventDefault();
    console.log("Form submitter");
  };

  return (
    <div>
      <form
        // 1---Getting event input or e
        onSubmit={(e) =>
          //2---Passing it to the function
          {
            onSubmitHandler(e);
          }
        }
        action=""
      >
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className="border border-amber-900 p-4"
          type="text"
          placeholder="Enter your text"
        />
        <button className="p-2 bg-black text-amber-50 ">Submit</button>
      </form>
    </div>
  );
};

export default TwoWayBinding;
