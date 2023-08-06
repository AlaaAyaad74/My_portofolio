import { styled } from "styled-components";

export default styled.div`
 margin: 2rem 4rem;
.Info__Form {
  width: 100%;
  gap: 2rem;
}
.Info__data__title {
  font-weight: 600;
  font-size: 1.1rem;
}
h3,
ul {
  margin-inline-start: 2rem;
}

.Card__Info {
  padding: 1em;
  /* border: 1px solid black; */
}
p {
  margin-bottom: 0.5em;
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  align-items: center;
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  /* grid-column-end: 3;
  grid-column-start: 1; */
}
li {
  padding: 0.5em 1em;
  background-color: #ddd;
}
span {
  margin-inline-end: 0.4em;
}
span img {
  width: 30px;
}
@media (max-width: 696px) {
  margin: 2rem;
}


`