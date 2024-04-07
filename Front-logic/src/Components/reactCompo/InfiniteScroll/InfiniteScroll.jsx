import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`
        );
        const newTodos = await response.json();
        setTodos((prevTodos) => [...prevTodos, ...newTodos]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setLoading(false);
      }
    };

    fetchTodos();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
      console.log("trigered")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.id}</p>
          <p>{todo.title}</p>
        </div>
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default InfiniteScroll;
