package com.diegoczajka.domain.todo.dto;

import com.diegoczajka.domain.todo.Assignee;
import com.diegoczajka.domain.todo.Priority;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UpdateTodoDTO {
    @NotNull
    Long id;
    String title;
    String description;
    Assignee assignee;
    Priority priority;
    LocalDateTime deadline;

}
