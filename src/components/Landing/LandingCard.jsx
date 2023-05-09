export const LandingCard = ({data}) => {
    return (
        <figure>
          <img alt={data.alt} className="figure__img" src={data.url} decoding="async" data-nimg="intrinsic" />
          <figcaption>
            <h3>{data.title}</h3>
          </figcaption>
          <p>{data.description}</p>
        </figure>
    );
  };