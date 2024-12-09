import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById(id), [id]);

  const onNavigateBack = () => {
    return navigate(-1);
  };

  if (!hero) return <Navigate to="/marvel" replace />;

  return (
    <div className="row mt-5">
      <div className="col-4 animate__animated animate__fadeInLeft">
        <img
          className="img-thumbnail"
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeInRight">
        <h3>{hero.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego:</b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance:</b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Return
        </button>
      </div>
    </div>
  );
};
