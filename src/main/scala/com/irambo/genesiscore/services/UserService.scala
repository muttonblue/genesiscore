package com.irambo.genesiscore.services

import org.springframework.stereotype.Service
import org.springframework.beans.factory.annotation.Autowired
import java.util.List
import java.lang.Iterable

import com.irambo.genesiscore.repositories.UserRepository
import com.irambo.genesiscore.entity.Users
import org.springframework.security.access.prepost.PreAuthorize
import org.springframework.security.access.prepost.PostAuthorize

@Service
class UserService(@Autowired private val userRepository: UserRepository) {

  @PreAuthorize("hasRole('admin')")
  def listUsers(): Iterable[Users] = {
    userRepository.findAll
  }

  @PreAuthorize("hasRole('user')")
  @PostAuthorize("returnObject.username==principal.username || hasRole('admin')")
  def getUser(id: Long): Users = {
    userRepository.findOne(id)
  }

  @PreAuthorize("hasRole('admin')")
  def createUser(users: Users): Long = {
    userRepository.save(users)
    users.id
  }

}