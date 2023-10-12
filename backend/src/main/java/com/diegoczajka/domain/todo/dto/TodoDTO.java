package com.diegoczajka.domain.todo.dto;

import com.diegoczajka.domain.todo.Assignee;
import com.diegoczajka.domain.todo.Priority;
import com.diegoczajka.domain.todo.TodoList;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class TodoDTO {
    private Long id;
    private String title;
    private String description;

    private Assignee assignee;

    private Priority priority;
    private LocalDateTime deadline;

    public static TodoDTO toDto(TodoList todo) {
        return TodoDTO.builder()
                .id(todo.getId())
                .title(todo.getTitle())
                .description(todo.getDescription())
                .assignee(todo.getAssignee())
                .priority(todo.getPriority())
                .deadline(todo.getDeadline())
                .build();
    }
}
