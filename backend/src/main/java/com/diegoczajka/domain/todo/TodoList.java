package com.diegoczajka.domain.todo;

import com.diegoczajka.domain.todo.dto.RegisterTodoDTO;
import com.diegoczajka.domain.todo.dto.UpdateTodoDTO;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Table(name = "todo")
@Entity(name = "TodoList")
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class TodoList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    @Enumerated(EnumType.STRING)
    private Assignee assignee;
    @Enumerated(EnumType.STRING)
    private Priority priority;
    private LocalDateTime deadline;
    private boolean active;

    public TodoList(RegisterTodoDTO todo) {
        this.title = todo.getTitle();
        this.description = todo.getDescription();
        this.assignee = todo.getAssignee();
        this.priority = todo.getPriority();
        this.deadline = todo.getDeadline();
        this.active = true;
    }

    public void updateData(UpdateTodoDTO data) {
        if (data.getTitle() != null) {
            this.title = data.getTitle();
        }
        if (data.getDescription() != null) {
            this.description = data.getDescription();
        }
        if (data.getAssignee() != null) {
            this.assignee = data.getAssignee();
        }
        if (data.getPriority() != null) {
            this.priority = data.getPriority();
        }
        if (data.getDeadline() != null) {
            this.deadline = data.getDeadline();
        }
    }
}
