package com.diegoczajka.domain.todo;

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
    private String assignee;
    @Enumerated(EnumType.STRING)
    private Priority priority;
    private LocalDateTime deadline;
    private boolean active;

    public TodoList(DataRegisterTodo data) {
        this.title = data.title();
        this.description = data.description();
        this.assignee = data.assignee();
        this.priority = data.priority();
        this.deadline = data.deadline();
        this.active = true;
    }
}
