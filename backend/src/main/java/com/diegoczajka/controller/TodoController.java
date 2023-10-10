package com.diegoczajka.controller;

import com.diegoczajka.domain.todo.DataRegisterTodo;
import com.diegoczajka.domain.todo.ResponseTodoData;
import com.diegoczajka.domain.todo.TodoList;
import com.diegoczajka.domain.todo.TodoListRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

@RestController
@RequestMapping("/todo")
public class TodoController {

    @Autowired
    TodoListRepository repository;

    @PostMapping
    @Transactional
    public ResponseEntity registarTask(@RequestBody @Valid DataRegisterTodo data, UriComponentsBuilder uriComponentsBuilder){

        var todo = new TodoList(data);
        repository.save(todo);
        var uri = uriComponentsBuilder.path("/todo/{id}").buildAndExpand(todo.getId()).toUri();
        return ResponseEntity.created(uri).body(new ResponseTodoData(todo));
    }

}
