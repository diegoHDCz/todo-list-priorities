package com.diegoczajka.domain.todo;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoListRepository extends JpaRepository<TodoList, Long> {
    Page<TodoList> findAllByActive(boolean active, Pageable pageable);
}
