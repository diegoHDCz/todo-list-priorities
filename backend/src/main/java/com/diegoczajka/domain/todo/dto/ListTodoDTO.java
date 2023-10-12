package com.diegoczajka.domain.todo.dto;

import com.diegoczajka.domain.todo.Assignee;
import com.diegoczajka.domain.todo.TodoList;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ListTodoDTO {
    private Long id;
    private String title;
    private Assignee assignee;

    public ListTodoDTO(TodoList todo) {
        this.id = todo.getId();
        this.title = todo.getTitle();
        this.assignee = todo.getAssignee();
    }
}
