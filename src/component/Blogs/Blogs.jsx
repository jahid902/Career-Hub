import React from "react";

const Blogs = () => {
  return (
    <div className="bg-slate-300 p-4 md:p-8 font-serif">
      <div className="p-3 rounded-md my-4 bg-purple-500 text-white">
        <h1 className="text-xl font-bold">When should you use context API?</h1>
        <p>
          Context is a built-in API introduced in React 16.3. It makes it
          possible to pass data from parent to children nested deep down the
          component tree directly, instead of passing it down through a chain of
          props. It can be used to solve the same problems as Redux does, but it
          doesn't provide a strict way of state manipulation to ensure
          predictable behavior. Despite its low-level nature, it might be the
          perfect solution in some cases.
        </p>
      </div>
      <div className="p-3 rounded-md my-4 bg-purple-500 text-white">
        <h1 className="text-xl font-bold">What is a custom hook?</h1>
        <p>
          A custom hook is a special JavaScript function whose name starts with
          'use' and can be used to call other hooks.Custom React JS hooks are
          reusable functions that a React JS software developer can use to add
          special and unique functionality to the React applications. Usually,
          if there is a requirement to add a feature, one can install a
          third-party library and solve the problem. But what if there is no
          such library with hooks that can be used? This problem is solved by
          using custom React JS hooks.
        </p>
      </div>
      <div className="p-3 rounded-md my-4 bg-purple-500 text-white">
        <h1 className="text-xl font-bold">What is useRef?</h1>
        <p>
          useRef(initialValue) is a built-in React hook that accepts one
          argument as the initial value and returns a reference (aka ref). A
          reference is an object having a special property
          current.reference.current accesses the reference value, and
          reference.current = newValue updates the reference value. Pretty
          simple.
        </p>
      </div>
      <div className="p-3 rounded-md my-4 bg-purple-500 text-white">
        <h1 className="text-xl font-bold">What is useMemo?</h1>
        <p>
          The useMemo is a hook used in the functional component of react that
          returns a memoized value. In Computer Science, memoization is a
          concept used in general when we don't need to recompute the function
          with a given argument for the next time as it returns the cached
          result. A memoized function remembers the results of output for a
          given set of inputs. For example, if there is a function to add two
          numbers, and we give the parameter as 1 and 2 for the first time the
          function will add these two numbers and return 3, but if the same
          inputs come again then we will return the cached value i.e 3 and not
          compute with the add function again. In react also, we use this
          concept, whenever in the React component, the state and props do not
          change the component and the component does not re-render, it shows
          the same output. The useMemo hook is used to improve performance in
          our React application.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
