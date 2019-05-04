package clubgogo.repository;

import clubgogo.domain.Club;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

@Repository
public interface ClubRepository extends CrudRepository<Club, String> {
    
    Optional<Club> findByUsername(String clubname);

    @Query(value = "SELECT * from Club c where c.clubname = :%clubname%", nativeQuery = true)
    List<Club> getClubByName(String clubname);

    @Query(value = "SELECT * from Favorite f where f.username = :username ORDER BY username", nativeQuery = true)
    List<Club> getFavoriteListSortName(@Param("username") String username);

    @Query(value = "SELECT * from Favorite f where f.username = :username ORDER BY follow_time DESC", nativeQuery = true)
    List<Club> getFavoriteListSortDate(@Param("username") String username);
}