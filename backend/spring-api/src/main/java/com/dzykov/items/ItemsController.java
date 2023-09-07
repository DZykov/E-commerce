package com.dzykov.items;

import com.dzykov.config.Endpoints;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = {Endpoints.itemsEndpoint})
@RequiredArgsConstructor
public class ItemsController {

    private final ItemsService itemsService;

    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    @PostMapping(
            value = "/create", consumes = "application/json", produces = "application/json")
    public Items createItem(@RequestBody Items item) {
        return itemsService.createItem(item);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    @DeleteMapping("/delete/{id}")
    public void deleteItem(@PathVariable("id") Integer id) {
        itemsService.deleteItemById(id);
    }

    @PreAuthorize("hasAnyRole('ADMIN', 'MANAGER')")
    @PutMapping(value = "/update/{id}",
        consumes = "application/json", produces = "application/json")
    public Items updateItem(@PathVariable("id") Integer id, @RequestBody Items item) {
        return itemsService.updateItemById(id, item);
    }

    @GetMapping("/get/{id}")
    public Items searchItems(@PathVariable("id") Integer id) {
        return itemsService.getItemById(id);
    }

    @GetMapping("/search")
    public List<Items> searchItems(@RequestParam("query") String query) {
        return itemsService.searchItems(query);
    }
}