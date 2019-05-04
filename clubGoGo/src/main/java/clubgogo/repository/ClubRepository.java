package clubgogo.repository;

import clubgogo.domain.Club;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface ClubRepository extends CrudRepository<Club, String> {
    
}