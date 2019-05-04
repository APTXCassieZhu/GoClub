package clubgogo.repository;

import clubgogo.domain.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

@Repository
public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {

    @Query(value = "SELECT * from Favorite f where f.username =:username", nativeQuery = true)
    List<Favorite> getFavoriteList(String username);

    @Query(value = "SELECT * from Favorite f where f.username =:username ORDER BY username", nativeQuery = true)
    List<Favorite> getFavoriteListSortName(@Param("username") String username);

    @Query(value = "SELECT * from Favorite f where f.username =:username ORDER BY follow_time DESC", nativeQuery = true)
    List<Favorite> getFavoriteListSortDate(@Param("username") String username);
}