package com.irambo.genesiscore.repositories

import org.springframework.stereotype.Repository
import org.springframework.data.repository.CrudRepository
import java.lang.Long

import com.irambo.genesiscore.entity.Users

@Repository
trait UserRepository extends CrudRepository[Users, Long] {

  def findUserByUsername(username: String): Users

}

