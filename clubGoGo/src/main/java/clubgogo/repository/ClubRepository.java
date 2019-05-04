package clubgogo.repository;

import clubgogo.domain.Club;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface ClubRepository extends CrudRepository<Club, String> {
    
    //Optional<Club> findByUsername(String clubname);

    // @Query(value = "SELECT * from Club c where c.clubname like 'clubname'", nativeQuery = true)
    // List<Club> getClubByName(@Param("clubname") String clubname);

    // @Query(value = "SELECT * from Club c where c.username =:%username% and c.category =:%category%", nativeQuery = true)
    // List<Club> getFavoriteListSortName(@Param("username") String username, @Param("category") String category);
}