
package com.abelf.fragance.controladores;

import com.abelf.fragance.entidades.entidades;
import com.abelf.fragance.excepciones.MiException;
import com.abelf.fragance.repositorio.repositorio;
import com.abelf.fragance.servicios.perfumeServicio;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/perfume")//localhost :8080/perfume
public class PerfumeControlador {
    
    @Autowired
    private perfumeServicio perfumeServicio;
    @Autowired
    private repositorio repositorio;
     
   @GetMapping("/perfumes")
    public List<entidades>listarPerfumes(){
       return repositorio.findAll();
    } 
    @GetMapping("/registrar")//localhost:8080/perfume/registrar
    public String registrar(){
    
        return "perfume_form.html";
    }
    @PostMapping("/perfumes")
    public entidades guardarPerfume(@RequestBody entidades perfume){
       return repositorio.save(perfume);
    }
    
    @GetMapping("/perfumes/{isbn}")
    public ResponseEntity<entidades> listarPerfumesPorId(@PathVariable Long isbn) throws MiException{
    
        entidades perfume = repositorio.findById(isbn)
                .orElseThrow(() -> new MiException("El cliente con ese ID no existe" + isbn));
        return ResponseEntity.ok(perfume);
    }
    
    @PostMapping("/registro")
    public String registro(@RequestParam(required=false) Long isbn, @RequestParam String nombre, @RequestParam String modelo, @RequestParam String marca, @RequestParam Double precio, @RequestParam Integer stock ){

        try {
            perfumeServicio.crearPerfume(nombre, modelo, marca, precio, stock);
        } catch (MiException ex) {
            Logger.getLogger(PerfumeControlador.class.getName()).log(Level.SEVERE, null, ex);
       return "perfume_form.html";
        }
       return "index.html";
    }
    
    @PutMapping("/perfumes/{isbn}")
    public ResponseEntity<entidades> actualizarPerfume(@PathVariable Long isbn, @RequestBody entidades perfumeRequest, @RequestBody Map<String, Object> actualizacion) throws MiException{
    
        entidades perfume = repositorio.findById(isbn)
                .orElseThrow(() -> new MiException("El cliente con ese ID no existe : " + isbn));
        perfume.setNombre(perfumeRequest.getNombre());
        perfume.setModelo(perfumeRequest.getModelo());
        perfume.setMarca(perfumeRequest.getMarca());
        perfume.setPrecio(perfumeRequest.getPrecio());
         if (actualizacion.containsKey("stock")) {
        int nuevoStock = (int) actualizacion.get("stock");
        perfume.setStock(nuevoStock);
    }
        
        entidades perfumeActualizado = repositorio.save(perfume);
        return ResponseEntity.ok(perfumeActualizado);
        
    }
    //---------------------------------------------//
    @PutMapping("/perfumes/{isbn}/stock")
public ResponseEntity<entidades> actualizarStockPerfume(
    @PathVariable Long isbn,
    @RequestParam("stock") Integer nuevoStock
) throws MiException {
     entidades perfume = repositorio.findById(isbn)
        .orElseThrow(() -> new MiException("El cliente con ese ID no existe : " + isbn));
    perfume.setStock(nuevoStock);
    entidades perfumeActualizado = repositorio.save(perfume);
    return ResponseEntity.ok(perfumeActualizado);
}
    //--------------------------------------------//
    @DeleteMapping("/perfumes/{isbn}")
    public ResponseEntity<Map<String,Boolean>> eliminarPerfume(@PathVariable Long isbn) throws MiException{
    
        entidades perfume = repositorio.findById(isbn)
                .orElseThrow(() -> new MiException("El perfume con ese ID no existe: " + isbn));
        repositorio.delete(perfume);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
        
    }
    
    
      /*  @GetMapping("/")
    public String listarPerfumes(ModelMap modelo) {
        List<entidades> perfumes = perfumeServicio.listarPerfumes();
        modelo.addAttribute("perfumes", perfumes);

        return "index.html";
    }*/
    
}
