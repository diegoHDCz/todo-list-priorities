package com.diegoczajka.domain.todo;


import java.time.LocalDateTime;

public record ResponseTodoData(
        Long id,
        String title,
        String description,
        String assignee,

        Priority priority,
        LocalDateTime deadline,
        boolean active
) {
    public ResponseTodoData(TodoList todo) {
        this(todo.getId(), todo.getTitle(), todo.getDescription(), todo.getAssignee(), todo.getPriority(), todo.getDeadline(), todo.isActive());
    }
}
