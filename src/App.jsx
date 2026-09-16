import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import Stats from "./components/Stats";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("todos");
      if (saved) setTodos(JSON.parse(saved));
    } catch (e) {
      console.error("Error loading todos:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (e) {
      console.error("Error saving todos:", e);
    }
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setInputError("Công việc không thể trống!");
      return;
    }
    setInputError("");
    const newTodo = { id: Date.now(), text: inputValue.trim(), done: false };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const handleDeleteAll = () => {
    if (window.confirm("Bạn chắc chắn muốn xóa tất cả công việc?")) {
      setTodos([]);
    }
  };

  const filteredByStatus = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const filteredTodos = filteredByStatus.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.done).length,
    active: todos.filter((t) => !t.done).length,
  };

  return (
    <div className="app">
      <header className="app__header">
        <h1>📝 Ứng Dụng Todo</h1>
      </header>

      <main className="app__main">
        <form className="app__form" onSubmit={handleAddTodo} noValidate>
          <div className="form-group">
            <label htmlFor="todo-input">Thêm Công Việc Mới</label>
            <input
              id="todo-input"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (inputError) setInputError("");
              }}
              placeholder="Nhập nội dung công việc..."
              aria-invalid={!!inputError}
              aria-describedby={inputError ? "input-error" : undefined}
            />
            {inputError && (
              <span id="input-error" className="error" role="alert">
                {inputError}
              </span>
            )}
          </div>
          <button type="submit" className="btn btn--primary">
            Thêm
          </button>
        </form>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <FilterBar currentFilter={filter} onFilterChange={setFilter} />
        <Stats stats={stats} />

        {filteredTodos.length > 0 ? (
          <TodoList
            todos={filteredTodos}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ) : (
          <p className="empty-state">
            {todos.length === 0
              ? "Không có công việc nào. Thêm một công việc mới!"
              : "Không tìm thấy công việc phù hợp."}
          </p>
        )}

        {todos.length > 0 && (
          <button
            onClick={handleDeleteAll}
            className="btn btn--danger"
            style={{ width: "100%", marginTop: "16px" }}
          >
            Xóa Tất Cả
          </button>
        )}
      </main>
    </div>
  );
}

export default App;
