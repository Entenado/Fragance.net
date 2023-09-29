
package com.abelf.fragance.repositorio;


import com.abelf.fragance.entidades.entidadesOC;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface repositorioOC extends JpaRepository<entidadesOC,Long>{
    
    @Query("SELECT l FROM entidadesOC l WHERE l.id = :id")
    public entidadesOC buscarOCPorId(@Param("id") Long id);
}
