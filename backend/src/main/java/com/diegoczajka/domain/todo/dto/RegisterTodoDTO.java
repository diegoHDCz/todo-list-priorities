package com.diegoczajka.domain.todo.dto;

import com.diegoczajka.domain.todo.Assignee;
import com.diegoczajka.domain.todo.Priority;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
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
    @NotNull(message = "Assignee must not be blank")
    Assignee assignee;
    @NotNull(message = "Priority must not be blank")
    Priority priority;

    @NotNull
    @FutureOrPresent(message = "cannot register past date")
    LocalDateTime deadline;


}
