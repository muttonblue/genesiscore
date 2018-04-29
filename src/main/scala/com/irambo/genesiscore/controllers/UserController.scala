package com.irambo.genesiscore.controllers

import java.lang.Iterable

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import javax.sql.DataSource
import com.irambo.genesiscore.entity.Users
import com.irambo.genesiscore.services.UserService
import org.springframework.http.HttpStatus
import org.springframework.http.HttpHeaders
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.web.bind.annotation.PathVariable

@RestController
@RequestMapping(path = Array("/api"))
class UserController(@Autowired private val userService: UserService, @Autowired private val dataSource: DataSource) {

  @GetMapping(path = Array("/users"))
  def getAllUsers(): Iterable[Users] = {
    System.out.println("xxxxxxxxxsdfsdfalsdhfalskdjfalskj");
    userService.listUsers
  }
  
  @GetMapping(path = Array("/users/{id}"))
  def getUser(@PathVariable id: Long): Users = {
    userService.getUser(id)
  }

  @PostMapping(path = Array("/users"))
  def createUser(@RequestBody users: Users): ResponseEntity[Long] = {
    val id = userService.createUser(users)
    new ResponseEntity(id, new HttpHeaders, HttpStatus.CREATED)
  }

}