package clubgogo.repository;

import clubgogo.domain.Clubuser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClubuserRepository extends JpaRepository<Clubuser, String> {

    Optional<Clubuser> findByUsername(String username);
}

