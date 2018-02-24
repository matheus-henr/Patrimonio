package br.com.mhdev.patrimonio.repository;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mhdev.patrimonio.model.Item;

@RestController
@RequestMapping("/itens")
public class ItemCotroller {
	
	@Autowired
	private ItemRepository itemRepository;
	
	@GetMapping
	public ResponseEntity<List<Item>> findAll(){
		List<Item> itens = itemRepository.findAll();
		return new ResponseEntity<>(itens,HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Item> adicionarItem(@RequestBody @Valid Item item,
			Errors erro){
		if(erro.hasErrors()) return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		item = itemRepository.save(item);
		return new ResponseEntity<>(item,HttpStatus.OK);
	} 

}
