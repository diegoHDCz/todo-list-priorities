package com.diegoczajka.controller;

import com.diegoczajka.domain.todo.dto.*;
import com.diegoczajka.domain.todo.TodoList;
import com.diegoczajka.domain.todo.TodoListRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoListRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity registarTask(@RequestBody @Valid RegisterTodoDTO data, UriComponentsBuilder uriComponentsBuilder) {

        var todo = new TodoList(data);
        repository.save(todo);
        var uri = uriComponentsBuilder.path("/todo/{id}").buildAndExpand(todo.getId()).toUri();
        return ResponseEntity.created(uri).body(TodoDTO.toDto(todo));
    }

    @GetMapping
    public ResponseEntity<Page<TodoDTO>> list(@PageableDefault(size = 10, sort = {"id"}) Pageable pagenation) {
        var page = repository.findAllByActive(true,pagenation).map(TodoDTO::new);
        return ResponseEntity.ok(page);
    }

    @PutMapping
    @Transactional
    public ResponseEntity update(@RequestBody @Valid UpdateTodoDTO data) {
        var todo = repository.getReferenceById(data.getId());
        todo.updateData(data);

        return ResponseEntity.ok(TodoDTO.toDto(todo));
    }

    @PatchMapping
    @Transactional
    public ResponseEntity conclude(@RequestBody ConcludeDTO data){
        var todo = repository.getReferenceById(data.getId());
        todo.concludeTodo();

        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity remove(@PathVariable Long id) {
        repository.deleteById(id);

        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity detail(@PathVariable Long id) {
        var todo = repository.getReferenceById(id);
        return ResponseEntity.ok(TodoDTO.toDto(todo));
    }

}
