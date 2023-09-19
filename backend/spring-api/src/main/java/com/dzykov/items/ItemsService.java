package com.dzykov.items;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemsService {

    private final ItemsRepository itemsRepository;

    public Items createItem(Items item) {
        if (item.getId() == null){
            itemsRepository.save(item);
            return item;
        }
        if (itemsRepository.findById(item.getId()).isPresent()) {
            item.setId(null);
            itemsRepository.save(item);
        }
        itemsRepository.save(item);
        return item;
    }

    public Items getItemById(Integer id){
        if (itemsRepository.findById(id).isEmpty()) {return Items.builder().build();}
        return itemsRepository.findById(id).get();
    }

    public void deleteItemById(Integer id) {
        itemsRepository.deleteItemById(id);
    }

    public Items updateItemById(Integer id, Items item) {
        if (itemsRepository.findById(id).isEmpty()) {
            return createItem(item);
        }

        Items itemNew = itemsRepository.findById(id).get();
        itemNew.setName(item.getName());
        itemNew.setDescription(item.getDescription());
        itemNew.setCategory(item.getCategory());
        itemNew.setPrice(item.getPrice());
        itemNew.setPictures(item.getPictures());
        itemsRepository.save(itemNew);
        return itemNew;
    }

    public List<Items> searchItems(String query) {
        // Not the cuttiest solution, should be rewritten in one query; however, I don't want to think about that.
        List<Items> finalResult = itemsRepository.searchByDescription(query);

        for (Items x : itemsRepository.searchByName(query)){
            if (!finalResult.contains(x))
                finalResult.add(x);
        }

        for (Items x : itemsRepository.searchByCategory(query)){
            if (!finalResult.contains(x))
                finalResult.add(x);
        }

        for (Items x : itemsRepository.findAllMatchingName(query)){
            if (!finalResult.contains(x))
                finalResult.add(x);
        }

        for (Items x : itemsRepository.findAllMatchingCategory(query)){
            if (!finalResult.contains(x))
                finalResult.add(x);
        }

        for (Items x : itemsRepository.findAllMatchingDescription(query)){
            if (!finalResult.contains(x))
                finalResult.add(x);
        }

        return finalResult;
    }

    public List<Items> getAllItems(){
        return itemsRepository.findAll();
    }

}
