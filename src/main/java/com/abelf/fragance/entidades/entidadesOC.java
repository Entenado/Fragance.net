
package com.abelf.fragance.entidades;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "ordenes")
public class entidadesOC {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @OneToMany(cascade = CascadeType.ALL)
    private List<entidades> productos;
    
    @ManyToOne
    private entidadesClientes cliente;
    
    private Double total;
    
    private LocalDate fecha;
    
    private String nombreCliente;
    private String apellidoCliente;
    private String emailCliente;

    public entidadesOC() {
    }

    public entidadesOC(Long id, List<entidades> productos, entidadesClientes cliente, Double total, LocalDate fecha, String nombreCliente, String apellidoCliente, String emailCliente) {
        this.id = id;
        this.productos = productos;
        this.cliente = cliente;
        this.total = total;
        this.fecha = fecha;
        this.nombreCliente = nombreCliente;
        this.apellidoCliente = apellidoCliente;
        this.emailCliente = emailCliente;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<entidades> getProductos() {
        return productos;
    }

    public void setProductos(List<entidades> productos) {
        this.productos = productos;
    }

    public entidadesClientes getCliente() {
        return cliente;
    }

    public void setCliente(entidadesClientes cliente) {
        this.cliente = cliente;
    }

    public Double getTotal() {
        return total;
    }

    public void setTotal(Double total) {
        this.total = total;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getNombreCliente() {
        return nombreCliente;
    }

    public void setNombreCliente(String nombreCliente) {
        this.nombreCliente = nombreCliente;
    }

    public String getApellidoCliente() {
        return apellidoCliente;
    }

    public void setApellidoCliente(String apellidoCliente) {
        this.apellidoCliente = apellidoCliente;
    }

    public String getEmailCliente() {
        return emailCliente;
    }

    public void setEmailCliente(String emailCliente) {
        this.emailCliente = emailCliente;
    }

    @Override
    public String toString() {
        return "entidadesOC{" + "id=" + id + ", productos=" + productos + ", cliente=" + cliente + ", total=" + total + ", fecha=" + fecha + ", nombreCliente=" + nombreCliente + ", apellidoCliente=" + apellidoCliente + ", emailCliente=" + emailCliente + '}';
    }
    


    
}
