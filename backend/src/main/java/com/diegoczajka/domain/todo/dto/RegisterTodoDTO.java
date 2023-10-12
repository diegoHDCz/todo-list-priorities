package com.diegoczajka.domain.todo.dto;

import com.diegoczajka.domain.todo.Assignee;
import com.diegoczajka.domain.todo.Priority;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class RegisterTodoDTO {
    @NotBlank(message = "title must not be blank")
    String title;
    @NotBlank(message = "Description must not be blank")
    String description;
    @NotBlank(message = "Assignee must not be blank")
    Assignee assignee;
    @NotBlank(message = "Priority must not be blank")
    Priority priority;
    @NotBlank(message = "Deadline must not be blank")
    LocalDateTime deadline;


    }
