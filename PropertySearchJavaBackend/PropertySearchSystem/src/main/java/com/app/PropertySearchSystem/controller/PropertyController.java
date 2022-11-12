package com.app.PropertySearchSystem.controller;

import java.util.List;

import javax.net.ssl.SSLEngineResult.Status;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.PropertySearchSystem.entity.AddProperty;
import com.app.PropertySearchSystem.entity.Owner;
import com.app.PropertySearchSystem.entity.Property;
import com.app.PropertySearchSystem.entity.Tax;
import com.app.PropertySearchSystem.service.PropertyService;
import com.fasterxml.jackson.core.JsonProcessingException;

@CrossOrigin
@RestController
@RequestMapping("/propertysystem")
public class PropertyController {
	@Autowired // DI
	PropertyService propertyService; 
	
	

	@GetMapping(value="/searchProperty", produces = MediaType.APPLICATION_JSON_VALUE) 
	@ResponseBody
	public ResponseEntity<List<Property>> searchProperty(@RequestParam(required = false) String ownerFirstName,@RequestParam(required = false) String ownerLastName,
			@RequestParam(required = false) String propertyAddress,@RequestParam(required = false) String propertyType) throws JsonProcessingException {
		
		
		List<Property>propertyList=propertyService.searchProperty(ownerFirstName,ownerLastName,propertyAddress,propertyType);
		
		System.out.println(propertyList.toString());
return new ResponseEntity<>(propertyList,HttpStatus.OK)
		;

		}

	@GetMapping(value="/owner", produces = MediaType.APPLICATION_JSON_VALUE) 
	@ResponseBody
	public ResponseEntity<List<Owner>> getOwnerByPropertyId(@RequestParam String propId) throws JsonProcessingException {
		
		int id = Integer.parseInt(propId);
		List<Owner>owners=propertyService.getOwnerbyPropertyId(id);
		
		System.out.println(owners.toString());
return new ResponseEntity<>(owners,HttpStatus.OK)
		;

		}
	//@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/addProperty")
	public ResponseEntity<?> addProperty(@Valid @RequestBody AddProperty addproperty){
		
	return 	propertyService.addProperty(addproperty);// mock
	}

}
