package com.abelf.fragance.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.abelf.fragance.entidades.entidades;

@Repository
public interface repositorio extends JpaRepository<entidades, Long> {

    @Query("SELECT l FROM entidades l WHERE l.nombre = :nombre")
    public entidades buscarPorNombre(@Param("nombre") String nombre);

}
