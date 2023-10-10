package com.diegoczajka.domain.todo;

import jakarta.validation.constraints.NotBlank;

import java.time.LocalDateTime;

public record DataRegisterTodo(
        @NotBlank
        String title,
        @NotBlank
        String description,
        @NotBlank
        String assignee,
        @NotBlank
        Priority priority,
        @NotBlank
        LocalDateTime deadline

) {
}
