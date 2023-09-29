package com.abelf.fragance.servicios;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.abelf.fragance.entidades.entidades;
import com.abelf.fragance.excepciones.MiException;
import com.abelf.fragance.repositorio.repositorio;

@Service
public class perfumeServicio {

    @Autowired
    private repositorio repositorio;

    @Transactional
    public void crearPerfume( String nombre, String modelo, String marca, Double precio, Integer stock)
            throws MiException {

        validar(nombre, modelo, marca, precio, stock);
        
        entidades perfume = new entidades();

        perfume.setNombre(nombre);
        perfume.setModelo(modelo);
        perfume.setMarca(marca);
        perfume.setPrecio(precio);
        perfume.setStock(stock);

       
        repositorio.save(perfume);

    }

    public List<entidades> listarPerfumes() {

        List<entidades> perfumes = new ArrayList();
        perfumes = repositorio.findAll();
        return perfumes;
    }

    public void modificarPerfume(Long isbn, String nombre, String modelo, String marca, Double precio, Integer stock)
            throws MiException {

        validar(nombre, modelo, marca, precio, stock);
        Optional<entidades> respuesta = repositorio.findById(isbn);
        if (respuesta.isPresent()) {

            entidades perfume = respuesta.get();
            perfume.setNombre(nombre);
            perfume.setMarca(marca);
            perfume.setModelo(modelo);
            perfume.setPrecio(precio);
            perfume.setStock(stock);

            repositorio.save(perfume);
        }
    }

    private void validar(String nombre, String modelo, String marca, Double precio, Integer stock)
            throws MiException {
        if (nombre.isEmpty()) {
            throw new MiException("El titulo no puede ser nulo o estar vacio");
        }
        if (modelo.isEmpty()) {
            throw new MiException("El modelo no puede ser nulo o estar vacio");
        }
        if (marca.isEmpty()) {
            throw new MiException("La marca no puede ser nula o estar vacia");
        }
        if (precio < 0) {
            throw new MiException("El precio no puede ser negativo");
        }
    }
}
