package com.dzykov.user;

import com.dzykov.items.Items;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public User getUserById(Integer id) {
        if (userRepository.findById(id).isEmpty()) {
            User u = User.builder().build();
            u.setRole(Role.USER);
            return u;
        }
        return userRepository.findById(id).get();
    }

    public User getUserByEmail(String email) {
        if (userRepository.findByEmail(email).isEmpty()) {
            User u = User.builder().build();
            u.setRole(Role.USER);
            return u;
        }
        return userRepository.findByEmail(email).get();
    }

    public User updateUserById(Integer id, User user) {
        if (userRepository.findById(id).isEmpty()) {
            User u = User.builder().build();
            u.setRole(Role.USER);
            return u;
        }

        User userNew = userRepository.findById(id).get();
        // NOTE: changing username/email requires regenerating JWT tokens for this entity, and sending that Token back to user.
        userNew.setFirstname(user.getFirstname());
        userNew.setLastname(user.getLastname());
        userRepository.save(userNew);
        return userNew;
    }

}
