
package com.abelf.fragance.controladores;


import com.abelf.fragance.entidades.entidadesClientes;
import com.abelf.fragance.entidades.entidadesOC;
import com.abelf.fragance.excepciones.MiException;
import com.abelf.fragance.repositorio.repositorioCliente;
import com.abelf.fragance.repositorio.repositorioOC;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/ordenes")
public class OrdenControlador {
    
    @Autowired
    private repositorioOC repositorioOC;
    @Autowired
    private repositorioCliente repositorioCliente;
    
    /*@PostMapping("/compra")
    public entidadesOC guardarOC(@RequestBody entidadesOC ordenCompra){
        Long clienteId = ordenCompra.getCliente().getId();
        entidadesClientes cliente = repositorioCliente.findById(clienteId).orElse(null);
        if(cliente == null){
        
            cliente = repositorioCliente.save(ordenCompra.getCliente());
        }
        ordenCompra.setCliente(cliente);
       return repositorioOC.save(ordenCompra);
    }
    
    @GetMapping("/compra")
    public List<entidadesOC>listarOrdenCompra(){
       return repositorioOC.findAll();
    } */
    
     @PostMapping("/compra")
    public ResponseEntity<?> guardarOC(@RequestBody entidadesOC ordenCompra) {
        try {
            Long clienteId = ordenCompra.getCliente().getId();
            entidadesClientes cliente;

            if (clienteId != null) {
                cliente = repositorioCliente.findById(clienteId).orElse(null);
            }else{
            cliente = null;
            }

            if (cliente == null) {
                // Si el cliente no existe, intenta guardar el cliente
                //entidadesClientes nuevoCliente = ordenCompra.getCliente();
                cliente = repositorioCliente.save(ordenCompra.getCliente());
            }
            

            // Asigna el cliente existente o recién creado a la orden de compra
            ordenCompra.setCliente(cliente);
            
             // Asigna el nombre del cliente a la orden de compra
        ordenCompra.setNombreCliente(cliente.getNombre()); // Ajusta el método según la estructura de tu entidad cliente

        ordenCompra.setApellidoCliente(cliente.getApellido());
        ordenCompra.setEmailCliente(cliente.getEmail());
            // Guarda la orden de compra
            entidadesOC nuevaOrdenCompra = repositorioOC.save(ordenCompra);

            return ResponseEntity.ok(nuevaOrdenCompra);
        } catch (Exception e) {
            
            return ResponseEntity.badRequest().body("Error al guardar la orden de compra" + e.getMessage());
        }
    }
    
    @DeleteMapping("/compra/{id}")
    public ResponseEntity<Map<String,Boolean>>eliminarOc(@PathVariable Long id)throws MiException{
    
        entidadesOC ordenCompra = repositorioOC.findById(id)
                .orElseThrow(() -> new MiException("La OC con ese id no existe : " + id));
        repositorioOC.delete(ordenCompra);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
