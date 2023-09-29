
package com.abelf.fragance.repositorio;

import com.abelf.fragance.entidades.entidadesClientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface repositorioCliente extends JpaRepository<entidadesClientes,Long>{
    @Query("SELECT l FROM entidadesClientes l WHERE l.id = :id")
    public entidadesClientes buscarPorId(@Param("id") Long id);
}
